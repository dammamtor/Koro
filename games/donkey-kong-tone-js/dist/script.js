p5.disableFriendlyErrors = true;

let canvas;

// Main player.
let dk;
let dkSize = 120;

let bSize = 20;

let jumpReady = false;
let k;
let s;


let imageDK;


function preload(){
  
  imageDK = loadImage("https://redhendev.github.io/InfinitePacman/DK/chimply.png");
    
}

function setup(){
  
  canvas = createCanvas(windowWidth-32,
                       420);
  
  
  setupTone();
  
  RedHen_2DPhysics.setupMatter(true);
  
    bods[0].label("bound");
   bods[1].label("bound");
   bods[2].label("bound");
   bods[3].label("bound");
  
  RedHen_2DPhysics.setGravity(0,1);
  
  RedHen_2DPhysics.newObj('ghostCircle', width/2, 150, dkSize/4);
  
  dk = RedHen_2DPhysics.lastObjectCreated();
  
  //dk.rotation = false;
  dk.label('DK');
  
  
  
  RedHen_2DPhysics.setupCollisions();
  
  RedHen_2DPhysics.setGravity(0,0);
  
}


// Single synth variable.
let synth;

// Array of synth objects.
let tones = [];

function setupTone(){
synth = new Tone.Synth().toMaster();
}

function dropBarrel(){
  RedHen_2DPhysics.newObj('circle', Math.random()*width, height-64, bSize);
  
  // Create new tone synth object.
  tones.push(new Tone.Synth().toMaster());
  
  let b = RedHen_2DPhysics.lastObjectCreated();
  b.fill = color(164, 0, 164);
  b.stroke = color(199, 0, 199);
  b.strokeWeight = 3;
  
  b.label("barrel");
  
}



function draw(){
  
  //background(0, 101, 202);
  background(0);
  
  // Render DK.
 RedHen_2DPhysics.updateObjs();
 image(imageDK, dk.bod.position.x,
                dk.bod.position.y,
                dkSize, dkSize);
  
  
  checkKeys();
  
  // 'Grow' pink barrels.
  if (frameCount % 1 === 0 && (
     bods.length < width/bSize/2 * height/bSize/2) && bods.length < 24)
    dropBarrel();
  //else displayMessage();
  
  // Velocity regulation.
  if (Math.abs(dk.bod.velocity.x) > 0.04)
    dk.bod.velocity.x *= 0.1;
  if (Math.abs(dk.bod.velocity.y) > 0.04)
    dk.bod.velocity.y *= 0.1;
  
  // Ready to jump?
  if (k != null)
    doForce();
 
}

function checkKeys(){
  
  if (keyIsDown(UP_ARROW)){
    if (jumpReady){
    k = dk;
    
    // Create tone.
    //play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease(Math.random()*440 + 55, "8n");
    }
    
    // let force = createVector(0, -1);
    // force.mult(0.004);
    // dk.addForce(force);
  }
  if (keyIsDown(DOWN_ARROW)){
    
    let force = createVector(0, 1);
    force.mult(0.001);
    dk.addForce(force);
  }
  if (keyIsDown(LEFT_ARROW)){
    
    let force = createVector(-1, 0);
    force.mult(0.008);
    dk.addForce(force);
  }
  if (keyIsDown(RIGHT_ARROW)){
    
    let force = createVector(1, 0);
    force.mult(0.008);
    dk.addForce(force);
  }
  
}

function displayMessage(){
  stroke(255);
  fill(255);
  textSize(22);
  strokeWeight(0);
  text("Use arrow keys," + "\n" + "or drag DK around, \nto relieve stress :)",dk.bod.position.x-64,
       dk.bod.position.y-height/2);
}

function myCollision(event){
        // Ref to all pairs of bodies colliding.
        let pairs = event.pairs;
        // Iterate over the pairs to
        // find the condition you're
        // looking for.
        for (let i = 0; i < 
             pairs.length; i++){
            // The event's pairs will have a 
            // bodyA and bodyB object that
            // we can grab here...
            let bodA = pairs[i].bodyA;
            let bodB = pairs[i].bodyB;
            
          
           if (bodA.label === 'DK' &&
               bodB.label === 'barrel'){
             tones[bodB.id-6].triggerAttackRelease(70+bodB.id*2, "32n");
           }
          
          
             if (bodA.label === 'DK' ||
                 bodB.label === 'DK'){
           
              jumpReady = true;
               
             //synth.triggerAttackRelease("A2", "32n");
               
                //s = bods[bodB.id-2];
               
               //break;
               
                }
          
          if (bodB.label === 'DK' &&
              bodA.label === 'bound'){
           synth.triggerAttackRelease("A2", "32n");
          }
          
          
            }   // End of forLoop.
}

function doForce(){
  if (!jumpReady) return;
  let force = createVector(0,-1);
  force.mult(0.2);
  k.addForce(force);
  k = null;
  jumpReady = false;
  
  // if (s.dia < width/3)
  // s.makeScale(1.1);
  // s = null;
}

// DK art credit:
// http://constantsandvariables.altervista.org
function loadEventsIndex(divContenedor, divRepetir, eventos){
    divContenedor.innerHtml = ''
    var repetido;
    var num = 0;
    var descField
    for(e of eventos){
        descField = ""
        repetido = divRepetir.cloneNode(true)
        repetido.querySelector('.imagen').style.backgroundImage = "url("+e.image+")"
        repetido.querySelector('.titulo').innerText = e.event
        if(e.official){
            repetido.querySelector('.titulo').innerHTML+= '<img src="images/check.png" style="height: 20px; display:inline-block; margin-left: 5px"></img>'
        }
        for(let i = 0; i<35;i++){
            descField+=e.description[i]
        }
        descField+="..."
        repetido.querySelector('.texto').innerText = descField
        repetido.querySelector('.autor').innerText = e.creator
        repetido.getElementsByTagName("button")[0].innerHTML = '<a href="evento.html?pos='+num.toString()+'">Join</a>'
        num++
        divContenedor.appendChild(repetido)
        console.log(repetido)
    }
    console.log(divContenedor)
    return divContenedor;
}
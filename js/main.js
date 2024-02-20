function loadEventsIndex(divContenedor, divRepetir, eventos) {
    divContenedor.innerHtml = ''
    var repetido;
    var num = 0;
    var descField
    for (e of eventos) {
        descField = ""
        repetido = divRepetir.cloneNode(true)
        repetido.querySelector('.imagen').style.backgroundImage = "url(" + e.image + ")"
        repetido.querySelector('.titulo').innerText = e.event
        if (e.official) {
            repetido.querySelector('.titulo').innerHTML += '<img src="images/check.png" style="height: 20px; display:inline-block; margin-left: 5px"></img>'
        }
        for (let i = 0; i < 35; i++) {
            descField += e.description[i]
        }
        descField += "..."
        repetido.querySelector('.texto').innerText = descField
        repetido.querySelector('.autor').innerText = e.creator
        repetido.getElementsByTagName("button")[0].innerHTML = '<a href="evento.html?pos=' + num.toString() + '">Join</a>'
        num++
        divContenedor.appendChild(repetido)
        //console.log(repetido)
    }
    console.log(divContenedor)
    return divContenedor;
}
function loadEventsIndexNoLog(divContenedor, divRepetir, eventos) {
    divContenedor.innerHtml = ''
    var repetido;
    var num = 0;
    var descField
    for (e of eventos) {
        descField = ""
        repetido = divRepetir.cloneNode(true)
        repetido.querySelector('.imagen').style.backgroundImage = "url(" + e.image + ")"
        repetido.querySelector('.titulo').innerText = e.event
        if (e.official) {
            repetido.querySelector('.titulo').innerHTML += '<img src="images/check.png" style="height: 20px; display:inline-block; margin-left: 5px"></img>'
        }
        for (let i = 0; i < 35; i++) {
            descField += e.description[i]
        }
        descField += "..."
        repetido.querySelector('.texto').innerText = descField
        repetido.querySelector('.autor').innerText = e.creator
        repetido.getElementsByTagName("button")[0].innerHTML = '<a href="register.html">Join</a>'
        num++
        divContenedor.appendChild(repetido)
        //console.log(repetido)
    }
    console.log(divContenedor)
    return divContenedor;
}
function checkLogin() {
    // Create a FileReader
    const reader = new FileReader();

    // Set up the FileReader onload event
    reader.onload = function (e) {
        // e.target.result contains the file content
        const fileContent = e.target.result;
        console.log('File Content:', fileContent);
        // You can process the file content here as needed
    };

    // Specify the path to your file (assuming it's in the same directory)
    const filePath = 'login';

    // Use fetch to load the file
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            // Read the Blob as text
            reader.readAsText(blob);
        })
        .catch(error => {
            console.error('Error loading the file:', error);
        });

}
function loadEventsIndex(divContenedor, divRepetir, eventos){
    divContenedor.innerHtml = ''
    var repetido;
    var num = 0;
    for(e of eventos){
        repetido = divRepetir.cloneNode(true)
        repetido.querySelector('.imagen').style.backgroundImage = "url(images/imagesEvents/"+num+".jpg)"
        num++
        repetido.querySelector('.titulo').innerText = e.event
        repetido.querySelector('.texto').innerText = e.description
        repetido.querySelector('.autor').innerText = e.creator
        divContenedor.appendChild(repetido)
        console.log(repetido)
    }
    console.log(divContenedor)
    return divContenedor;
}
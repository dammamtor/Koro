function loadEvents(divContenedor, divRepetir, eventos){
    divContenedor.innerHtml = ''
    var repetido;
    for(e of eventos){
        repetido = divRepetir.cloneNode(true)
        repetido.querySelector('.imagen').style.backgroundImage = "url(e.image)"
        repetido.querySelector('.titulo').innerText = e.event
        repetido.querySelector('.texto').innerText = e.description
        repetido.querySelector('.autor').innerText = e.creator
        divContenedor.appendChild(repetido)
        console.log(repetido)
    }
    console.log(divContenedor)
    return divContenedor;
}
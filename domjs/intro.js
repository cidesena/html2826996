var titulo=document.getElementById("principaltitle")
console.log(typeof(titulo))
console.log(titulo.innerHTML)
titulo.innerHTML="JUAN LUIS GUERRA"
console.log(titulo.innerHTML)
titulo.innerHTML="MARIA SUAREZ"
console.log(titulo.innerHTML)


var divs=document.getElementsByTagName("div")
console.log(divs.length)
divs[4].style.background="salmon"

var clases=document.getElementsByClassName("portfolio-item")
console.log(`cantidad de etiquetas clase portfolio-item= ${clases.length}`)
i=0
for(i=0; i<clases.length ; i++){
    clases[i].innerHTML=i*1000
    console.log(clases[i].innerHTML)
}

//var parrafos=document.querySelectorAll("p")
//var h3s=document.querySelector("h3")
//var h3s=document.getElementsByTagName("h3")
var titulox=document.getElementById("prueba1")
console.log(titulox.innerHTML)
//console.log(parrafos)

const colorTitulo=()=>{
    if(titulo.style.color=="white")
        titulo.style.color="coral"
    else titulo.style.color="white"
}

const alinearTitulo=()=>{
    if(titulo.style.textAlign!="center")
        titulo.style.textAlign="center"
    else titulo.style.textAlign="left"
}

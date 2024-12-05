const ff=document.getElementById("miform")
var dato

const enviar=()=>{
dato=ff.elements["nombre"].value
localStorage.setItem("data",dato)
var url="http://127.0.0.1:5502/formularios/formD.html"
window.open(url)    
}
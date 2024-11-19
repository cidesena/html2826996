var x=parseInt(Math.random()*(10-4)+4)               
console.log(x)

function saludo(nombre){
    return `Hola ${nombre}`
}
console.log(saludo("sena",1,2))

var saludar=function(){return "hola"}

var saludito=()=>"Hola......"
console.log(saludito())

var saludito2=name=>`Hola ${name} como estas`
console.log(saludito2("Donald Trump"))

var saludito3=(name, apellido)=>`Hola ${name} ${apellido}`
console.log(saludito3("Donald","Trump"))

var sumar=(n1,n2)=>n1+n2
let x=parseInt(prompt("Ingrese numero"))
//console.log(typeof(x))
let y=parseInt(prompt("Ingrese numero"))

if(x>y){
    console.log(`${x} es mayor que ${y}`)
}
else if(y>x){
    console.log(`${y} es mayor que ${x}`)
}
else{
    console.log("Son iguales")
}

let sel=3
switch(sel){
    case 1:
        console.log("case 1")
    break
    case 2:
        console.log("case 2")
    break
    case 3:
        console.log("case 3")
    break
    case 4:
        console.log("case 4")
    break
default:console.log("ningun caso")
}
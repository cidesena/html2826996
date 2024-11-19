//const num=parseInt(prompt("ingrese numero"))

// for(i=num ; i>=1 ; i=i-1){
//     if(num%i==0){
//     console.log(`${i} es divisor`)
//     }
// }
let num=0
let cont=0

// while(num!=0){
//     num=parseInt(prompt("ingrese numero"))
//     cont++
// }

// console.log(`ingreso ${cont} numeros` )

do{
    num=parseInt(prompt("ingrese numero"))
    cont++
}while(num!=0)

console.log(`ingreso ${cont} numeros` )
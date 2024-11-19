// let tam=parseInt(Math.random()*(15-5)+5)
// let vec=Array()
// for(var i=0; i<tam; i++){        
//     vec[i]=parseInt(Math.random()*100)
// }
// console.log(vec)

let llenarVector=()=>{
    var vec=Array()
    let tam=parseInt(Math.random()*(15-5)+5)
    for(var i=0; i<tam; i++){        
        vec[i]=parseInt(Math.random()*10)
    }
    return vec
}

let vector=llenarVector()
console.log(vector)
console.log(vector.length)

let sumaVector=vec=>{
    let suma=0
    for(var i=0; i<vec.length; i++){        
     suma+=vec[i]
    }
    return suma
}

console.log(sumaVector(vector))


// let vec=['sena',100,3.4,[100,200],'soacha']
// vec[10]=333
// console.log(vec)
//console.log(typeof(vec))
// let vec1=Array(1,2,3,4,5)
// console.log(typeof(vec))
// console.log(typeof(vec1))
// console.log(vec)
// console.log(vec1)
// let tam=parseInt(Math.random()*100)
// console.log(tam)
// let rango=parseInt(Math.random()*(20-10)+10)
// console.log(rango)



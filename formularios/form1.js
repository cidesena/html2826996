const ff=document.getElementById("miform")

const operacion=()=>{
    var num1=parseInt(ff.elements['n1'].value)
    var num2=parseInt(ff.elements['n2'].value)
    var rr=ff.elements['res']
    //console.log(typeof(num1))
    // console.log(dd.value)
    rr.value=num1+num2
}
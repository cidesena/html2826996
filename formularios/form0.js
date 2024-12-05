const ff=document.getElementById("miform")

const captura=()=>{
    var nn=ff.elements['nombre']
    var dd=ff.elements['doc']
    var rr=ff.elements['res']
    console.log(nn.value)
    console.log(dd.value)
    rr.value=`nombre=${nn.value} documento=${dd.value}`        
}
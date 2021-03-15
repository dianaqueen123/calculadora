function suma(){ 
    var v1= parseInt(document.getElementById("n1").value);
    var v2= parseInt(document.getElementById("n2").value);
    var r= (v1 + v2)
    document.getElementById("respuesta").innerHTML = r;
    
    }

    function resta(){ 
        var v1= parseInt(document.getElementById("n1").value);
        var v2= parseInt(document.getElementById("n2").value);
        var r= (v1 - v2)
        document.getElementById("respuesta").innerHTML = r;
        
        }


function multiplicación(){
var v1= parseInt(document.getElementById("n1").value);
var v2= parseInt(document.getElementById("n2").value); 
var r= (v1*v2)
document.getElementById("respuesta").innerHTML = r;  }

function división(){ 
var v1= parseInt(document.getElementById("n1").value);
var v2= parseInt(document.getElementById("n2").value);
var r= (v1/v2)
document.getElementById("respuesta").innerHTML = r;

}
 
 
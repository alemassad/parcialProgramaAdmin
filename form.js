
function verificarNombre(dato){
    var nombre= (dato.value);
    if(nombre.length<3||nombre.length==""){
        document.getElementById("errorNombre").style.display ="block";
        rojo("nombre");              
        console.log("ingrese un Nombre verdadero "+!isNaN(nombre));
        document.getElementById("errorNombre").style.display ="block";
        rojo("nombre");        
    }else if(!isNaN(nombre)){
        document.getElementById("errorNombre").style.display ="block";
        rojo("nombre");        
    }else{
        document.getElementById("errorNombre").style.display="none";
        verde("nombre");
    } 
}    
function verificarCorreo(dato){
    var correo= dato.value;
    if(!correo.includes("@")){
        console.log("ingrese un Correo con @, "+correo.toUpperCase()+" no es válido");
        document.getElementById("errorCorreo").style.display ="block";
        rojo("correo");
    }else if (!correo.endsWith(".com")&&(!correo.endsWith(".ar"))){
        console.log("ingrese un Correo verdadero, "+correo.toUpperCase()+" no es válido");
        document.getElementById("errorCorreo").style.display = "block";
        rojo("correo");
    }else{
        document.getElementById("errorCorreo").style.display ="none";
        verde("correo");
    }
}    
function verificarTelefono(dato){
    var telefono= dato.value;
    console.log(telefono);
    if(!parseInt(telefono)){
        console.log("ingrese un telefono con números, "+telefono.toUpperCase()+" no es válido");
        document.getElementById("errorTelefono").style.display = "block";
        rojo("telefono");
    }else{
        document.getElementById("errorTelefono").style.display ="none";
        verde("telefono");
    }
}   
function verificarCheck(){
    var check= document.getElementById(check);
    if(!check.checked){
        alert("deberias chequear una opcion CHECK");
    }
} 
function rojo(e){
    document.getElementById(e).style.background = "rgb(255, 4, 2, 0.5)";    
}
function verde(e){
    document.getElementById(e).style.background = "rgb(157, 230, 188, 0.7)";
}

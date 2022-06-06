
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
function verificarApellido(dato){
    var apellido= (dato.value);
    if(apellido.length<3||apellido.length==""){
        document.getElementById("errorApellido").style.display ="block";
        rojo("apellido");              
        console.log("ingrese un Apellido valido "+(apellido));
        document.getElementById("errorAoellido").style.display ="block";
        rojo("apellido");        
    }else if(!isNaN(apellido)){
        document.getElementById("errorApellido").style.display ="block";
        rojo("apelldio");        
    }else{
        document.getElementById("errorApellido").style.display="none";
        verde("apellido");
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
function verificarEdad(dato){
    var edad= dato.value;
    console.log(edad);
    if(!parseInt(edad)){
        console.log("ingrese una Edad con números, "+edad.toUpperCase()+" no es válido");
        document.getElementById("errorEdad").style.display = "block";
        rojo("edad");
    }else if (edad<0 || edad>99){
        console.log("ingrese una Edad entre 0 y 100 años ,"+edad.toUpperCase()+" no es válido");
        document.getElementById("errorEdad").style.display = "block";
        rojo("edad");  
    }else{        
        document.getElementById("errorEdad").style.display ="none";
        verde("edad");
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

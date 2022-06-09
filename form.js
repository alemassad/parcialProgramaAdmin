var nombreValido="";
var apellidoValido="";
var correoValido="";
var edadValido="";
var sexoValido="";
var interesValido="";
var paisValido="";
function verificarNombre(dato){
    var nombre= document.getElementById("nombre").value;
    if(nombre.length<3||nombre.length==""){
        document.getElementById("errorNombre").style.display ="block";
        rojo("nombre");              
        console.log("ingrese un Nombre verdadero "+!isNaN(nombre));
        document.getElementById("errorNombre").style.display ="block";
        rojo("nombre");
        return false;        
    }else if(!isNaN(nombre)){
        document.getElementById("errorNombre").style.display ="block";
        rojo("nombre");   
        return false;     
    }else{
        document.getElementById("errorNombre").style.display="none";
        verde("nombre");
        console.log("nombre es: "+nombre);     
        nombreValido=nombre;   
        return true;
    } 
}    
function verificarApellido(dato){
    var apellido= document.getElementById("apellido").value;
    if(apellido.length<3||apellido.length==""){
        document.getElementById("errorApellido").style.display ="block";
        rojo("apellido");              
        console.log("ingrese un Apellido valido "+(apellido));
        document.getElementById("errorAoellido").style.display ="block";
        rojo("apellido");
        return false;        
    }else if(!isNaN(apellido)){
        document.getElementById("errorApellido").style.display ="block";
        rojo("apellido");
        return false;        
    }else{
        document.getElementById("errorApellido").style.display="none";
        verde("apellido");
        console.log("el Apellido es: "+apellido);
        apellidoValido=" "+ apellido;
        return true;
    } 
}    
function verificarCorreo(dato){
    var correo= document.getElementById("correo").value;
    var regexEmail= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(!regexEmail.test(correo)){
        console.log("entrar un mail valido");
        rojo("correo");
    }else{
        document.getElementById("errorCorreo").style.display ="none";
        verde("correo");
        console.log("Email es: "+correo);
        correoValido=" "+correo;
        return true;
    }
    /*if(!correo.includes("@")){
        console.log("ingrese un Correo con @, "+correo.toUpperCase()+" no es válido");
        document.getElementById("errorCorreo").style.display ="block";
        rojo("correo");
        return false;
    }else if (!correo.endsWith(".com")&&(!correo.endsWith(".ar"))){
        console.log("ingrese un Correo verdadero, "+correo.toUpperCase()+" no es válido");
        document.getElementById("errorCorreo").style.display = "block";
        rojo("correo");
        return false;
    }else{
        document.getElementById("errorCorreo").style.display ="none";
        verde("correo");
        console.log("Email es: "+correo);
        return true;
    } */
}   

function verificarEdad(dato){
    var edad= document.getElementById("edad").value;

    if(!parseInt(edad)){
        console.log("ingrese una Edad con números, "+edad.toUpperCase()+" no es válido");
        document.getElementById("errorEdad").style.display = "block";
        rojo("edad");
        return false;
    }else if (edad<0 || edad>99){
        console.log("ingrese una Edad entre 0 y 100 años ,"+edad.toUpperCase()+" no es válido");
        document.getElementById("errorEdad").style.display = "block";
        rojo("edad");
        return false;  
    }else{        
        document.getElementById("errorEdad").style.display ="none";
        verde("edad");
        console.log("años: "+edad);
        edadValido=edad;
        return true;
    }
} 
var interesCheck="";  
function verificarCheck(dato){
    var datoCheck= dato;
    if(datoCheck.checked){
        console.log("Has chequeado la opcion "+ datoCheck.name);
        interesCheck+= datoCheck.name+" ";
        verde("divInteres");
        interesValido=" "+interesCheck;
        return true;        
    }else {
        return false;
    }
    
}
function mostrarSexo(){
    var radioSexo="";
    
    if (document.getElementById("hombre").checked){
        console.log('ELEJISTE HOMBRE');
        radioSexo="Hombre"; 
        sexoValido=" "+radioSexo;  
        verde("divSexo");     
    }
    if (document.getElementById('mujer').checked){
        console.log('Elejiste mujer');
        radioSexo="Mujer"
        sexoValido=" "+radioSexo;  
        verde("divSexo");
    }
    if (document.getElementById('otre').checked){
        console.log('select otre');
        radioSexo="Otre";
        sexoValido=" "+radioSexo;  
        verde("divSexo");
    }
}
function verificarPais(dato){
    var datoPais= document.getElementById("paices").value;   
    if(datoPais=="0"){
        console.log("select pais: "+datoPais);
        rojo("divPais");
        return false;
    }else if(datoPais){
        console.log("select pais: "+datoPais);
        verde("divPais");
        paisValido=" "+datoPais;
        return true;        
    }
}
function textTarea(){
    document.getElementById("mensaje").style.background = "rgb(157, 230, 188, 0.7)";
}

function rojo(e){
    document.getElementById(e).style.background = "rgb(255, 4, 2, 0.5)";    
}
function verde(e){
    document.getElementById(e).style.background = "rgb(157, 230, 188, 0.7)";
}

/* function validar(){
    console.log("fuera del if "+nombreValido);
 if (verificarApellido()){
        console.log("dentro de los trues valudos");
        return true;

    }else{
        console.log("fuera de los trues falsos");
        e.preventDefault();
        return false;
    } 
} */
var form = document.getElementById("formulario");
form.addEventListener('submit',function(evt){
    evt.preventDefault();
    if (verificarApellido() && verificarNombre() && verificarCorreo() 
    && verificarEdad() && verificarPais() ){
       
        
        document.getElementById("form2").style.display = "block";
        var nombre2=document.getElementById("nombre2");
        nombre2.innerHTML= nombreValido;
        var apellido2=document.getElementById("apellido2");
        apellido2.innerHTML= apellidoValido;
        var correo2=document.getElementById("correo2");
        correo2.innerHTML= correoValido;
        var edad2=document.getElementById("edad2");
        edad2.innerHTML= edadValido;
        var sexo2=document.getElementById("sexo2");
        sexo2.innerHTML= sexoValido;
        var interes2=document.getElementById("interes2");
        interes2.innerHTML= interesValido;
        var pais2=document.getElementById("pais2");
        pais2.innerHTML= paisValido;
        

        return true;
    }else{
        console.log("fuera de los trues falsos");
        evt.preventDefault();
        return false;
    }
});
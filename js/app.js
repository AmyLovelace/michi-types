//menu responsive
var btnmenuopen=document.getElementById("btnmenuopen"),
    btnmenuclose=document.getElementById("btnmenuclose"),
    menuresponsive= document.getElementById("menubar");

    //click abrir
    btnmenuopen.addEventListener("click",function() {
        menuresponsive.classList.add("active");
        
    });

    //click cerrar
    btnmenuclose.addEventListener("click",function() {
        menuresponsive.classList.remove("active");
        
    });

//cerrar menu con elemento de enlace
    enlaces.addEventListener("click",function () {
        menuresponsive.style.transitionDelay="0.5s";
        menuresponsive.classList.remove("active");
    });

    //slider de productos
    var contenedor=document.querySelector(".slider"),
    btnizquierdo=document.getElementById("btn-izquierda"),
    btnderecha=document.getElementById("btn-derecha");

    //evento para el boton derecho
    btnderecha.addEventListener("click",function() {
      contenedor.scrollLeft += contenedor.offsetWidth;  
        
    });
    btnizquierdo.addEventListener("click",function() {
        contenedor.scrollLeft -= contenedor.offsetWidth;  
          
    });

    //validacion de formulario
    var formulario= document.getElementById("formulario");

    function validar(e) {
        var inputNombre= document.getElementById("nombre"),
            inputEmail=document.getElementById("email"),
            inputComents=document.getElementById("comentarios");
        if(inputNombre.value==0|| inputEmail.value==0||inputComents.value==0){
            e.preventDefault();
            alert("Datos vacios");
        }else{
            e.preventDefault();
            alert("Datos enviados");
            inputNombre.value="";
            inputEmail.value="";
            inputComents.value="";
        }
    }


//eventos del formulario
    formulario.addEventListener("submit", validar);


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
            inputComents=document.getElementById("comentarios"),
            alertSuccess=document.getElementById("alertSuccess"),
            alertError=document.getElementById("alertError");

        if(inputNombre.value==0|| inputEmail.value==0||inputComents.value==0){
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function() {
            alertError.classList.remove("show");
            alertError.classList.add("hide");
                
            },2000);


        }else{
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            setTimeout(function() {
            alertSuccess.classList.remove("show");
            alertSuccess.classList.add("hide");
                
            },2000);

            inputNombre.value="";
            inputEmail.value="";
            inputComents.value="";
        }
    }


//eventos del formulario
    formulario.addEventListener("submit", validar);

// boton scroll top
var btnTop = document.getElementById("btn-top"),
    logo=document.getElementById("logo");

//detectamos scroll en pagina web
window.addEventListener("scroll", function () {
    var scroll=this.document.documentElement.scrollTop,
    fullSize=document.documentElement.offsetHeight,
    sizeVP=this.document.documentElement.clientHeight;

    if(scroll > 100){
        btnTop.classList.add("show");
    }else{btnTop.classList.remove("show")
    }
    // modificar elemento cuando llegue a final de pagina
    if(fullSize==(scroll +sizeVP)){
        btnTop.classList.add("scrollFinal");
    }else{
        btnTop.classList.remove("scrollFinal");
    }  
})
//detectamos evento click en el boton
btnTop.addEventListener("click", function () {
    window.scrollTo(0,0);
    
})
// detectar evento click en el logo
logo.addEventListener("click", function () {
    window.scrollTo(0,0);
})
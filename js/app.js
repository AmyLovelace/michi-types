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
        menuresponsive.style.transitionDelay
        menuresponsive.classList.remove("active");
    })
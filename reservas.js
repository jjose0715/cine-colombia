
let contenedor=document.getElementById("contenedor")
contenedor.addEventListener("click",function(evento){

    if(evento.target.classList.contains("w-100")){
        evento.target.src="img/rojo.png"
        
    }
})

//recibir datos del teclado//
let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");
    let peliculas=document.getElementById("peliculas").value;
    console.log(peliculas);
    let asientos=document.getElementById("asientos").value;
    console.log(asientos);
    let tipoAsiento=document.getElementById("tipoAsiento").value;
    console.log(tipoAsiento);
}
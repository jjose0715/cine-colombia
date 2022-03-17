let contenedor=document.getElementById("container")
contenedor.addEventListener("click"),function(event){



}
//recibir datos del teclado//
let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");
    let pelicula=document.getElementById("pelicula").value;
    console.log(pelicula)
    let asientos=document.getElementById("asientos").value;
    console.log(Asientos)
    let TipoAsiento=document.getElementById("tipo asiento").value;
    console.log(tipoAsiento)
    if(asientos=<34){
        alert("no hay tantos asientos para escojer")
    }
}
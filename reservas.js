
let contenedor=document.getElementById("contenedor")
contenedor.addEventListener("click",function(event){

    if(event.target.classList.contains("w-100")){
        event.target.src="img/rojo.png"
        
    }



    else{
        if(event.target.classList.contains("w-100")){
        event.target.src="img/cinema-chair.png"
        }
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
    let tipoasiento=document.getElementById("tipoasiento").value;
    console.log(tipoasiento);

    if (tipoasiento=="Preferencial"){
        let preferencial= 5000;
        let valor=preferencial*asientos;
        alert("por querer ver "+peliculas+ " ,El total a pagar es $"+valor)
    }else{
        let general= 2000;
        let valor=general*asientos;
        alert("por querer ver "+peliculas+ " ,El total a pagar es $"+valor)
    }
   

}


    
let bandejaEntrada = document.getElementById("entradaPendientes");

let fechaEntrada = document.getElementById("fechaPendientes");
let fechaActual = new Date();
let año = fechaActual.getFullYear();
let mes = String(fechaActual.getMonth() + 1).padStart(2,'0');
let dia = String(fechaActual.getDate()).padStart(2,'0');
let fechaFormada = `${año}-${mes}-${dia}`;
fechaEntrada.value = fechaFormada;

let importanciaEntrada = document.getElementById("importancia")

let agregarTarea = document.getElementById("botonAgregar");
let agregarCompleta = document.getElementById("botonCompleta");

let contenerPendientes = document.getElementById("listaTareas");
let contenerTareasComp= document.getElementById("listaTareasCom");

fechaEntrada.value = fechaFormada;

function agregarFila(){
  let a = bandejaEntrada.value.trim();
    let b = fechaEntrada.value;
    let c = importanciaEntrada.options[importanciaEntrada.selectedIndex].textContent;
    
    let fila = contenerPendientes.insertRow(-1);
    let caja = document.createElement("input");
    caja.classList.add("casiCompleta");

    let borrar = document.createElement("button");
    borrar.textContent = "✘";
    
    caja.type = "checkbox";

    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);
    let celda4 = fila.insertCell(3);
    let celda5 = fila.insertCell(4);


    celda1.appendChild(caja);
    celda1.add
    celda2.innerHTML = a;
    celda3.innerHTML = b;
    celda4.innerHTML = c;
    celda5.appendChild(borrar);

    bandejaEntrada.value="";
}

bandejaEntrada.addEventListener("keydown",function(e) {
  if(e.key === "Enter"){
    if (bandejaEntrada.value="") {
      alert('¿?')
    }
  }
});

agregarTarea.addEventListener("click",function(e){
  agregarFila();
})

agregarCompleta.addEventListener("click",function(e){
  agregarFila();
})
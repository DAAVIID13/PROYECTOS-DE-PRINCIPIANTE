//Conseguir Elemntos para trabajar con ellos

//Parte de header
let agregarCompleta = document.getElementById("botonCompleta");
let vaciasTareas = document.getElementById("Vaciar");


//Parte para agregar tareas
let bandejaEntrada = document.getElementById("entradaPendientes");
let agregarTarea = document.getElementById("botonAgregar");

let fechaEntrada = document.getElementById("fechaPendientes");
let fechaActual = new Date();
let año = fechaActual.getFullYear();
let mes = String(fechaActual.getMonth() + 1).padStart(2,'0');
let dia = String(fechaActual.getDate()).padStart(2,'0');
let fechaFormada = `${año}-${mes}-${dia}`;
fechaEntrada.value = fechaFormada;

let importanciaEntrada = document.getElementById("importancia");

//parte de la lista de tareas
let contenerPendientes = document.getElementById("listaTareas");

//parte de tareas completas
let contenerTareasComp= document.getElementById("listaTareasCom");

//funciones para agregar las tareas a la lista de tareas
function agregarFila(){
  let a = bandejaEntrada.value.trim();
    let b = fechaEntrada.value;
    let c = importanciaEntrada.options[importanciaEntrada.selectedIndex].textContent;
    
    let fila = contenerPendientes.insertRow(-1);
    let caja = document.createElement("input");
    caja.classList.add("casiCompleta");

    let borrar = document.createElement("button");
    borrar.classList.add("identificadorBorrar")
    borrar.textContent = "✘";
    
    caja.type = "checkbox";

    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);
    let celda4 = fila.insertCell(3);
    let celda5 = fila.insertCell(4);


    celda1.appendChild(caja);
    celda1.add;
    celda2.innerHTML = a;
    celda3.innerHTML = b;
    celda4.innerHTML = c;
    celda5.appendChild(borrar);

    bandejaEntrada.value="";
}


//funciones de evento

//esta funcion sirve para agregar la tarea cuando el focus esta en la bandeja de texto y no está vacia
bandejaEntrada.addEventListener("keydown",function(e) {
  if(e.key === "Enter"){
    if (bandejaEntrada.value != "") {
      agregarFila();
    }else{
      alert('Campo de tarea vacio');
    }
  }
});
//esto es para agragarla por medio de la paloma
agregarTarea.addEventListener("click",function(e){
  if (bandejaEntrada.value != "") {
    agregarFila();
  }else{
    alert('Campo de tarea vacio');
  }
});

document.getElementById("listaTareas").addEventListener("click", function(event) {
  if (event.target && event.target.classList.contains("identificadorBorrar")) {
    let fila = event.target.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
  }
});

agregarCompleta.addEventListener("click",function (e){
  let filas = document.querySelectorAll("#listaTareas .casiCompleta:checked");

  filas.forEach(function(checkbox){
    let fila = checkbox.parentNode.parentNode;
    contenerTareasComp.appendChild(fila);

    let celdas = fila.querySelectorAll("td");
    for (let i = 0; i < celdas.length; i++) {
      if (i !== 1) {
        fila.removeChild(celdas[i]);
      }
    }
  });
});

agregarCompleta.addEventListener("click",function (e){
  let filas = document.querySelectorAll("#listaTareas .casiCompleta:checked");

  filas.forEach(function(checkbox){
    let fila = checkbox.parentNode.parentNode;
    contenerTareasComp.appendChild(fila);

    let celdas = fila.querySelectorAll("td");
    for (let i = 0; i < celdas.length; i++) {
      if (i !== 1) {
        fila.removeChild(celdas[i]);
      }
    }
  });
});

vaciasTareas.addEventListener("click",function (e) {
  contenerTareasComp.innerHTML='';
});
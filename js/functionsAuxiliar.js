"use strict";

let escuderias = [];
let coches = [];
let personas = [];

function buscar(codigoEscuderia) {
  let posicion = -1;
  let i = 0;
  let largo = escuderias.length;
  while (i < largo && posicion == -1) {
    if (escuderias[i].codigoEscuderia == codigoEscuderia) {
      posicion = i;
    }
    i++;
  }
  return posicion;
}

function actualizarTabla() {
  let tabla = document.getElementById("tabla");
  tabla.innerHTML = "";
  if (escuderias.length !== 0) {
    let tablaEscuderias = document.createElement("table");
    tablaEscuderias.innerHTML = `<tr>
    <th>Código</th>
    <th>Nombre</th>
    <th>Presupuesto</th>
    <th>País</th>
    </tr>`;
    for (let i = 0; i < escuderias.length; i++) {
      tablaEscuderias.innerHTML += `<tr>
      <td>${escuderias[i].codigoEscuderia}</td>
      <td>${escuderias[i].nombreEscuderia}</td>
      <td>${escuderias[i].presupuesto}</td>
      <td>${escuderias[i].pais}</td>
      </tr>`;
    }
    tabla.appendChild(tablaEscuderias);
  } else {
    let mensaje = document.createElement("p");
    mensaje.innerHTML = "No hay escuderías";
    tabla.appendChild(mensaje);
  }
  if (coches.length !== 0) {
    let tablaCoches = document.createElement("table2");
    tablaCoches.innerHTML = `<tr>
    <th>Código</th>
    <th>Nombre</th>
    <th>Motor</th>
    <th>Chasis</th>
    <th>Escudería</th>
    </tr>`;
    for (let i = 0; i < coches.length; i++) {
      tablaCoches.innerHTML += `<tr>
      <td>${coches[i].codigoCoche}</td>
      <td>${coches[i].nombreCoche}</td>
      <td>${coches[i].motor}</td>
      <td>${coches[i].chasis}</td>
      <td>${coches[i].codigoEscuderia}</td>
      </tr>`;
    }
    tabla.appendChild(tablaCoches);
  } else {
    let mensaje = document.createElement("p");
    mensaje.innerHTML = "No hay coches";
    tabla.appendChild(mensaje);
  }
  if (personas.length !== 0) {
    let tablaPersonas = document.createElement("table3");
    tablaPersonas.innerHTML = `<tr>
    <th>Código-Persona</th>
    <th>Codigo-Escudería</th>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Edad</th>
    <th>Antiguedad</th>
    <th>Altura</th>
    <th>Peso</th>
    <th>Cargo</th>
    <th>Salario</th>
    </tr>`;
    for (let i = 0; i < personas.length; i++) {
      tablaPersonas.innerHTML += `<tr>
      <td>${personas[i].codigoPersona}</td><br>
      <td>${personas[i].codigoEscuderia}</td><br>
      <td>${personas[i].nombrePersona}</td><br>
      <td>${personas[i].primerApellidoPersona}</td><br>
      <td>${personas[i].edadPersona}</td><br>
      <td>${personas[i].antiguedadPersona}</td><br>
      <td>${personas[i].alturaPersona}</td><br>
      <td>${personas[i].pesoPersona}</td><br>
      <td>${personas[i].cargoPersona}</td><br>
      <td>${personas[i].salarioPersona}</td><br>
      </tr>`;
    }
    tabla.appendChild(tablaPersonas);
  } else {
    let mensaje = document.createElement("p");
    mensaje.innerHTML = "No hay personas";
    tabla.appendChild(mensaje);
  }
}

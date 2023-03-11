"use strict";

let escuderias = [];
let coches = [];
let personas = [];

function buscar(codigoEscuderia) {
  // Esta funcion debe buscar en todos los arrays que puedan existir dentro de escuderia[]
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
  let tabla = "";
  for (let i = 0; i < escuderias.length; i++) {
    if (escuderias[i] instanceof Escuderia) {
      tabla += `
    <div class="card1">
    <h3>ESCUDERIA ${i + 1}</h3> <br>
    CODIGO: ${escuderias[i].codigoEscuderia} <br>
    NOMBRE: ${escuderias[i].nombre} <br>
    PRESUPUESTO: ${escuderias[i].presupuesto} <br>
    PAIS: ${escuderias[i].pais} <br>
    COCHES: ${escuderias[i].coches} <br>
    personas: ${escuderias[i].personas} <br>
    </div> `;
    } for (let j = 0; j < personas.length; j++) {
      if (personas[j].codigoEscuderia == escuderias[i].codigoEscuderia) {
        tabla += `
          <div class="card2">
          <h3>PERSONA ${j + 1}</h3> <br>
          CODIGO PERSONA: ${personas[j].codigo} <br>
          CODIGO ESCUDERIA: ${personas[j].codigoEscuderia} <br>
          <hr>
          NOMBRE: ${personas[j].nombre} <br>
          APELLIDO: ${personas[j].presupuesto} <br>
          EDAD: ${personas[j].edad} <br>
          ANTIGUEDAD: ${personas[j].antiguedad} <br>
          ALTURA: ${personas[j].altura} <br>
          PESO: ${personas[j].peso} <br>
          CARGO: ${personas[j].cargo} <br>
          </div>
    
          <div class="card3">
          <h3>SUELDO</h3> <br>
          SUELDO: ${personas[j].sueldo} <br>
          </div>
        `;
      }
    }
  }
  document.getElementById("tabla").innerHTML = tabla;
}
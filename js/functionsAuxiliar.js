"use strict";

let escuderias = [];
let coches = [];
let personas = [];

function buscar(codigoEscuderia,  propBuscar = "codigoEscuderia", propRetornar = null) {
  if (escuderias.length === 0) {
    console.error("No hay escuderias");
    return null;
  }

  let posicion = -1;
  let i = 0;
  let largo = escuderias.length;
  while (i < largo && posicion == -1) {
    if (escuderias[i][propBuscar] == codigoEscuderia) {
      //propBuscar es el nombre de la propiedad que se busca en el objeto. En este caso es codigoEscuderia.
      posicion = i;
    }
    i++;
  }

  if (posicion == -1) {
    console.warn(`No se encontro escuderia ${propBuscar} ${codigoEscuderia}`);
    return null;
  }

  if (propRetornar === null) {
    return posicion;
  } else if (escuderias[posicion].hasOwnProperty(propRetornar)) {
    //hasOwnProperty es un metodo de los objetos que devuelve true si el objeto tiene la propiedad que se le pasa como parametro. En este caso sirve para saber si el objeto escuderia tiene codigoEscuderia.
    return escuderias[posicion][propRetornar];
  } else {
    console.error(`${propRetornar} no es una propiedad de escuderias`);
    return null;
  }
}

function buscarPersona() {
  let codigoPersona = prompt("Introduce el código de la persona a buscar");
  let posicion = buscar(codigoPersona);
  if (posicion !== null) {
    console.table(personas[posicion]);
  }
  return posicion;
}


function actualizarTabla() {
  const tableElement = document.getElementById("tabla");
  tableElement.innerHTML = "";

  // Crea tabla para escuderias
  if (escuderias.length !== 0) {
    const escuderiasTable = document.createElement("table");
    const headerRow = escuderiasTable.insertRow();
    const headerCells = ["Código", "Nombre", "Presupuesto", "País"];
    headerCells.forEach((header) => {
      const cell = headerRow.insertCell();
      cell.textContent = header;
    });
    escuderias.forEach((escuderia) => {
      const row = escuderiasTable.insertRow();
      const cells = [
        escuderia.codigoEscuderia,
        escuderia.nombreEscuderia,
        escuderia.presupuesto,
        escuderia.pais,
      ];
      cells.forEach((cell) => {
        const cellElement = row.insertCell();
        cellElement.textContent = cell;
      });
    });
    tableElement.appendChild(escuderiasTable);
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay escuderías";
    tableElement.appendChild(mensaje);
  }

  // create table for coches
  if (coches.length !== 0) {
    const cochesTable = document.createElement("table");
    const headerRow = cochesTable.insertRow();
    const headerCells = ["Código-Coche", "Potencia", "Velocidad", "Color", "Precio"];
    headerCells.forEach((header) => {
      const cell = headerRow.insertCell();
      cell.textContent = header;
    });
    coches.forEach((coche) => {
      const row = cochesTable.insertRow();
      const cells = [
        coche.codigoCoche,
        coche.potencia,
        coche.velocidad,
        coche.color,
        coche.precio,
      ];
      cells.forEach((cell) => {
        const cellElement = row.insertCell();
        cellElement.textContent = cell;
      });
    });
    tableElement.appendChild(cochesTable);
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay coches";
    tableElement.appendChild(mensaje);
  }

  // create table for personas
  if (personas.length !== 0) {
    const personasTable = document.createElement("table");
    const headerRow = personasTable.insertRow();
    const headerCells = [
      "Código-Persona",
      "Codigo-Escudería",
      "Nombre",
      "Apellido",
      "Edad",
      "Estudios",
      "Antiguedad",
      "Altura",
      "Peso",
      "Cargo",
      "Salario",
    ];
    headerCells.forEach((header) => {
      const cell = headerRow.insertCell();
      cell.textContent = header;
    });
    personas.forEach((persona) => {
      const row = personasTable.insertRow();
      const cells = [
        persona.codigoPersona,
        persona.codigoEscuderia,
        persona.nombrePersona,
        persona.primerApellidoPersona,
        persona.edadPersona,
        persona.tieneEstudiosPersona ? true : false,
        persona.antiguedadPersona,
        Number(persona.alturaPersona),
        persona.pesoPersona,
        persona.cargoPersona,
        persona.salarioPersona,
      ];
      cells.forEach((cell) => {
        const cellElement = row.insertCell();
        cellElement.textContent = cell;
      });
    });
    tableElement.appendChild(personasTable);
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay personas";
    tableElement.appendChild(mensaje);
  }
}

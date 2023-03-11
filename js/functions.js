"use strict";

let escuderias = [];
let coches = [];
let personas = [];

function buscar(codigo) {
  let posicion = -1;
  let i = 0;
  let largo = escuderias.length;
  while (i < largo && posicion == -1) {
    if (escuderias[i].codigo == codigo) {
      posicion = i;
    }
    i++;
  }
  return posicion;
}

// ESCUDERIA

function altaEscuderia() {
  let nombre = document.getElementById("nombreEscuderia").value;
  let presupuesto = document.getElementById("presupuestoEscuderia").value;
  let pais = document.getElementById("paisEscuderia").value;
  let escuderia = {
    nombre: nombre,
    presupuesto: presupuesto,
    pais: pais,
    coches: [],
    personas: [],
    codigoEscuderia: codigoGenerator(),
  };
  escuderias.push(escuderia);
  actualizarTablaEscuderia();
  console.table(escuderias);
}

function bajaEscuderia() {
  let codigo = prompt("Intrduce el código de la escudería a dar de baja");
  let index = -1;
  for (let i = 0; i < escuderias.length; i++) {
    if (escuderias[i].codigoEscuderia == codigo) {
      index = i;
      confirm("¿Estás seguro de que quieres eliminar la escudería?");
      escuderias.splice(index, 1);
      actualizarTablaEscuderia();
    } else {
      alert("No se ha encontrado la escudería");
    }
  }
}

function modificarEscuderia() {
  let codigo = prompt("Introduce el código de la escudería a modificar");
  let index = -1;
  for (let i = 0; i < escuderias.length; i++) {
    if (escuderias[i].codigoEscuderia == codigo) {
      index = i;
      let nombre = prompt(
        "Introduce el nuevo nombre de la escudería",
        "escuderia.nombre"
      );
      let presupuesto = prompt(
        "Introduce el nuevo presupuesto de la escudería",
        "escuderia.presupuesto"
      );
      let pais = prompt(
        "Introduce el nuevo país de la escudería",
        "escuderia.pais"
      );
      escuderias[index].nombre = nombre;
      escuderias[index].presupuesto = presupuesto;
      escuderias[index].pais = pais;
      actualizarTablaEscuderia();
      break; // exit loop once escuderia is found and updated
    }
  }
  if (index === -1) {
    alert("No se ha encontrado la escudería"); // only show alert if no matches were found
  }
}

function actualizarTablaEscuderia() {
  let tabla = "";
  for (let i = 0; i < escuderias.length; i++) {
    tabla += `
            <div class="card"> <br>
            CODIGO: ${escuderias[i].codigoEscuderia} <br>
            NOMBRE: ${escuderias[i].nombre} <br>
            PRESUPUESTO: ${escuderias[i].presupuesto} <br>
            PAIS: ${escuderias[i].pais} <br>
            COCHES: ${escuderias[i].coches} <br>
            personas: ${escuderias[i].personas} <br>
            </div>
          `;
  }
  document.getElementById("tablaEscuderias").innerHTML = tabla;
}

function borrarTodasescuderias() {
  escuderias = []; // Borra todas las escuderias
  console.clear(); // Borra el console.log
  actualizarTablaEscuderia(); // Actualiza la tabla
}

// PERSONA

function altaPersona() {
  if (escuderias.length !== 0) {
    let codigoEscuderia = document.getElementById("codigoEscuderiaPersona").value;
    let indexEscuderia = buscar(codigoEscuderia);
    if (indexEscuderia != -1) {
      let nombre = document.getElementById("nombrePersona").value;
      let apellido = document.getElementById("primerApellidoPersona").value;
      let edad = document.getElementById("edadPersona").value;
      let antiguedad = document.getElementById("antiguedadPersona").value;
      let altura = document.getElementById("alturaPersona").value;
      let peso = document.getElementById("pesoPersona").value;
      let cargo = document.getElementById("cargoPersona").value;

      let Persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        antiguedad: antiguedad,
        altura: altura,
        peso: peso,
        cargo: cargo,
        codigo: codigoGenerator(),
      };
      // Add new object to the array
      escuderias[indexEscuderia].personas.push(Persona);
      actualizarTablaPersona();
      console.table(escuderias[indexEscuderia].personas);
    } else {
      alert("No se ha encontrado la escudería con el código ingresado");
    }
  } else {
    alert("Para crear personas primero debe existir al menos una escudería");
  }
}


function bajaPersona() {
  let escuderia = document.getElementById("escuderiaPersona").value;
  let codigo = document.getElementById("codigoPersona").value;
  let index = -1;
  for (let i = 0; i < escuderias[escuderia].personas.length; i++) {
    if (escuderias[escuderia].personas[i].codigo == codigo) {
      index = i;
      break;
    }
  }
  if (index != -1) {
    escuderias[escuderia].personas.splice(index, 1);
    actualizarTablaPersona();
  }
}

function modificarPersona() {
  let escuderia = document.getElementById("escuderiaPersona").value;
  let codigo = document.getElementById("codigoPersona").value;
  let index = -1;
  for (let i = 0; i < escuderias[escuderia].personas.length; i++) {
    if (escuderias[escuderia].personas[i].codigo == codigo) {
      index = i;
      break;
    }
  }
  if (index != -1) {
    let nombre = prompt(
      "Introduce el nuevo nombre de la persona",
      "escuderia.personas.nombre"
    );
    let apellido = prompt(
      "Introduce el nuevo apellido de la persona",
      "escuderia.personas.apellido"
    );
    let edad = prompt(
      "Introduce la nueva edad de la persona",
      "escuderia.personas.edad"
    );
    let antiguedad = prompt(
      "Introduce el nuevo tiempo en escudería de la persona",
      "escuderia.personas.antiguedad"
    );
    let sueldo = prompt(
      "Introduce el nuevo sueldo de la persona",
      "escuderia.personas.sueldo"
    );
    let altura = prompt(
      "Introduce la nueva altura de la persona",
      "escuderia.personas.altura"
    );
    let peso = prompt(
      "Introduce el nuevo peso de la persona",
      "escuderia.personas.peso"
    );
    let cargo = prompt(
      "Introduce el nuevo cargo de la persona",
      "escuderia.personas.cargo"
    );
    escuderias[escuderia].personas[index].nombre = nombre;
    escuderias[escuderia].personas[index].apellido = apellido;
    escuderias[escuderia].personas[index].edad = edad;
    escuderias[escuderia].personas[index].antiguedad = antiguedad;
    escuderias[escuderia].personas[index].sueldo = sueldo;
    escuderias[escuderia].personas[index].altura = altura;
    escuderias[escuderia].personas[index].peso = peso;
    escuderias[escuderia].personas[index].cargo = cargo;
  }
  actualizarTablaPersona();
}

function borrarTodasLaspersonas() {
  personas = []; // Borra todas las escuderias
  console.clear(); // Borra el console.log
  actualizarTablaPersona(); // Actualiza la tabla
}

function sueldoPiloto(antiguedad) {
  const sueldoBase = 50000;
  const peligrosidad = 50000;
  let sueldo = sueldoBase + antiguedad * 10000 + peligrosidad;
  return sueldo;
}

function sueldoMecanico(antiguedad) {
  const sueldoBase = 50000;
  let sueldo = sueldoBase + antiguedad * 10000;
  return sueldo;
}

function calcularSueldopersonas(antiguedad) {
  antiguedad = document.getElementById("antiguedad").value;
  let sueldo = 0;
  if (cargo == "piloto") {
    sueldo = sueldoPiloto(antiguedad);
  } else if (cargo == "mecanico") {
    sueldo = sueldoMecanico(antiguedad);
  }
  actualizarTablaPersona();
  return sueldo;
}

function actualizarTablaPersona() {
  let tabla = "";
  for (let i = 0; i < personas.length; i++) {
    tabla += `
            <div class="card"> <br>
            CODIGO: ${personas[i].codigo} <br>
            CODIGO ESCUDERIA: ${personas[i].codigoEscuderia} <br>
            NOMBRE: ${personas[i].nombre} <br>
            APELLIDO: ${personas[i].presupuesto} <br>
            EDAD: ${personas[i].edad} <br>
            ANTIGUEDAD: ${personas[i].antiguedad} <br>
            ALTURA: ${personas[i].altura} <br>
            PESO: ${personas[i].peso} <br>
            CARGO: ${personas[i].cargo} <br>
            </div>
          `;
  }
  document.getElementById("tablaPersonas").innerHTML = tabla;
}

// COCHE

function altaCoche() {
  let escuderia = document.getElementById("escuderiaCoche").value;
  let potencia = document.getElementById("potenciaCoche").value;
  let velocidadMaxima = document.getElementById("velocidadMaximaCoche").value;
  let color = document.getElementById("colorCoche").value;
  let precioDeMercado = document.getElementById("precioDeMercadoCoche").value;

  // Add new object to the array
  escuderias[escuderia].coches.push({
    potencia: potencia,
    velocidadMaxima: velocidadMaxima,
    color: color,
    precioDeMercado: precioDeMercado,
  });
}

function bajaCoche() {
  let escuderia = document.getElementById("escuderiaCoche").value;
  let codigo = document.getElementById("codigoCoche").value;
  let index = -1;
  for (let i = 0; i < escuderias[escuderia].coches.length; i++) {
    if (escuderias[escuderia].coches[i].codigo == codigo) {
      index = i;
      break;
    }
  }
  if (index != -1) {
    escuderias[escuderia].coches.splice(index, 1);
  }
}

function modificarCoche() {
  let escuderia = document.getElementById("escuderiaCoche").value;
  let codigo = document.getElementById("codigoCoche").value;
  let index = -1;
  for (let i = 0; i < escuderias[escuderia].coches.length; i++) {
    if (escuderias[escuderia].coches[i].codigo == codigo) {
      index = i;
      break;
    }
  }
  if (index != -1) {
    let potencia = prompt(
      "Introduce la nueva potencia del coche",
      "escuderia.coches.potencia"
    );
    let velocidadMaxima = prompt(
      "Introduce la nueva velocidad máxima del coche",
      "escuderia.coches.velocidadMaxima"
    );
    let color = prompt(
      "Introduce el nuevo color del coche",
      "escuderia.coches.color"
    );
    let precioDeMercado = prompt(
      "Introduce el nuevo precio de mercado del coche",
      "escuderia.coches.precioDeMercado"
    );
    escuderias[escuderia].coches[index].potencia = potencia;
    escuderias[escuderia].coches[index].velocidadMaxima = velocidadMaxima;
    escuderias[escuderia].coches[index].color = color;
    escuderias[escuderia].coches[index].precioDeMercado = precioDeMercado;
  }
}

function borrarTodosLosCoches() {
  let escuderia = document.getElementById("escuderiaCoche").value;
  escuderias[escuderia].coches = [];
  console.clear(); // Borra el console.log
  actualizarTablaEscuderia(); // Actualiza la tabla
  console.table(escuderias[escuderia].coches);
  console.table(escuderias);
}

"use strict";

function altaPersona() {
  if (escuderias.length !== 0) {
    let codigoEscuderia = prompt("Introduce el código de la escudería");
    let indexEscuderia = buscar(codigoEscuderia);
    if (indexEscuderia != -1) {
      let nombrePersona = document.getElementById("nombrePersona").value;
      let primerApellidoPersona = document.getElementById(
        "primerApellidoPersona"
      ).value;
      let edadPersona = document.getElementById("edadPersona").value;
      let antiguedadPersona =
        document.getElementById("antiguedadPersona").value;
      let alturaPersona = document.getElementById("alturaPersona").value;
      let pesoPersona = document.getElementById("pesoPersona").value;
      let cargoPersona = document.getElementById("cargoPersona").value;
      let Persona = {
        nombrePersona: nombrePersona,
        primerApellidoPersona: primerApellidoPersona,
        edadPersona: edadPersona,
        antiguedadPersona: antiguedadPersona,
        alturaPersona: alturaPersona,
        pesoPersona: pesoPersona,
        cargoPersona: cargoPersona,
        codigoEscuderia: codigoEscuderia,
        codigoPersona: codigoGenerator(),
        salarioPersona: calcularSueldopersonas(antiguedadPersona),
      };
      // Add new object to the array
      calcularSueldopersonas(antiguedadPersona);
      personas.push(Persona);
      actualizarTabla();
    } else {
      alert("No existe la escudería con código " + codigoEscuderia);
    }
  } else {
    alert("No hay escuderías registradas");
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
    actualizarTabla();
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
    let primerApellidoPersona = prompt(
      "Introduce el nuevo apellido de la persona",
      "escuderia.personas.primerApellidoPersona"
    );
    let edad = prompt(
      "Introduce la nueva edad de la persona",
      "escuderia.personas.edad"
    );
    let antiguedadPersona = prompt(
      "Introduce el nuevo tiempo en escudería de la persona",
      "escuderia.personas.antiguedadPersona"
    );
    let sueldo = prompt(
      "Introduce el nuevo sueldo de la persona",
      "escuderia.personas.sueldo"
    );
    let alturaPersona = prompt(
      "Introduce la nueva altura de la persona",
      "escuderia.personas.alturaPersona"
    );
    let pesoPersona = prompt(
      "Introduce el nuevo peso de la persona",
      "escuderia.personas.pesoPersona"
    );
    let cargoPersona = prompt(
      "Introduce el nuevo cargo de la persona",
      "escuderia.personas.cargoPersona"
    );
    escuderias[escuderia].personas[index].nombre = nombre;
    escuderias[escuderia].personas[index].primerApellidoPersona =
      primerApellidoPersona;
    escuderias[escuderia].personas[index].edad = edad;
    escuderias[escuderia].personas[index].antiguedadPersona = antiguedadPersona;
    escuderias[escuderia].personas[index].sueldo = sueldo;
    escuderias[escuderia].personas[index].alturaPersona = alturaPersona;
    escuderias[escuderia].personas[index].pesoPersona = pesoPersona;
    escuderias[escuderia].personas[index].cargoPersona = cargoPersona;
  }
  actualizarTabla();
}

function borrarTodasLaspersonas() {
  personas = []; // Borra todas las escuderias
  console.clear(); // Borra el console.log
  actualizarTabla(); // Actualiza la tabla
}

function calcularSueldopersonas(antiguedadPersona) {
  antiguedadPersona = document.getElementById("antiguedadPersona").value;
  let cargoPersona = document.getElementById("cargoPersona").value;
  let salarioPersona = 0;
  if (cargoPersona == "piloto") {
    salarioPersona = 50000;
    const peligrosidad = 50000;
    salarioPersona = salarioPersona + antiguedadPersona * 10000 + peligrosidad;
    return salarioPersona;
  } else if (cargoPersona == "mecanico") {
    const salarioPersona = 50000;
    salarioFinal = salarioPersona + antiguedadPersona * 10000;
    return salarioPersona;
  }
  actualizarTabla();
  return salarioPersona;
}

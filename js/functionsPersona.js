"use strict";

function altaPersona() {
  if (escuderias.length !== 0) {
    let codigoEscuderia = prompt("Introduce el código de la escudería");
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
        nombrePersona: nombre,
        primerApellidoPersona: apellido,
        edadPersona: edad,
        antiguedadPersona: antiguedad,
        alturaPersona: altura,
        pesoPersona: peso,
        cargoPersona: cargo,
        codigoEscuderia: codigoEscuderia,
        codigoPersona: codigoGenerator(),
      };
      // Add new object to the array
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
    actualizarTabla();
  }
  
  function borrarTodasLaspersonas() {
    personas = []; // Borra todas las escuderias
    console.clear(); // Borra el console.log
    actualizarTabla(); // Actualiza la tabla
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
    actualizarTabla();
    return sueldo;
  }
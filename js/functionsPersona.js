"use strict";

function altaPersona() {
    if (escuderias.length !== 0) {
      let codigoEscuderia = prompt("Introduce el código de la escudería");
            let indexEscuderia = -1;
      for (let i = 0; i < escuderias.length; i++) {
        if (escuderias[i].codigoEscuderia == codigoEscuderia) {
          indexEscuderia = i;
        }
      }

      if (indexEscuderia != -1) {
        let nombrePersona = document.getElementById("nombrePersona").value;
        let primerApellidoPersona = document.getElementById("primerApellidoPersona").value;
        let edadPersona = document.getElementById("edadPersona").value;
        let antiguedadPersona = document.getElementById("antiguedadPersona").value;
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
          codigo: codigoGenerator(),
        };
        // Add new object to the array
        escuderias.push(Persona);
        personas.push(Persona);
        console.table(escuderias);
        actualizarTabla();
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
      actualizarTabla();
    }
  }
  
  function modificarPersona() {
    let codigoEscuderia = prompt("Introduce el código de la escudería");
    let escuderia = buscar(codigoEscuderia);
    let index = -1;
    for (let i = 0; i < escuderias[escuderia].personas.length; i++) {
      if (escuderias[escuderia].personas[i].codigoEscuderia == codigoEscuderia) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      let nombrePersona = prompt(
        "Introduce el nuevo nombre de la persona",
        "escuderia.personas.nombrePersona"
      );
      let primerApellidoPersona = prompt(
        "Introduce el nuevo apellido de la persona",
        "escuderia.personas.primerApellidoPersona"
      );
      let edadPersona = prompt(
        "Introduce la nueva edad de la persona",
        "escuderia.personas.edadPersona"
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
      escuderias[escuderia].personas[index].nombrePersona = nombrePersona;
      escuderias[escuderia].personas[index].primerApellidoPersona = primerApellidoPersona;
      escuderias[escuderia].personas[index].edadPersona = edadPersona;
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

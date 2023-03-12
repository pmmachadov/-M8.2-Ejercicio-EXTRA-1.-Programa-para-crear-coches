"use strict";

function altaPersona() {
    if (escuderias.length !== 0) {
      let codigoEscuderia = prompt("Ingrese el código de la escudería");
      let indexEscuderia = buscar(codigoEscuderia);
      if (indexEscuderia === -1) {
        alert(`No se encontró la escudería con código ${codigoEscuderia}`);
        return;
      } else if (indexEscuderia != -1) {
        let nombrePersona = document.getElementById("nombrePersona").value;
        let primerApellidoPersona = document.getElementById(
          "primerApellidoPersona"
        ).value;
        let edadPersona = Number(document.getElementById("edadPersona").value);
        let antiguedadPersona = Number(
          document.getElementById("antiguedadPersona").value
        );
        let alturaPersona = Number(
          document.getElementById("alturaPersona").value
        );
        let pesoPersona = Number(document.getElementById("pesoPersona").value);
        let cargoPersona = document.getElementById("cargoPersona").value;
        let tieneEstudiosPersona = document.getElementById(
          "tieneEstudiosPersona"
        ).value;
  
        let persona = {
          codigoPersona: codigoGeneratorPersona(),
          codigoEscuderia: codigoEscuderia,
          nombrePersona: nombrePersona,
          primerApellidoPersona: primerApellidoPersona,
          edadPersona: edadPersona,
          tieneEstudiosPersona: tieneEstudiosPersona,
          antiguedadPersona: antiguedadPersona,
          alturaPersona: alturaPersona,
          pesoPersona: pesoPersona,
          cargoPersona: cargoPersona,
          salarioPersona: Number(calcularSueldoPersonas(personas)),
        };
  
        personas.push(persona);
        console.table(personas);
        actualizarTabla();
      } else {
        alert("No hay escuderías");
      }
    }
  }
  
  function bajaPersona() {
   let codigoPersona = prompt("Ingrese el código de la persona a eliminar");
    let index = buscar(codigoPersona);
    if (index === -1) {
      alert(`No se encontró la persona con código ${codigo}`);
      return;
    } else if (index != -1) {
      confirm("¿Está seguro que desea eliminar la persona?");
      personas.splice(index, 1);
      actualizarTabla();
    }
  }
  
  function modificarPersona() {
    let persona = prompt("Ingrese el código de la persona a modificar");
    let codigo = persona.codigoPersona;
    let index = -1;
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].codigo == codigo) {
        index = i;
        let nombrePersona = prompt("Ingrese el nombre de la persona");
        let primerApellidoPersona = prompt("Ingrese el primer apellido de la persona");
        let edadPersona = Number(prompt("Ingrese la edad de la persona"));
        let antiguedadPersona = Number(prompt("Ingrese la antiguedad de la persona"));
        let alturaPersona = Number(prompt("Ingrese la altura de la persona"));
        let pesoPersona = Number(prompt("Ingrese el peso de la persona"));
        let cargoPersona = prompt("Ingrese el cargo de la persona");
        let tieneEstudiosPersona = prompt("Ingrese si tiene estudios la persona");
        let salarioPersona = Number(prompt("Ingrese el salario de la persona"));
        personas[i].nombrePersona = nombrePersona;
        personas[i].primerApellidoPersona = primerApellidoPersona;
        personas[i].edadPersona = edadPersona;
        personas[i].antiguedadPersona = antiguedadPersona;
        personas[i].alturaPersona = alturaPersona;
        personas[i].pesoPersona = pesoPersona;
        personas[i].cargoPersona = cargoPersona;
        personas[i].tieneEstudiosPersona = tieneEstudiosPersona;
        personas[i].salarioPersona = salarioPersona;
        actualizarTabla();
        break;
      }
    }
    if (index == -1) {
      alert("No se encontró la persona");
    }
  }
  
  function borrarTodasLaspersonas() {
    personas = []; // Borra todas las escuderias
    console.clear(); // Borra el console.log
    document.getElementById("tabla").innerHTML = ""; // Borra la tabla
    actualizarTabla(); // Actualiza la tabla
  }
  
  function calcularSueldoPersonas(personas) {
    let persona = 0;
    let salarioPersona = 0;
    personas = [];
    for (let i = 0; i < personas.length; i++) {
      if (persona.cargoPersona === "piloto") {
        const sueldoBase = 50000;
        const antiguedad = persona.antiguedadPersona;
        const peligrosidad = 50000;
        const sueldoPorAntiguedad = antiguedad * 10000;
        const salarioPersona = sueldoBase + sueldoPorAntiguedad + peligrosidad;
        persona.salarioPersona = salarioPersona;
      } else if (persona.cargoPersona === "mecanico") {
        const sueldoBase = 50000;
        const antiguedad = persona.antiguedadPersona;
        const sueldoPorAntiguedad = antiguedad * 10000;
        const salarioPersona = sueldoBase + sueldoPorAntiguedad;
        if (persona.tieneEstudiosPersona) {
          salarioPersona += 10000;
        }
        persona.salarioPersona = salarioPersona;
      }
    }
    actualizarTabla();
    return salarioPersona;
  }
  
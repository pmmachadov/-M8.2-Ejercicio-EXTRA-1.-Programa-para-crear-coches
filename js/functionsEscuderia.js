"use strict";

function altaEscuderia() {
    let nombreEscuderia = document.getElementById("nombreEscuderia").value;
    let presupuesto = document.getElementById("presupuestoEscuderia").value;
    let pais = document.getElementById("paisEscuderia").value;
    let escuderia = {
      nombreEscuderia: nombreEscuderia,
      presupuesto: presupuesto,
      pais: pais,
      coches: [],
      personas: [],
      codigoEscuderia: codigoGenerator(),
    };
    escuderias.push(escuderia);
    console.table(escuderias);
    actualizarTabla();
  }
  
  function bajaEscuderia() {
    let codigo = prompt("Intrduce el código de la escudería a dar de baja");
    let index = -1;
    for (let i = 0; i < escuderias.length; i++) {
      if (escuderias[i].codigoEscuderia == codigo) {
        index = i;
        confirm("¿Estás seguro de que quieres eliminar la escudería?");
        escuderias.splice(index, 1);
        actualizarTabla();
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
        actualizarTabla();
        break; // exit loop once escuderia is found and updated
      }
    }
    if (index === -1) {
      alert("No se ha encontrado la escudería"); // only show alert if no matches were found
    }
  }
  

  function borrarTodasescuderias() {
    escuderias = []; // Borra todas las escuderias
    console.clear(); // Borra el console.log
    actualizarTabla(); // Actualiza la tabla
  }
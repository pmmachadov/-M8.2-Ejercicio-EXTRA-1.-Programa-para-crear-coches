"use strict";

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
    actualizarTabla(); // Actualiza la tabla
    console.table(escuderias[escuderia].coches);
    console.table(escuderias);
  }
  
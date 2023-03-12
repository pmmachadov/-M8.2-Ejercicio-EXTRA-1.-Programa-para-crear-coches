"use strict";

function altaCoche() {
  if (escuderias.length !== 0) {
    let codigoEscuderia = prompt("Ingrese el código de la escudería");
    let indexEscuderia = buscar(codigoEscuderia);
    if (indexEscuderia === -1) {
      alert(`No se encontró la escudería con código ${codigoEscuderia}`);
      return;
    } else if (indexEscuderia != -1) {
      let potencia = Number(document.getElementById("potencia").value);
      let velocidad = Number(document.getElementById("velocidad").value);
      let color = document.getElementById("color").value;
      let precio = Number(document.getElementById("precio").value);
      let coche = {
        codigoCoche: codigoGeneratorCoche(),
        codigoEscuderia: codigoEscuderia,
        potencia: potencia,
        velocidad: velocidad,
        color: color,
        precio: precio,
      };
      coches.push(coche);
      console.table(coches);
      actualizarTabla();
    } else {
      alert("No hay escuderías");
    }
  }
}

function modificarCoche() {
  let codigo = prompt("Introduce el código del coche a modificar");
  let index = -1;
  for (let i = 0; i < coches.length; i++) {
    if (coches[i].codigoCoche == codigo) {
      index = i;
      let potencia = prompt(
        "Introduce la nueva potencia del coche",
        "coche.potencia"
      );
      let velocidad = prompt(
        "Introduce la nueva velocidad del coche",
        "coche.velocidad"
      );
      let color = prompt("Introduce el nuevo color del coche", "coche.color");
      let precio = prompt(
        "Introduce el nuevo precio del coche",
        "coche.precio"
      );
      coches[index].potencia = potencia;
      coches[index].velocidad = velocidad;
      coches[index].color = color;
      coches[index].precio = precio;
      actualizarTabla();
      break; // exit loop once coche is found and updated
    }
  }
  if (index === -1) {
    alert("No se ha encontrado el coche");
  }
}

function bajaCoche() {
  let codigo = prompt("Intrduce el código del coche a dar de baja");
  let index = -1;
  for (let i = 0; i < coches.length; i++) {
    if (coches[i].codigoCoche == codigo) {
      index = i;
      confirm("¿Estás seguro de que quieres eliminar el coche?");
      coches.splice(index, 1);
      actualizarTabla();
    } else {
      alert("No se ha encontrado el coche");
    }
  }
}

function borrarTodosLosCoches() {
  coches = [];
  console.clear();
  actualizarTabla();
}

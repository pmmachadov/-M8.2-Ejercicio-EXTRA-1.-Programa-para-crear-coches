// El sueldo base es de 50.000€.
// Además, de los/las pilotos quieren saber su altura, su peso.
// El sueldo de los/las pilotos es el sueldo base de las personas trabajadoras más 10.000€ por cada año de antigüedad en la escudería, más 50.000€ de peligrosidad.
// De los mecánicos quieren saber si tienen estudios superiores de mecánica o no.
// Y su sueldo se calcula sumando 10.000 € por cada año de antigüedad en la escudería más el sueldo base.
// Se pide que la aplicación sea capaz de dar de alta, baja y ver pilotos y mecánicos, y ver escuderías y bólidos.
// Las escuderías y los bólidos pueden estar introducidos directamente en el código.

// grama para gestionar parte de la información
//         que hasta ahora no tenían informatizada. Quieren saber de cada escudería que participa en el campeonato, su
//         nombre, su presupuesto y su país de origen. Cada escudería puede tener más de un coche y de cada uno quiere
//         saber la potencia, la velocidad máxima, el color y el precio de mercado.

//         De las personas trabajadoras de las diferentes escuderías quieren saber el nombre, el primer apellido, la edad,
//         el tiempo que llevan en la escudería y el sueldo.

//         El sueldo base es de 50.000€. Además, de los/las pilotos quieren saber su altura, su peso. El sueldo de los/las
//         pilotos es el sueldo base de las personas trabajadoras más 10.000€ por cada año de antigüedad en la escudería,
//         más 50.000€ de peligrosidad.

//         De los mecánicos quieren saber si tienen estudios superiores de mecánica o no. Y su sueldo se calcula sumando
//         10.000 € por cada año de antigüedad en la escudería más el sueldo base.

//         Se pide que la aplicación sea capaz de dar de alta, baja y ver pilotos y mecánicos, y ver escuderías y bólidos.
//         Las escuderías y los bólidos pueden estar introducidos directamente en el código.

// PSEUDO CODIGO DE LAS FUNCIONES
// function sueldoPiloto();
// function sueldoMecanico();
// function buscar();
// function altaPersona();
// function altaEscuderia();
// function altaCoche();
// function bajaPersona();
// function bajaEscuderia();
// function bajaCoche();
// function verPersona();
// function verEscuderia();
// function verCoche();
// function verTodasLasEscuderias();
// function verTodosLosCoches();
// function verTodasLasPersonas();
// function modificarPersona();
// function modificarEscuderia();
// function modificarCoche();
// function eliminarPersona();
// function eliminarEscuderia();
// function eliminarCoche();

"use strict";

function sueldoPiloto(antiguedad) {
  const sueldoBase = 50000;
  const peligrosidad = 50000;
  let sueldo = sueldoBase + antiguedad * 10000 + peligrosidad;
  return sueldo;
}

function sueldoMecanico() {
  const sueldoBase = 50000;
  let sueldo = sueldoBase + antiguedad * 10000;
  return sueldo;
}

function buscar(codigo) {
  let posicion = -1;
  let i = 0;
  let largo = pilotos.length;
  while (i < largo && posicion == -1) {
    if (pilotos[i].codigo == codigo) {
      posicion = i;
    }
    i++;
  }
  return posicion;
}

function altaPersona() {
  let nombre = document.getElementById("nombre").value;
  let primerApellido = document.getElementById("primerApellido").value;
  let edad = document.getElementById("edad").value;
  let antiguedad = document.getElementById("antiguedad").value;
  let sueldo = document.getElementById("sueldo").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let estudios = document.getElementById("estudios").value;
  let pais = document.getElementById("pais").value;
  let presupuesto = document.getElementById("presupuesto").value;
  let potencia = document.getElementById("potencia").value;
  let velocidadMaxima = document.getElementById("velocidadMaxima").value;
  let color = document.getElementById("color").value;
  let precioMercado = document.getElementById("precioMercado").value;
  let piloto = new Piloto(
    nombre,
    primerApellido,
    edad,
    antiguedad,
    sueldo,
    altura,
    peso
  );
  PILOTOS.push(piloto);
  let mecanico = new Mecanico(
    nombre,
    primerApellido,
    edad,
    antiguedad,
    sueldo,
    estudios
  );
  MECANICOS.push(mecanico);
  let escuderia = new Escuderia(nombre, pais, presupuesto);
  ESCUDERIAS.push(escuderia);
  let coche = new Coche(potencia, velocidadMaxima, color, precioMercado);
  COCHES.push(coche);
}

function altaEscuderia() {
  let nombre = document.getElementById("nombre").value;
  let pais = document.getElementById("pais").value;
  let presupuesto = document.getElementById("presupuesto").value;
  let escuderia = new Escuderia(nombre, pais, presupuesto);
  ESCUDERIAS.push(escuderia);
}

function altaCoche() {
  let potencia = document.getElementById("potencia").value;
  let velocidadMaxima = document.getElementById("velocidadMaxima").value;
  let color = document.getElementById("color").value;
  let precioMercado = document.getElementById("precioMercado").value;
  let coche = new Coche(potencia, velocidadMaxima, color, precioMercado);
  COCHES.push(coche);
}

function bajaPersona() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    pilotos.splice(posicion, 1);
  }
}

function bajaEscuderia() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    escuderias.splice(posicion, 1);
  }
}

function bajaCoche() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    coches.splice(posicion, 1);
  }
}

function verPersona() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    document.getElementById("resultado").innerHTML = pilotos[posicion];
  }
}

function verEscuderia() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    document.getElementById("resultado").innerHTML = escuderias[posicion];
  }
}

function verCoche() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    document.getElementById("resultado").innerHTML = coches[posicion];
  }
}

function verTodasLasEscuderias() {
  let resultado = "";
  for (let escuderia of escuderias) {
    resultado += escuderia + "<br>";
  }
  document.getElementById("resultado").innerHTML = resultado;
}

function verTodosLosCoches() {
  let resultado = "";
  for (let coche of coches) {
    resultado += coche + "<br>";
  }
  document.getElementById("resultado").innerHTML = resultado;
}

function verTodasLasPersonas() {
  let resultado = "";
  for (let piloto of pilotos) {
    resultado += piloto + "<br>";
  }
  for (let mecanico of mecanicos) {
    resultado += mecanico + "<br>";
  }
  document.getElementById("resultado").innerHTML = resultado;
}

function modificarPersona() {
  let nombre = document.getElementById("nombre").value;
  let primerApellido = document.getElementById("primerApellido").value;
  let edad = document.getElementById("edad").value;
  let antiguedad = document.getElementById("antiguedad").value;
  let sueldo = document.getElementById("sueldo").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let estudios = document.getElementById("estudios").value;

  if (persona instanceof piloto) {
    let piloto = new Piloto(
      nombre,
      primerApellido,
      edad,
      antiguedad,
      sueldo,
      altura,
      peso
    );
    PILOTOS.push(piloto);
  } else if (persona instanceof mecanico) {
    let mecanico = new Mecanico(
      nombre,
      primerApellido,
      edad,
      antiguedad,
      sueldo,
      estudios
    );
    MECANICOS.push(mecanico);
  }
}

// Crear una funcion para modificar una escuderia usando prompt
function modificarEscuderia(id) {
buscar(id);
confirm("¿Desea modificar la escuderia?");
  let nombre = prompt("Introduce el nombre de la escuderia", "nombre");
    let pais = prompt("Introduce el pais de la escuderia", "pais");
    let presupuesto = prompt("Introduce el presupuesto de la escuderia", "presupuesto");
    let escuderia = new Escuderia(nombre, pais, presupuesto);
    ESCUDERIAS.push(escuderia);
}

function eliminarCoche() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    coches.splice(posicion, 1);
  }
}

function eliminarEscuderia() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    escuderias.splice(posicion, 1);
  }
}

function eliminarPersona() {
  let nombre = document.getElementById("nombre").value;
  let posicion = buscar(nombre);
  if (posicion != -1) {
    pilotos.splice(posicion, 1);
  }
}

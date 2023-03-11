// De las personas trabajadoras de las diferentes escuderías quieren saber el nombre, el primer apellido, la edad, el tiempo que llevan en la escudería y el sueldo.

"use strict";

class Persona{

  constructor(nombre, primerApellido, edad, antiguedad, sueldo, cargo) {
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.edad = edad;
    this.antiguedad = antiguedad;
    this.sueldo = sueldo;
    this.cargo = cargo;
    this.mecanicos = [];
    this.pilotos = [];
    this.codigoPersona = codigoGeneratorPersona();
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getPrimerApellido() {
    return this.primerApellido;
  }

  setPrimerApellido(primerApellido) {
    this.primerApellido = primerApellido;
  }

  getEdad() {
    return this.edad;
  }

  setEdad(edad) {
    this.edad = edad;
  }

  getAntiguedad() {
    return this.antiguedad;
  }

  setAntiguedad(antiguedad) {
    this.antiguedad = antiguedad;
  }

  getSueldo() {
    return this.sueldo;
  }

  setSueldo(sueldo) {
    this.sueldo = sueldo;
  }

    getCargo() {
    return this.cargo;
    }

    setCargo(cargo) {
    this.cargo = cargo;
    }
}

function codigoGeneratorPersona() {
    let codigoPersona = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 2; i++) {
        codigoPersona += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return codigoPersona + "P";
}

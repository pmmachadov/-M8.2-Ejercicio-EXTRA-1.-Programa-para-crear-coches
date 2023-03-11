"use strict";

class Mecanico extends Persona {
  constructor(
    nombre,
    primerApellido,
    edad,
    antiguedad,
    sueldo,
    coche,
    estudiosDeMecanica
  ) {
    super(nombre, primerApellido, edad, antiguedad, sueldo, cargo);
    this.coche = coche;
    this.estudiosDeMecanica = estudiosDeMecanica;
  }

  getCoche() {
    return this.coche;
  }

  getEstudiosDeMecanica() {
    return this.estudiosDeMecanica;
  }

  setEstudiosDeMecanica(estudiosDeMecanica) {
    this.estudiosDeMecanica = estudiosDeMecanica;
  }

  toString() {
    return `Nombre: ${this.nombre}, Primer Apellido: ${this.primerApellido}, Edad: ${this.edad}, Tiempo en Escudería: ${this.antiguedad}, Sueldo: ${this.sueldo}, Coche: ${this.coche}, Estudios de Mecánica: ${this.estudiosDeMecanica}`;
  }
  static counter = Math.floor(Math.random() * 100);
}

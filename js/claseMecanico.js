"use strict";

const MECANICOS = [];
class Mecanico extends Persona {
  constructor(
    codigo,
    nombre,
    primerApellido,
    edad,
    antiguedad,
    sueldo,
    coche,
    estudiosDeMecanica
  ) {
    super(nombre, primerApellido, edad, antiguedad, sueldo);
    this.codigo = Mecanico.counter++;
    this.coche = coche;
    this.estudiosDeMecanica = estudiosDeMecanica;
  }

  getCoche() {
    return this.coche;
  }

  setCoche(coche) {
    this.coche = coche;
  }

  getEstudiosDeMecanica() {
    return this.estudiosDeMecanica;
  }

  setEstudiosDeMecanica(estudiosDeMecanica) {
    this.estudiosDeMecanica = estudiosDeMecanica;
  }

  getCodigo() {
    return this.codigo;
  }

  toString() {
    return `Nombre: ${this.nombre}, Primer Apellido: ${this.primerApellido}, Edad: ${this.edad}, Tiempo en Escudería: ${this.antiguedad}, Sueldo: ${this.sueldo}, Coche: ${this.coche}`;
  }
  static counter = Math.floor(Math.random() * 100000);
}

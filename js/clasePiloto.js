"use strict";

const PILOTOS = [];
class Piloto extends Persona {
  constructor(
    nombre,
    primerApellido,
    edad,
    antiguedad,
    sueldo,
    coche,
    altura,
    peso,
    codigo
  ) {
    super(nombre, primerApellido, edad, antiguedad, sueldo);
    this.coche = coche;
    this.altura = altura;
    this.peso = peso;
    this.codigo = Piloto.counter++;
  }

  getCoche() {
    return this.coche;
  }

  setCoche(coche) {
    this.coche = coche;
  }

  getAltura() {
    return this.altura;
  }

  setAltura(altura) {
    this.altura = altura;
  }

  getPeso() {
    return this.peso;
  }

  setPeso(peso) {
    this.peso = peso;
  }

  getCodigo() {
    return this.codigo;
  }

  toString() {
    return `Nombre: ${this.nombre}, Primer Apellido: ${this.primerApellido}, Edad: ${this.edad}, Tiempo en Escudería: ${this.antiguedad}, Sueldo: ${this.sueldo}, Coche: ${this.coche}`;
  }
  static counter = Math.floor(Math.random() * 100000);
}

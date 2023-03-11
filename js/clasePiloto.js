"use strict";

class Piloto extends Persona {
  constructor(codigo, nombre, primerApellido, edad, antiguedad, sueldo, coche, altura, peso) {
    super(nombre, primerApellido, edad, antiguedad, sueldo, codigo, cargo);
    this.coche = coche;
    this.altura = altura;
    this.peso = peso;
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

  toString() {
    return `Nombre: ${this.nombre}, Primer Apellido: ${this.primerApellido}, Edad: ${this.edad}, Tiempo en Escudería: ${this.antiguedad}, Sueldo: ${this.sueldo}, Coche: ${this.coche}`;
  }
  
  static counter = Math.floor(Math.random() * 100);
}

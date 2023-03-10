// Cada escudería puede tener más de un coche y de cada uno quiere saber la potencia, la velocidad máxima, el color y el precio de mercado.

"use strict";

const COCHES = [];
class Coche {
  constructor(codigo, potencia, velocidadMaxima, color, precio) {
    this.codigo = Coche.counter++;
    this.potencia = potencia;
    this.velocidadMaxima = velocidadMaxima;
    this.color = color;
    this.precio = precio;
  }

  getPotencia() {
    return this.potencia;
  }

  setPotencia(potencia) {
    this.potencia = potencia;
  }

  getVelocidadMaxima() {
    return this.velocidadMaxima;
  }

  setVelocidadMaxima(velocidadMaxima) {
    this.velocidadMaxima = velocidadMaxima;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getPrecio() {
    return this.precio;
  }

  setPrecio(precio) {
    this.precio = precio;
  }

  toString() {
    return `Potencia: ${this.potencia}, Velocidad Máxima: ${this.velocidadMaxima}, Color: ${this.color}, Precio: ${this.precio}`;
  }
  static counter = Math.floor(Math.random() * 100000);
}

// Crear 5 coches

const coche1 = new Coche(1000, 300, "Rojo", 1000000);
const coche2 = new Coche(1000, 300, "Azul", 1000000);
const coche3 = new Coche(1000, 300, "Verde", 1000000);
const coche4 = new Coche(1000, 300, "Amarillo", 1000000);
const coche5 = new Coche(1000, 300, "Blanco", 1000000);

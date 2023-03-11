// Cada escudería puede tener más de un coche y de cada uno quiere saber la potencia, la velocidad máxima, el color y el precio de mercado.

"use strict";

class Coche {
  static counter = Math.floor(Math.random() * 100 + "COCHE");
  
  constructor(potencia, velocidadMaxima, color, precio) {
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

  getCodigo() {
    return this.codigo;
  }

  toString() {
    return `Potencia: ${this.potencia}, Velocidad Máxima: ${this.velocidadMaxima}, Color: ${this.color}, Precio: ${this.precio}`;
  }
}

"use strict";

class Coche {
  
  constructor(potencia, velocidadMaxima, color, precio) {
    this.potencia = potencia;
    this.velocidadMaxima = velocidadMaxima;
    this.color = color;
    this.precio = precio;
    this.codigoCoche = codigoGenerator();
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

  getCodigoCoche() {
    return this.codigoCoche;
  }
}

function codigoGenerator() {
  let codigoCoche = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 2; i++) {
    codigoCoche += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return codigoCoche + "c";
}

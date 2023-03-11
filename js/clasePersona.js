// De las personas trabajadoras de las diferentes escuderías quieren saber el nombre, el primer apellido, la edad, el tiempo que llevan en la escudería y el sueldo.

"use strict";

class Persona {
  constructor(nombrePersona, primerApellidoPersona, edadPersona, antiguedadPersona, sueldo, cargoPersona) {
    this.nombrePersona = nombrePersona;
    this.primerApellidoPersona = primerApellidoPersona;
    this.edadPersona = edadPersona;
    this.antiguedadPersona = antiguedadPersona;
    this.alturaPersona = alturaPersona;
    this.pesoPersona = pesoPersona;
    this.sueldo = sueldo;
    this.cargoPersona = cargoPersona;
    this.mecanicos = [];
    this.pilotos = [];
    this.codigoPersona = codigoGeneratorPersona();
  }

  getnombrePersona() {
    return this.nombrePersona;
  }

  setnombrePersona(nombrePersona) {
    this.nombrePersona = nombrePersona;
  }

  getprimerApellidoPersona() {
    return this.primerApellidoPersona;
  }

  setprimerApellidoPersona(primerApellidoPersona) {
    this.primerApellidoPersona = primerApellidoPersona;
  }

  getedadPersona() {
    return this.edadPersona;
  }

  setedadPersona(edadPersona) {
    this.edadPersona = edadPersona;
  }

  getantiguedadPersona() {
    return this.antiguedadPersona;
  }

  setantiguedadPersona(antiguedadPersona) {
    this.antiguedadPersona = antiguedadPersona;
  }

  getalturaPersona() {
    return this.alturaPersona;
  }

  setalturaPersona(alturaPersona) {
    this.alturaPersona = alturaPersona;
  }

  getpesoPersona() {
    return this.pesoPersona;
  }

  setpesoPersona(pesoPersona) {
    this.pesoPersona = pesoPersona;
  }

  getSueldo() {
    return this.sueldo;
  }

  setSueldo(sueldo) {
    this.sueldo = sueldo;
  }

  getcargoPersona() {
    return this.cargoPersona;
  }

  setcargoPersona(cargoPersona) {
    this.cargoPersona = cargoPersona;
  }

  getCodigoPersona() {
    return this.codigoPersona;
  }

  setCodigoPersona(codigoPersona) {
    this.codigoPersona = codigoPersona;
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
  return codigoPersona + "p";
}

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
}

class Piloto extends Persona {
  constructor(
    codigo,
    nombre,
    primerApellido,
    edad,
    antiguedad,
    sueldo,
    coche,
    altura,
    peso
  ) {
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
}

"use strict";

class Escuderia {
  constructor(coche, nombreEscuderia = "", presupuesto = 0, pais = "") {
    this.coche = coche;
    this.nombreEscuderia = nombreEscuderia;
    this.presupuesto = presupuesto;
    this.pais = pais;
    this.coches = [];
    this.personas = [];
    this.codigoEscuderia = codigoGenerator();
  }

  getCoche() {
    return this.coche;
  }

  setCoche(coche) {
    this.coche = coche;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombreEscuderia = this.nombreEscuderia
  }

  getPresupuesto() {
    return this.presupuesto;
  }

  setPresupuesto(presupuesto) {
    this.presupuesto = presupuesto;
  }

  getPais() {
    return this.pais;
  }

  setPais(pais) {
    this.pais = pais;
  }

  getCodigoEscuderia() {
    return this.codigoEscuderia;
  }

  agregarPersona(persona) {
    this.personas.push(persona);
  }

  eliminarPersona(persona) {
    const index = this.personas.indexOf(persona);
    if (index !== -1) {
      this.personas.splice(index, 1);
    }
  }
}

function codigoGenerator() {
  let codigoEscuderia = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 2; i++) {
    codigoEscuderia += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return codigoEscuderia + "E";
}

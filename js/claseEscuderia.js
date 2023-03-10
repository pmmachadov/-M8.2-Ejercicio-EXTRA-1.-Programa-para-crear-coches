// La organización de un campeonato de coches quiere contar con un programa para gestionar parte de la información que hasta ahora no tenían informatizada. Quieren saber de cada escudería que participa en el campeonato, su nombre, su presupuesto y su país de origen.

"use strict";

const ESCUDERIAS = [COCHES, PERSONAS];
class Escuderia {
  constructor(codigo, coche, nombre = "", presupuesto = 0, pais = "") {
    this.codigo = Escuderia.counter++;
    this.coche = coche;
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.pais = pais;
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
    this.nombre = nombre;
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

  getCodigo() {
    return this.codigo;
  }

  toString() {
    return `Campeonato: ${this.campeonato}, Nombre: ${this.nombre}, Presupuesto: ${this.presupuesto}, País de Origen: ${this.pais}`;
  }

  static counter = Math.floor(Math.random() * 100000);
}

// Introducir 5 escuderías y mostrarlas por pantalla.
const escuderia1 = new Escuderia("Ferrari", "Ferrari", 100000000, "Italia");
const escuderia2 = new Escuderia("Mercedes", "Mercedes", 100000000, "Alemania");
const escuderia3 = new Escuderia("Red Bull", "Red Bull", 100000000, "Austria");
const escuderia4 = new Escuderia(
  "McLaren",
  "McLaren",
  100000000,
  "Reino Unido"
);
const escuderia5 = new Escuderia("Renault", "Renault", 100000000, "Francia");

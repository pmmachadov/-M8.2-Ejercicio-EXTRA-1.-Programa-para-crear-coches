// La organización de un campeonato de coches quiere contar con un programa para gestionar parte de la información que hasta ahora no tenían informatizada. Quieren saber de cada escudería que participa en el campeonato, su nombre, su presupuesto y su país de origen.

"use strict";

class Escuderia {
    constructor(nombre, presupuesto, pais) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.pais = pais;
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

    toString() {
        return `Nombre: ${this.nombre}, Presupuesto: ${this.presupuesto}, País: ${this.pais}`;
    }
}
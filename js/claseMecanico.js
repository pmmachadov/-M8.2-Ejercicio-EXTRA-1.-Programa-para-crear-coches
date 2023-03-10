"use strict";

class Mecanico extends Persona {
    constructor(nombre, primerApellido, edad, antiguedad, sueldo, coche) {
        super(nombre, primerApellido, edad, antiguedad, sueldo);
        this.coche = coche;
    }

    getCoche() {
        return this.coche;
    }

    setCoche(coche) {
        this.coche = coche;
    }

    toString() {
        return `Nombre: ${this.nombre}, Primer Apellido: ${this.primerApellido}, Edad: ${this.edad}, Tiempo en Escudería: ${this.antiguedad}, Sueldo: ${this.sueldo}, Coche: ${this.coche}`;
    }
}
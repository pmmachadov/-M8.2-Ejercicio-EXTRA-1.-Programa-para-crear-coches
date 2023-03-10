// De las personas trabajadoras de las diferentes escuderías quieren saber el nombre, el primer apellido, la edad, el tiempo que llevan en la escudería y el sueldo.

"use strict";

class Persona {
    constructor(nombre, primerApellido, edad, antiguedad, sueldo) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.sueldo = sueldo;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getPrimerApellido() {
        return this.primerApellido;
    }

    setPrimerApellido(primerApellido) {
        this.primerApellido = primerApellido;
    }

    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    getAntiguedad() {
        return this.antiguedad;
    }

    setAntiguedad(antiguedad) {
        this.antiguedad = antiguedad;
    }

    getSueldo() {
        return this.sueldo;
    }

    setSueldo(sueldo) {
        this.sueldo = sueldo;
    }

    toString() {
        return `Nombre: ${this.nombre}, Primer Apellido: ${this.primerApellido}, Edad: ${this.edad}, Tiempo en Escudería: ${this.antiguedad}, Sueldo: ${this.sueldo}`;
    }
}

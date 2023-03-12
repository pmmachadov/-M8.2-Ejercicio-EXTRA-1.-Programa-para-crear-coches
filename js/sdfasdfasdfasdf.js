function actualizarTabla() {
  const tableElement = document.getElementById("tabla");
  tableElement.innerHTML = "";

  // Crea tabla para escuderias
  if (escuderias.length !== 0) {
    const escuderiasTable = document.createElement("table");
    const headerRow = escuderiasTable.insertRow();
    const headerCells = ["Código", "Nombre", "Presupuesto", "País"];
    headerCells.forEach((header) => {
      const cell = headerRow.insertCell();
      cell.textContent = header;
    });
    escuderias.forEach((escuderia) => {
      const row = escuderiasTable.insertRow();
      const cells = [
        escuderia.codigoEscuderia,
        escuderia.nombreEscuderia,
        escuderia.presupuesto,
        escuderia.pais,
      ];
      cells.forEach((cell) => {
        const cellElement = row.insertCell();
        cellElement.textContent = cell;
      });
    });
    tableElement.appendChild(escuderiasTable);
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay escuderías";
    tableElement.appendChild(mensaje);
  }

  // create table for coches
  if (coches.length !== 0) {
    const cochesTable = document.createElement("table");
    const headerRow = cochesTable.insertRow();
    const headerCells = ["Código", "Nombre", "Motor", "Chasis", "Escudería"];
    headerCells.forEach((header) => {
      const cell = headerRow.insertCell();
      cell.textContent = header;
    });
    coches.forEach((coche) => {
      const row = cochesTable.insertRow();
      const cells = [
        coche.codigoCoche,
        coche.nombreCoche,
        coche.motor,
        coche.chasis,
        coche.codigoEscuderia,
      ];
      cells.forEach((cell) => {
        const cellElement = row.insertCell();
        cellElement.textContent = cell;
      });
    });
    tableElement.appendChild(cochesTable);
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay coches";
    tableElement.appendChild(mensaje);
  }

  // create table for personas
  if (personas.length !== 0) {
    const personasTable = document.createElement("table");
    const headerRow = personasTable.insertRow();
    const headerCells = [
      "Código-Persona",
      "Codigo-Escudería",
      "Nombre",
      "Apellido",
      "Edad",
      "Estudios",
      "Antiguedad",
      "Altura",
      "Peso",
      "Cargo",
      "Salario",
    ];
    headerCells.forEach((header) => {
      const cell = headerRow.insertCell();
      cell.textContent = header;
    });
    personas.forEach((persona) => {
      const row = personasTable.insertRow();
      const cells = [
        persona.codigoPersona,
        persona.codigoEscuderia,
        persona.nombrePersona,
        persona.primerApellidoPersona,
        persona.edadPersona,
        persona.tieneEstudiosPersona ? true : false,
        persona.antiguedadPersona,
        Number(persona.alturaPersona),
        persona.pesoPersona,
        persona.cargoPersona,
        persona.salarioPersona,
      ];
      cells.forEach((cell) => {
        const cellElement = row.insertCell();
        cellElement.textContent = cell;
      });
    });
    tableElement.appendChild(personasTable);
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay personas";
    tableElement.appendChild(mensaje);
  }
}
// ESCUDERIA

function altaEscuderia() {
    let nombreEscuderia = document.getElementById("nombreEscuderia").value;
    let presupuesto = document.getElementById("presupuestoEscuderia").value;
    let pais = document.getElementById("paisEscuderia").value;
    let escuderia = {
      nombreEscuderia: nombreEscuderia,
      presupuesto: presupuesto,
      pais: pais,
      coches: [],
      personas: [],
      codigoEscuderia: codigoGenerator(),
    };
    escuderias.push(escuderia);
    console.table(escuderias);
    actualizarTabla();
  }
  
  function bajaEscuderia() {
    let codigo = prompt("Intrduce el código de la escudería a dar de baja");
    let index = -1;
    for (let i = 0; i < escuderias.length; i++) {
      if (escuderias[i].codigoEscuderia == codigo) {
        index = i;
        confirm("¿Estás seguro de que quieres eliminar la escudería?");
        escuderias.splice(index, 1);
        actualizarTabla();
      } else {
        alert("No se ha encontrado la escudería");
      }
    }
  }
  
  function modificarEscuderia() {
    let codigo = prompt("Introduce el código de la escudería a modificar");
    let index = -1;
    for (let i = 0; i < escuderias.length; i++) {
      if (escuderias[i].codigoEscuderia == codigo) {
        index = i;
        let nombre = prompt(
          "Introduce el nuevo nombre de la escudería",
          "escuderia.nombre"
        );
        let presupuesto = prompt(
          "Introduce el nuevo presupuesto de la escudería",
          "escuderia.presupuesto"
        );
        let pais = prompt(
          "Introduce el nuevo país de la escudería",
          "escuderia.pais"
        );
        escuderias[index].nombre = nombre;
        escuderias[index].presupuesto = presupuesto;
        escuderias[index].pais = pais;
        actualizarTabla();
        break; // exit loop once escuderia is found and updated
      }
    }
    if (index === -1) {
      alert("No se ha encontrado la escudería"); // only show alert if no matches were found
    }
  }

  function verEscuderia() {
    let codigoEscuderia = prompt("Introduce el código de la escudería a ver");
    let index = buscar(codigoEscuderia);
    
    if (index != -1) {
      console.table(escuderias[index]);
  
      // create table element
      let table = document.createElement("table");
  
      // create header row
      let headerRow = document.createElement("tr");
      let headerCells = ["Código", "Nombre", "Presupuesto", "País", "Coches", "Personas"];
  
      for (let i = 0; i < headerCells.length; i++) {
        let cell = document.createElement("th");
        cell.innerText = headerCells[i];
        headerRow.appendChild(cell);
      }
  
      table.appendChild(headerRow);
  
      // create data row
      let dataRow = document.createElement("tr");
  
      let codigoCell = document.createElement("td");
      codigoCell.innerText = escuderias[index].codigoEscuderia;
      dataRow.appendChild(codigoCell);
  
      let nombreCell = document.createElement("td");
      nombreCell.innerText = escuderias[index].nombreEscuderia;
      dataRow.appendChild(nombreCell);
  
      let presupuestoCell = document.createElement("td");
      presupuestoCell.innerText = escuderias[index].presupuesto;
      dataRow.appendChild(presupuestoCell);
  
      let paisCell = document.createElement("td");
      paisCell.innerText = escuderias[index].pais;
      dataRow.appendChild(paisCell);
  
      let cochesCell = document.createElement("td");
      cochesCell.innerText = escuderias[index].coches;
      dataRow.appendChild(cochesCell);
  
      let personasCell = document.createElement("td");
      personasCell.innerText = escuderias[index].personas;
      dataRow.appendChild(personasCell);
  
      table.appendChild(dataRow);
  
      // add table to HTML
      document.getElementById("tabla").innerHTML = "";
      document.getElementById("tabla").appendChild(table);
  
    } else {
      console.log(`La escudería con código ${codigoEscuderia} no existe.`);
    }
  }
  

  function borrarTodasescuderias() {
    escuderias = []; // Borra todas las escuderias
    console.clear(); // Borra el console.log
    actualizarTabla(); // Actualiza la tabla
  }
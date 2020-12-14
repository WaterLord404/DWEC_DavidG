///////////Añadir////////////

function insertarEmpleado() {
  //Datos
  let dni = prompt("Introduce DNI");
  let nombre = prompt("Introduce nombre");
  let apellido = prompt("Introduce apellidos");

  //comprueba si existe
  if (!existeUsuario(dni)) {
    //Obtener tabla
    let tabla = document.getElementById("tabla");

    //crear fila nueva
    let nuevaFila = document.createElement("tr");
    let nuevaFilaNum = document.createElement("td");
    let nuevaFilaDni = document.createElement("td");
    let nuevaFilaNombre = document.createElement("td");
    let nuevaFilaApellido = document.createElement("td");

    //asignar datos fila
    nuevaFilaNum.textContent = getNumEpleados() + 1;
    nuevaFilaDni.textContent = dni;
    nuevaFilaNombre.textContent = nombre;
    nuevaFilaApellido.textContent = apellido;

    //clase al td dni y al id
    nuevaFilaNum.setAttribute("class", "id");
    nuevaFilaDni.setAttribute("class", "dni");

    //añadir datos a la fila
    nuevaFila.appendChild(nuevaFilaNum);
    nuevaFila.appendChild(nuevaFilaDni);
    nuevaFila.appendChild(nuevaFilaNombre);
    nuevaFila.appendChild(nuevaFilaApellido);

    //Añadir fila a la tabla
    tabla.appendChild(nuevaFila);
  } else {
    alert("Ya existe ese usuario");
    return;
  }
}

function getNumEpleados() {
  let contador = 0;
  while (document.getElementsByClassName("dni")[contador] != null) {
    contador++;
  }
  return contador;
}

function existeUsuario(dni) {
  let encontrado = false;
  let contador = 0;
  while (document.getElementsByClassName("dni")[contador] != null && !encontrado) {

    if (dni == document.getElementsByClassName("dni")[contador].textContent) {
      encontrado = true;
    }
    contador++;
  }
  return encontrado;
}

////////////Borrar////////////

function borrarEmpleado() {
  //datos
  let dni = prompt("Introduce el DNI del empleado a borrar");

  //comprueba si existe usuario
  let pos = existeUsuarioPos(dni);

  if (pos != -1) {
    //borrar fila

    document.getElementById("tabla").deleteRow(pos + 1);

    //document.getElementsByClassName("dni")[pos].parentNode.parentNode.removeChild(
    //  document.getElementsByClassName("dni")[pos].parentNode
    //);
    organizarNumEmpl();

  } else {
    alert("No se encuentra el usuario a borrar");
  }
}

function existeUsuarioPos(dni) {
  let htmlCollection = document.querySelectorAll(".dni")
  console.log(htmlCollection)

  var arr = Array.from(htmlCollection)
  console.log(arr)

  resul = arr.textContent.indexOf(dni)
  console.log(resul)
  /* let resul = -1;
  let encontrado = false;
  let contador = 0;
  while (document.getElementsByClassName("dni")[contador] != null && !encontrado) {
    if (dni == document.getElementsByClassName("dni")[contador].textContent) {
      resul = contador;
      encontrado = true;
    }
    contador++;
  } */
  return resul;
}

function organizarNumEmpl() {
  let contador = 0;
  while (document.getElementsByClassName("id")[contador] != null) {
    document.getElementsByClassName("id")[contador].textContent = contador + 1;
    contador++;
  }
}

//////////Modificar/////////////

function modificarEmpleado() {
  let dni = prompt("Introduce DNI");

  let pos = existeUsuarioPos(dni);
  if (pos != -1) {
    pos = pos + 1;

    let nuevoDni = prompt("Introduce el nuevo DNI");
    let nuevoNombre = prompt("Introduce el nuevo nombre");
    let nuevoApellido = prompt("Introduce los nuevos apellidos");

    //crear fila nueva
    let nuevaFila = document.createElement("tr");
    let nuevaFilaNum = document.createElement("td");
    let nuevaFilaDni = document.createElement("td");
    let nuevaFilaNombre = document.createElement("td");
    let nuevaFilaApellido = document.createElement("td");

    //asignar datos fila
    nuevaFilaNum.textContent = pos;
    nuevaFilaDni.textContent = nuevoDni;
    nuevaFilaNombre.textContent = nuevoNombre;
    nuevaFilaApellido.textContent = nuevoApellido;


    //clase al td dni y al id
    nuevaFilaNum.setAttribute("class", "id");
    nuevaFilaDni.setAttribute("class", "dni");

    //añadir datos a la fila
    nuevaFila.appendChild(nuevaFilaNum);
    nuevaFila.appendChild(nuevaFilaDni);
    nuevaFila.appendChild(nuevaFilaNombre);
    nuevaFila.appendChild(nuevaFilaApellido);

    document.getElementsByTagName("tr")[pos].parentNode.replaceChild(
      nuevaFila, document.getElementsByTagName("tr")[pos]
    )

  } else {
    alert("No existe ese usuario");
    return;
  }
}
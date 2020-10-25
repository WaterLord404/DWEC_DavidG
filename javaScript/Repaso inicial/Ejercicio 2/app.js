window.addEventListener("load", () => {

    let boton_añadir = document.getElementById("boton_añadir");
    let boton_eliminar = document.getElementById("boton_borrar");

    boton_añadir.addEventListener("click", () => {
        // variables
        let elemento = document.getElementById("elemento").value;
        let posicion = document.getElementById("posicion").value;

        // Obtengo el nodo anterior para la funcion insertBefore
        // obtengo nodo aux por si la posicion es la 1 (no tendría nodo anterior obviamente)
        let nodo_anterior = document.getElementsByTagName("li")[posicion - 1]
        let primer_nodo_aux = document.getElementsByTagName("li")[0];

        // obtener el nodo padre y creo el nuevo nodo con su texto
        let lista = document.getElementById("lista");
        let nuevo_elemento = document.createElement("li");
        nuevo_elemento.textContent = elemento;

        // Si la posicion es la primera uso el nodo auxiliar (que es el primero de la lista)
        // Si no lo inserto justo despues del "nodo anterior"
        if (posicion != 1) {
            lista.insertBefore(nuevo_elemento, nodo_anterior);
        } else {
            lista.insertBefore(nuevo_elemento, primer_nodo_aux);
        }

    })

    boton_eliminar.addEventListener("click", () => {
        let posicion = document.getElementById("posicion").value;
        let lista = document.getElementById("lista");
        let elemento_a_borrar = document.getElementsByTagName("li")[posicion - 1];

        lista.removeChild(elemento_a_borrar);
    })

})

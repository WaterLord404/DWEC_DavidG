window.addEventListener("load", () => {
    
    let boton = document.getElementById("boton");

    boton.addEventListener("click", () => {
        
        //variables
        let posicion = document.getElementById("Posicion").value;
        let equipo = document.getElementById("Equipo").value;
        let puntos = document.getElementById("Puntos").value;

        if (posicion == 0){
            return;
        }
        
        let padre = document.getElementById("tabla");
        let oldChild = document.getElementsByTagName("tr")[posicion];

        let newChild = document.createElement("tr");
        let new_posicion = document.createElement("td");
        let new_equipo = document.createElement("td");
        let new_puntos = document.createElement("td");

        new_posicion.textContent = posicion;
        new_equipo.textContent = equipo;
        new_puntos.textContent = puntos;

        newChild.appendChild(new_posicion);
        newChild.appendChild(new_equipo);
        newChild.appendChild(new_puntos);

        oldChild.parentNode.replaceChild(newChild,oldChild);

       
    });
    
});
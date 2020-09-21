function inicializar() {
    let array = [];

    let uno = prompt("Introduce el primer nombre");
    anadir(uno, array);

    let dos = prompt("Introduce el segundo nombre");
    anadir(dos, array);

    let tres = prompt("Introduce el tercero nombre");
    anadir(tres, array);

    let cuatro = prompt("Introduce el cuarto nombre");
    anadir(cuatro, array);

    let cinco = prompt("Introduce el quinto nombre");
    anadir(cinco, array);

    muestraPrimeraLetra(array);
};


function anadir(x, array) {
    if (!compruebaSiExiste(array,x)) {
        array.push(x);
    } else {
        let nuevo = prompt("Ya existe el nombre, introduce otro");
        anadir(nuevo,array);
    }

    return;
}

function compruebaSiExiste(array,x) {
    let resul = false;

    for(let i = 0; i < array.length; i++){
        if (x == array[i]){
            resul = true;
        }
    }
    return resul;
};

function muestraPrimeraLetra(array){
    array.sort();
    let cadena = "";

    for(let i = 0; i < array.length; i++){
        cadena = cadena + array[i] + " ";
    }

    console.log(cadena.toUpperCase());
    return;
};

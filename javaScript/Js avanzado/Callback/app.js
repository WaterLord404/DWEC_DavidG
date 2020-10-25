
let bd = [
    { id: 1, nombre: "David" },
    { id: 2, nombre: "Ruben" },
    { id: 3, nombre: "Pepe" }
]

const getUsuario = (id, cb) => {
    if (typeof bd[id] !== 'undefined') {
        document.write(bd[id].nombre);
    } else {
        cb(id);
    }
}

const error = (id) => {
    console.log("No existe el usuario " + id)
}


getUsuario(0, error);
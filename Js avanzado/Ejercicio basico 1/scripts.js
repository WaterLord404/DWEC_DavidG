let box = document.getElementById("box");
let text = document.getElementById("text");
let boton = document.getElementById("boton");
let input = document.getElementById("input");
let gallery = document.getElementById("gallery")

box.addEventListener("mouseenter", () => {
    box.setAttribute("class", "verde");
});

box.addEventListener("mouseleave", () => {
    box.setAttribute("class", "rojo");
});

box.addEventListener("mousedown", () => {
    console.log("Has pulsado la caja");
});

box.addEventListener("mouseup", () => {
    console.log("Has soltado el boton izquierdo dentro de la caja")
});

text.addEventListener("keydown", (e) => {
    console.log("Has pulsado una tecla -> " + e.key);
});

text.addEventListener("keyup", (e) => {
    console.log("Has soltado una tecla -> " + e.key);
});


boton.addEventListener("click", () => {

    input.addEventListener("keyup", (e) => {
        console.log(e.key);
    });
});


gallery.addEventListener("click", (e) => {
    if (e.target.className == "gallery__item") {
        e.target.classList.add("red");
    } else {
        e.target.classList.remove("red");
    }

    console.log(e.target.textContent);
});



let x = false;


const refreshDate = () => {
    const date = new Date();
    let cadena = "Hoy es "
        + date.getDay() + " - " + date.getMonth() + " - "
        + date.getFullYear() + " y son las " + date.getHours()
        + ":" + date.getMinutes() + ":" + date.getSeconds() + " horas";

    let div = document.getElementById("fecha");
    div.textContent = cadena;
};

setInterval(refreshDate, 1000);

const alarma = () => {
    let date = new Date();

    let hora = parseInt(prompt("A que hora quieres poner la alarma?"))
    let minutos = parseInt(prompt("A que minutos quieres poner la alarma?"))

    let hora_to_ms = Math.floor(hora * 3600000);
    let minutos_to_ms = Math.floor((minutos % 3600000) * 60000);

    let hora_to_ms_now = Math.floor(date.getHours() * 3600000);
    let minutos_to_ms_now = Math.floor((date.getMinutes() % 3600000) * 60000);
    let segundos_to_ms_now = Math.floor(((date.getSeconds() % 360000) % 60000) * 1000)

    let resul = ((hora_to_ms + minutos_to_ms) - (hora_to_ms_now + minutos_to_ms_now)) - segundos_to_ms_now;
    console.log(resul)
    setTimeout(() => {
        let confirmacion = confirm("¿Desea descansar?");

        if (confirmacion) {
            setTimeout(() => {
                alert("Despierta!");
            }, 120000);
        }
    }, resul);
};







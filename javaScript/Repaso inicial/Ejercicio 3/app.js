window.addEventListener("load", () =>{

    let boton = document.getElementById("boton");

    let provincias = ["Sevilla","Cadiz","Huelva","Malaga","Granada","Almeria","Jaen","Cordoba"]

    boton.addEventListener("click", () => {
        
        //Ordena
        provincias.sort();
        
        //Dibujar tabla con cada provincia
        document.write("<table border='1'>")
        for(let i = 0; i < provincias.length; i++){
            document.write("<tr><td>",provincias[i],"</td></tr>");
        }
        document.write("</table>")
    })
})
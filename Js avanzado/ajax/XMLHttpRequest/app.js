let button = document.getElementById("button");

button.addEventListener("click", () => {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");


    xhr.addEventListener("load", (data) => {
        let json = JSON.parse(data.target.response);

        for (let i = 0; i < json.length; i++) {
            document.write((i + 1) + " - " + json[i].name + "<br>")
        }
    })

    xhr.send();
})
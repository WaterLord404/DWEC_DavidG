let button = document.getElementById("button");

button.addEventListener("click", () => {


    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => drawJson(res))

})

const drawJson = (json) => {
    for (let i = 0; i < json.length; i++) {
        document.write((i + 1) + " - " + json[i].name + "<br>")
    }
}
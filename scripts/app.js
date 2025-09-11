let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    // Assincrona
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then( function (response) {
            return response.json();
        })
        .then( function (json) {
            div.innerText = json.body;
            // div.innerText = JSON.stringify(json, null, 0);
        });
    // console.log("Clicou!");
});

// Sincrona 
// function qqrCoisa() {
//     console.log("X");
//     console.log("Y");
// }
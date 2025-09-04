let button = document.getElementById('btnUsers');

button.addEventListener('click', function () {
    // Assincrona Async Chaining
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        
    })
    // console.log("Clicou!");
});

// Sincrona 
// function qqrCoisa() {
//     console.log("X");
//     console.log("Y");
// }
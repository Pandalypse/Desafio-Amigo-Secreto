// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let asignaciones = {};

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya fue añadido.");
        return;
    }

    listaDeAmigos.push(nombre);
    mostrarListaDeAmigos();
    input.value = '';
}

<<<<<<< HEAD
function mostrarResultadoIndividual() {
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre');
    const resultado = document.getElementById('resultado');

    if (!nombre || !(nombre in asignaciones)) {
        resultado.innerHTML = '<li>Nombre no válido o no se encontró en el sorteo.</li>';
        return;
    }

    resultado.innerHTML = `<li>${nombre} → 🎁 ${asignaciones[nombre]}</li>`;
}


function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        console.warn("No hay suficientes participantes para sortear.");
=======
function mostrarListaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaDeAmigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Agrega al menos 2 personas para sortear.");
>>>>>>> 66a122b30f0703530f271fb2a4aa61f3bfb3ed5f
        return;
    }

    const disponibles = [...listaDeAmigos];
    asignaciones = {};

    for (let participante of listaDeAmigos) {
        let posibles = disponibles.filter(nombre => nombre !== participante);

        if (posibles.length === 0) {
<<<<<<< HEAD
            return sortearAmigo(); // Reinicia si alguien se queda sin opciones válidas
=======
            // Reiniciar el sorteo si alguien se queda sin opción
            return sortearAmigo();
>>>>>>> 66a122b30f0703530f271fb2a4aa61f3bfb3ed5f
        }

        let amigo = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[participante] = amigo;
        disponibles.splice(disponibles.indexOf(amigo), 1);
    }

<<<<<<< HEAD
    mostrarResultadoIndividual();
}


=======
    mostrarResultado();
}

>>>>>>> 66a122b30f0703530f271fb2a4aa61f3bfb3ed5f
function mostrarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let amigo in asignaciones) {
        const li = document.createElement('li');
        li.textContent = `${amigo} → 🎁 ${asignaciones[amigo]}`;
        resultado.appendChild(li);
    }
<<<<<<< HEAD
}

window.onload = function () {
    // 👇 Esta es tu lista de participantes predeterminada (puedes editarla)
    listaDeAmigos = ["Ana", "Luis", "Carlos", "María", "Pedro"];
    sortearAmigo();
};
=======
}
>>>>>>> 66a122b30f0703530f271fb2a4aa61f3bfb3ed5f

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
        return;
    }

    const disponibles = [...listaDeAmigos];
    asignaciones = {};

    for (let participante of listaDeAmigos) {
        let posibles = disponibles.filter(nombre => nombre !== participante);

        if (posibles.length === 0) {
            // Reiniciar el sorteo si alguien se queda sin opción
            return sortearAmigo();
        }

        let amigo = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[participante] = amigo;
        disponibles.splice(disponibles.indexOf(amigo), 1);
    }

    mostrarResultado();
}

function mostrarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let amigo in asignaciones) {
        const li = document.createElement('li');
        li.textContent = `${amigo} → 🎁 ${asignaciones[amigo]}`;
        resultado.appendChild(li);
    }
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



// Función para agregar un nombre a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // Detener la ejecución si el campo está vacío
    }

    // Obtener la lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");

    // Crear un nuevo elemento <li> para el nombre
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombre;

    // Agregar el nuevo nombre a la lista
    listaAmigos.appendChild(nuevoAmigo);

    // Limpiar el campo de texto después de agregar el nombre
    input.value = "";
}


// Función para sortear un nombre aleatorio
function sortearAmigo() {
    // Obtener todos los elementos <li> de la lista de amigos
    const listaAmigos = document.querySelectorAll("#listaAmigos li");

    // Validar que haya al menos un nombre en la lista
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista. Agrega algunos amigos primero.");
        return; // Detener la ejecución si no hay nombres
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre correspondiente al índice aleatorio
    const nombreGanador = listaAmigos[indiceAleatorio].textContent;

    // Mostrar el resultado en el <ul> con id "resultado"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nombreGanador}</li>`;
}
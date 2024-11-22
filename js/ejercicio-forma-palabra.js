let letrasSeleccionadas = [];

function drag(event) {
    event.target.classList.add("dragging");
    event.dataTransfer.setData("text/plain", event.target.innerText);
}

function dragEnd(event) {
    event.target.classList.remove("dragging");
}

document.querySelectorAll('.letra').forEach(letra => {
    letra.addEventListener('dragend', dragEnd);
});

document.getElementById("dropArea").addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.getElementById("dropArea").addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");

    const droppedLetterDiv = document.createElement("div");
    droppedLetterDiv.classList.add("dropped-letter");
    droppedLetterDiv.innerText = data;

    droppedLetterDiv.classList.add("letra-soltada");

    document.getElementById("droppedLetters").appendChild(droppedLetterDiv);

    letrasSeleccionadas.push(data);

    const listaLetras = document.getElementById("listaLetras");
    listaLetras.value = letrasSeleccionadas.join("");
});

function verificarRespuesta() {
    if (letrasSeleccionadas.length === 4 &&
        letrasSeleccionadas[0] === "G" &&
        letrasSeleccionadas[1] === "A" &&
        letrasSeleccionadas[2] === "T" &&
        letrasSeleccionadas[3] === "O") {
        mostrarModal(true);
    } else {
        mostrarModal(false);
    }
}

function mostrarModal(esCorrecto) {
    const mensaje = esCorrecto
        ? "¡Respuesta correcta!"
        : "Respuesta incorrecta.\nHas perdido una vida 💔\nTiempo restante para la próxima vida: 5 horas.";

    Swal.fire({
        icon: esCorrecto ? "success" : "error",
        title: esCorrecto ? "¡Correcto!" : "Intenta de nuevo.",
        text: mensaje,
        confirmButtonColor: esCorrecto ? "#06b059" : "#dc3545",
        confirmButtonText: "Siguiente ejercicio",
    });
}

document.querySelector("form button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault();
    verificarRespuesta();
});

document.getElementById("botonCerrar").onclick = function() {
    document.getElementById("modalSalir").style.display = "flex";
};

document.getElementById("cancelarSalir").onclick = function() {
    document.getElementById("modalSalir").style.display = "none";
};

document.getElementById("confirmarSalir").onclick = function() {
    window.location.href = "/views/menu-braille.html";
};

document.getElementById("cerrarModal").onclick = function() {
    document.getElementById("modalSalir").style.display = "none";
};

window.onclick = function (event) {
    const modal = document.getElementById("modalSalir");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
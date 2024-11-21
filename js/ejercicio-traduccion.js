document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
  
    const opciones = document.getElementsByName("respuesta");
    let respuestaSeleccionada = null;
  
    for (const opcion of opciones) {
      if (opcion.checked) {
        respuestaSeleccionada = opcion.nextElementSibling.textContent.trim();
        break;
      }
    }
    const respuestaCorrecta = "E";
    let correcta = respuestaSeleccionada === respuestaCorrecta;
    
    let mensaje = correcta
      ? "¡Respuesta correcta!"
      : "Respuesta incorrecta.\nHas perdido una vida 💔\nTiempo restante para la próxima vida: 5 horas.";
  
    Swal.fire({
      icon: correcta ? "success" : "error",
      title: correcta ? "¡Correcto!" : "¡Incorrecto!",
      text: mensaje,
      confirmButtonColor: correcta ? "#4CAF50" : "#f44336",
      confirmButtonText: "Confirmar",
    });
  };
  
/*
document.getElementById("botonVidas").addEventListener("click", function () {
  let vidasRestantes = document.getElementById("vidasNumero").innerText;

  let tiempoRestante = document.getElementById("tiempoRestante").innerText;

  console.log("Tiempo restante:", tiempoRestante);

  Swal.fire({
    title: "Vidas Restantes",
    html: `Te quedan ${vidasRestantes} vidas <i class="fa-solid fa-heart"></i>.<br>Tiempo restante para la próxima vida: <i class="fa-solid fa-clock-rotate-left"></i> ${tiempoRestante} minutos.`,
    icon: "info",
    confirmButtonText: "OK",
    didOpen: () => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js";
      document.head.appendChild(script);
    },
  });
});
*/

document.getElementById("botonCerrar").onclick = function () {
    document.getElementById("modalSalir").style.display = "flex";
  };
  

  document.getElementById("cancelarSalir").onclick = function () {
    document.getElementById("modalSalir").style.display = "none";
  };
  
  document.getElementById("confirmarSalir").onclick = function () {
    window.location.href = "/views/menu-braille.html";
  };
  
  document.getElementById("cerrarModal").onclick = function () {
    document.getElementById("modalSalir").style.display = "none";
  };
  
  window.onclick = function (event) {
    const modal = document.getElementById("modalSalir");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  

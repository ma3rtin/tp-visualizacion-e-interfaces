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
    const respuestaCorrecta = "K";
    let correcta = respuestaSeleccionada === respuestaCorrecta;
    
    let mensaje = correcta
      ? "¡Respuesta correcta!"
      : "Respuesta incorrecta.\nHas perdido una vida 💔\nTiempo restante para la próxima vida: 5 horas.";
  
    Swal.fire({
      icon: correcta ? "success" : "error",
      title: correcta ? "¡Correcto!" : "¡Incorrecto!",
      text: mensaje,
      confirmButtonColor: correcta ? "#06b059" : "#dc3545",
      confirmButtonText: "Confirmar",
    });
  };
  

document.getElementById("botonCerrar").onclick = function () {
    document.getElementById("modalSalir").style.display = "flex";
  };
  

  document.getElementById("cancelarSalir").onclick = function () {
    document.getElementById("modalSalir").style.display = "none";
  };
  
  document.getElementById("confirmarSalir").onclick = function () {
    window.location.href = "/views/menu-senias.html";
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
  

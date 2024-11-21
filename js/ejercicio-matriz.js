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

function concatenarCheckboxes() {
    let checkboxes = document.querySelectorAll(".braille-checkbox");
    let resultado = "";
  
    checkboxes.forEach((checkbox) => {
      resultado += checkbox.checked ? "1" : "0";
    });
  
    return resultado;
  }
  
  function comprobarLetra(event) {
    event.preventDefault();
  
    const respuesta = concatenarCheckboxes();
    const correcta = respuesta === "011010";
  
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
  }
  
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      backgroundColor: "#f7f9fc",
      data: [{
          type: "doughnut",
          startAngle: 60,
          indexLabelFontSize: 15,
          indexLabel: "{label} - #percent%",
          toolTipContent: "<b>{label}:</b> {y} (#percent%)",
          dataPoints: [
              { y: 424478, label: "Discapacidad auditiva", color: "#4bc5a0" },
              { y: 3042943, label: "Discapacidad visual", color: "#90c54b" },
              { y: 1641655, label: "Otra discapacidad", color: "#4a7ac2" }
          ]
      }]
  });
  chart.render();
}

      document.addEventListener("DOMContentLoaded", function() {
        const userIcon = document.getElementById("user-icon");
        const dropdownMenu = document.getElementById("dropdown-menu");

        userIcon.addEventListener("click", function(event) {
          dropdownMenu.classList.toggle("show");
          event.stopPropagation();
        });

        document.addEventListener("click", function() {
          dropdownMenu.classList.remove("show");
        });
      });

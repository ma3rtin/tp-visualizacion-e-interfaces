const letras = "abcdefghijklmnopqrstuvwxyz".split("");

const brailleGrid = document.getElementById("brailleGrid");

letras.forEach(letra => {
    const brailleItem = document.createElement("div");
    brailleItem.className = "braille-item";

    brailleItem.innerHTML = `
      <span class="letra" text="${letra}">${letra.toUpperCase()}</span>
      <img src="/img/abecedario braille/braille-${letra}.png" alt="Braille ${letra}" class="braille-img">
    `;

    brailleGrid.appendChild(brailleItem);
  });
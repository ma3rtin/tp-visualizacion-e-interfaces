document.addEventListener("DOMContentLoaded", () => {
  const letras = "abcdefghijklmnopqrstuvwxyz".split("");

  const brailleGrid = document.getElementById("brailleGrid");
  if(brailleGrid){

    letras.forEach(letra => {
      const brailleItem = document.createElement("div");
      brailleItem.className = "braille-item";
      brailleItem.innerHTML = `
        <span class="letra" text="${letra}">${letra.toUpperCase()}</span>
        <img src="/img/abecedario braille/braille-${letra}.png" alt="Braille ${letra}" class="braille-img">
      `;
      brailleGrid.appendChild(brailleItem);
  });
  }else{
    const seniasGrid = document.getElementById("seniasGrid");
    console.log("seniasGrid:", seniasGrid);
    letras.forEach(letra => {
        const señasItem = document.createElement("div");
        señasItem.className = "senia-item";
        señasItem.innerHTML = `
          <span class="letra" text="${letra}">${letra.toUpperCase()}</span>
          <img src="/img/abecedario señas/senias-${letra}.png" alt="Seña de ${letra}" class="senia-img">
        `;
        seniasGrid.appendChild(señasItem);
    });
  }
  
});

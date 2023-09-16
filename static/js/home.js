window.addEventListener("load", function () {
  if (localStorage.cidades) {
    cidades = JSON.parse(localStorage.cidades);
    for (let i = 0; i < 4; i++) {
      button = this.document.getElementById(`Lavoura ${i + 1}`);
      if (cidades[i]) {
        button.innerHTML = cidades[i];
        button.disabled = false;
        button.classList.remove("disabled-button");
      } else {
        button.innerHTML = `Lavoura ${i + 1}`;
        button.disabled = true;
        button.classList.add("disabled-button");
      }
    }
  } else {
    disableButtons();
  }
});

function disableButtons() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((element) => {
    if (element.textContent.includes("Lavoura")) {
      element.disabled = true;
      element.classList.add("disabled-button");
    }
  });
}

function salvarIdBotao(idBotao) {
  localStorage.setItem("idBotao", JSON.stringify(idBotao));
}

function salvarBotaoLavoura(idLavoura) {
  localStorage.setItem("idLavoura", JSON.stringify(idLavoura));
}

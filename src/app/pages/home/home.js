window.addEventListener("load", function () {
  cidades = JSON.parse(localStorage.cidades);

  for (let i = 0; i < 4; i++) {
    if (cidades[i]) {
      this.document.getElementById(`lavoura${i + 1}`).innerHTML = cidades[i];
    } else {
      this.document.getElementById(`lavoura${i + 1}`).innerHTML = `Lavoura ${
        i + 1
      }`;
    }
  }
});

function salvarIdBotao(idBotao) {
  localStorage.setItem("idBotao", JSON.stringify(idBotao));
}

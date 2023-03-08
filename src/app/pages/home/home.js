window.addEventListener("load", function () {
  if (this.localStorage.cidades) {
    cidades = JSON.parse(localStorage.cidades);
    this.document.getElementById("lavoura1").innerHTML = cidades[0];
    this.document.getElementById("lavoura2").innerHTML = cidades[1];
    this.document.getElementById("lavoura3").innerHTML = cidades[2];
  } else {
    this.document.getElementById("lavoura1").innerHTML = "lavoura1";
    this.document.getElementById("lavoura2").innerHTML = "lavoura2";
    this.document.getElementById("lavoura3").innerHTML = "lavoura3";
  }
});

function salvarIdBotao(idBotao) {
  localStorage.setItem("idBotao", JSON.stringify(idBotao));
}

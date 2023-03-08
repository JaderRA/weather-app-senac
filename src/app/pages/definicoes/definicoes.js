function salvarCidade(idBotao) {
  idBotao = +idBotao;
  var cidades = [];

  if (!localStorage.cidades) {
    cidades[idBotao - 1] = document.getElementById("cidadeInput").value;
    localStorage.setItem("cidades", JSON.stringify(cidades));
  } else {
    cidades = JSON.parse(localStorage.cidades);

    cidades[idBotao - 1] = document.getElementById("cidadeInput").value;
    localStorage.setItem("cidades", JSON.stringify(cidades));
  }
}

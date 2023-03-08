function salvarCidade() {
  var idBotao = +localStorage.idBotao;
  var cidades = [];

  cidade = document.getElementById("cidadeInput").value;
  validacao = cidade.match(/[A-Za-z]/g);

  if (validacao && validacao.length >= 2) {
    if (!localStorage.cidades) {
      cidades[idBotao - 1] = cidade;
      localStorage.setItem("cidades", JSON.stringify(cidades));
    } else {
      cidades = JSON.parse(localStorage.cidades);

      cidades[idBotao - 1] = document.getElementById("cidadeInput").value;
      localStorage.setItem("cidades", JSON.stringify(cidades));
    }
  } else {
    alert("Por favor, insira um nome válido");
  }
}

function apagarVoltar() {
  localStorage.removeItem("idBotao");
}

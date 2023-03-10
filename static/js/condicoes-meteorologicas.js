window.addEventListener("load", function () {
  idLavoura = JSON.parse(localStorage.idLavoura);
  idBotao = parseInt(idLavoura.replace("Lavoura ", ""));

  cidades = JSON.parse(localStorage.cidades);

  setPageTitle(idLavoura);
  setPageSubtitle(idBotao, cidades);
  imprimeResultados(idBotao, cidades);
});

function setPageTitle(idLavoura) {
  document.getElementById("meteorologicas-titulo").innerHTML = idLavoura;
}

function setPageSubtitle(idBotao, cidades) {
  document.getElementById("meteorologicas-subtitulo").innerHTML = `Cidade: ${
    cidades[idBotao - 1]
  }`;
}

async function pegaClima(idBotao, cidades) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      cidades[idBotao - 1]
    }, br&units=metric&lang=pt_br&appid=97e31ee7f1b993ef9ba312a26528bad4`
  ).then((result) => result.json());
}

async function imprimeResultados(idBotao, cidades) {
  let listaClima = await pegaClima(idBotao, cidades);

  let divResposta = document.getElementById("apiResponse");

  if (listaClima.cod == 200) {
    divResposta.innerHTML += `<p>Céu: ${listaClima.weather[0].description}</p>`;
    divResposta.innerHTML += `<p>Temperatura: ${listaClima.main.temp}º C</p>`;
    divResposta.innerHTML += `<p>Sensaçao Térmica: ${listaClima.main.feels_like}º C</p>`;
    divResposta.innerHTML += `<p>Umidade: ${listaClima.main.humidity}%</p>`;
    divResposta.innerHTML += `<p>Vento: ${Math.round(
      listaClima.wind.speed * 3.6
    )} km/h</p>`;
  } else {
    divResposta.innerHTML += `<p> Cidade não encontrada <p>`;
  }

  document.getElementById("loading").classList.add("ocultar");
}

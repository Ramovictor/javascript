async function buscarCep() {
  const cepDigitado = document.querySelector("#cep").value; //PEga oque ta digitado naquele momento
  const url = `https://viacep.com.br/ws/${cepDigitado}/json/`; //URL da API do JSON

  const resposta = await fetch(url); //Request/Requisição(chamando o garçom)
  const dados = await resposta.json(); //

  popularInputs(dados);
}
function popularInputs(dados) {
  document.querySelector("#logradouro").value = dados.logradouro;
  document.querySelector("#cidade").value = dados.localidade;
  document.querySelector("#bairro").value = dados.bairro;
  document.querySelector("#uf").value = dados.uf;
  document.querySelector("#regiao").value = dados.regiao;
}

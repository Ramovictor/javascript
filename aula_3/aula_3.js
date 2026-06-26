// const usuarios = [`Luiz`, `Ramon`, `Maria`, `Pedro`, `Henrique`, `Manoel`];

// alert(usuarios[2]);

// for (const usuario of usuarios) {
// console.log(`usuario atual: ${usuario}`);
// }

// const carros = [
// {
// modelo: "Fusca",
// marca: "VW",
// ano: 1975,
// cor: "Branco",
// },
// {
// modelo: "Chevette",
// marca: "Chevrolet",
//ano: 1980,
//cor: "Azul",
// },
// ];

// console.log(carro[1]);

const alunos = [
  {
    nome: "Ramon",
    idade: 16,
    email: "ramonvictor.0003@gmail.com",
    telefone: "47-98920-1252",
    cpf: "07992312589",
    foto: null,
  },
  {
    nome: "Julio",
    idade: 103,
    email: "juliovictor.0003@gmail.com",
    telefone: "47-98030-1252",
    cpf: "07992812589",
    foto: null,
  },
  {
    nome: "Catarao",
    idade: 19,
    email: "Catatoavictor.0003@gmail.com",
    telefone: "47-98993-9852",
    cpf: "07992233299",
    foto: null,
  },
];

// console.log(alunos);

function popularTabela() {
  console.log("Iniciar carregamento da tabela");

  const tbody = document.querySelector("#table_alunos tbody");

  console.log(tbody);

  let html = "";
  for (const aluno of alunos) {
    html += `
      <tr>
        <td>${aluno.nome}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.email}</td>
        <td>${aluno.telefone}</td>
      </tr>
    `;
  }

  console.log(html);

  tbody.innerHTML = html;
}

popularTabela();

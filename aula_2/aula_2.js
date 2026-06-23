function calcularMedia(botao) {
  // console.log(botao);
  const tr = botao.closest("tr");

  // console.log(tr);
  const nota1 = Number(tr.querySelector(".nota_1").value);
  const nota2 = Number(tr.querySelector(".nota_2").value);

  // console.log(nota1, nota2);

  const media = (nota1 + nota2) / 2;
  console.log(media);

  const tdMedia = tr.querySelector(".media");
  tdMedia.textContent = media;
}

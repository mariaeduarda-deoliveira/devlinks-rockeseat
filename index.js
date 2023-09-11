function toggleMode() {
  // pega a raiz do documento, ou seja, a tag html
  const html = document.documentElement;
  //   pega a tag img
//   const img = document.querySelector("#profile img");
  html.classList.toggle("light"); // muda para o light

  // condição if para fazer mudar de light pra dark e vice-versa

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light");
  //   } else {
  //    html.classList.add("light");
  //   }
//   if (html.classList.contains("light")) {
//     // se estiver em light mode, aparece a foto do modo light
//     img.setAttribute('src', 'https://github.com/mariaeduarda-deoliveira.png')
//   } else {
//     img.setAttribute('src', './assets/avatar.png');
//   }
}

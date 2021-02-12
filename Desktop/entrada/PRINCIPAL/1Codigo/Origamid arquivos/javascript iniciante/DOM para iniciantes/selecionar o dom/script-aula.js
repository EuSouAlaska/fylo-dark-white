// Retorne no console todas as imagens do site
const imagem = document.querySelectorAll("img");
console.log(imagem);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemImg = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagemImg);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const titulo = document.querySelector(".animais-descricao h2");
console.log(titulo);

// Selecione o último p do site
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo[24]);

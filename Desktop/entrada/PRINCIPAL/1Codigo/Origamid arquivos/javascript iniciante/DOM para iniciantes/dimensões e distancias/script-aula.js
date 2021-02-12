// Verifique a distância da primeira imagem
// em relação ao topo da página

let imagem = document.querySelector("img");
let distancia = imagem.offsetTop;
let getbound = imagem.getBoundingClientRect();

// Retorne a soma da largura de todas as imagens

function soma() {
  let imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((img) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  soma();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

let links = document.querySelectorAll("a");

let verify = links.forEach((link) => {
  let google = 48;
  let height = link.offsetHeight;
  let width = link.offsetWidth;
  if (width >= google && height >= google) {
    console.log(link, "possui acessibilidade");
  } else {
    console.log(link, " não possui acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

let menu = document.querySelector(".menu");

const tamanhoBrowser = window.matchMedia("(max-width: 720px)".matches);

if (tamanhoBrowser) {
  menu.classList.add("menu-mobile");
} else {
  console.log("nao adiciona nada");
}

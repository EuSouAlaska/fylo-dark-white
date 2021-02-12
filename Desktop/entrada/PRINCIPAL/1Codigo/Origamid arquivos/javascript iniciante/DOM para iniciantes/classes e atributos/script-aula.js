// Adicione a classe ativo a todos os itens do menu

let classeAtivo = document.querySelectorAll(".menu a");
let htmlCole = document.querySelector("h1");

classeAtivo.forEach((item) => item.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

classeAtivo.forEach((item) => item.classList.remove("ativo"));

classeAtivo[0].classList.add("ativo");

// Verifique se as imagens possued o atributo alt

let imagens = document.querySelectorAll("img");

imagens.forEach((item) => {
  let verifi = item.hasAttribute("alt");
  console.log(item, verifi);
});

// Modifique o href do link externo no menu

let hrefMenu = document.querySelectorAll(".menu a");
hrefMenu.forEach((link) => {
  link.setAttribute("href", "## ");
  console.log(link);
});

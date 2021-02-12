// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

let links = document.querySelectorAll('a[href^="#"]');

function handleLink(evento) {
  evento.preventDefault();
  links.forEach((link) => link.classList.remove("ativo"));
  evento.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

let elementos = document.querySelectorAll("body");

function cu(event) {
  console.log(event.target);
}

elementos.forEach((item) => {
  item.addEventListener("click", cu);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function cu(event) {
  let target = event.target;
  target.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyboard(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("grande");
  }
}

window.addEventListener("keydown", handleKeyboard);

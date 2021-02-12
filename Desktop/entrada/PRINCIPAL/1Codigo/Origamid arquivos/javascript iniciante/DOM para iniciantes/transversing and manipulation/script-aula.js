// Duplique o menu e adicione ele em copy

let menu = document.querySelector(".menu");
let novoMenu = menu.cloneNode(true);
let copy = document.querySelector(".copy");

copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
let dt = document.querySelector(".faq-lista dt");

// Selecione o DD referente ao primeiro DT
let dd = dt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

let faq = document.querySelector(".faq");
let animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;

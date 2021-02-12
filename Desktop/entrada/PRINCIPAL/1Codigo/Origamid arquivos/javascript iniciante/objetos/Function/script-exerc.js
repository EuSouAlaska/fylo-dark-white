// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return (acumulador += item.innerText.length);
}, 0);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const newElement = document.createElement(tag)
  classe ? newElement.classList.add(classe) : null
  conteudo ? newElement.innerHTML = conteudo : null
  return newElement;
}

console.log(criarElemento('div', 'ativa', 'wtfff'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
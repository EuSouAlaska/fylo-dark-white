// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(name, idade) {
  this.nome = name;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');

  }

}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos


const joao = new Pessoa("joão", 20)
const maria = new Pessoa("Maria", 25)
const bruno = new Pessoa("Bruno", 21)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function DomDom(seletor, classe) {
  this.elements = document.querySelectorAll(seletor)
  this.addClass = this.elements.forEach((i) => {
    i.classList.add(classe)
  })
  this.removeClass = this.elements.forEach((i) => {
    i.classList.remove(classe)
  })

}
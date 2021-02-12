// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + this.sobrenome;
};

const mariana = new Pessoa("mariana", " pereira", 20);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

console.log(
  li.constructor.name, //HTMLLIElement
  li.click.constructor.name, //Function
  li.innerText.constructor.name, //String
  li.value.constructor.name, //Number
  li.hidden.constructor.name, //Boolean
  li.offsetLeft.constructor.name //name
  //li.click().constructor.name
);

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name.constructor.name); //string

const oi ="oi"
const tchau = new String("tchau")
console.log(typeof oi, typeof tchau);


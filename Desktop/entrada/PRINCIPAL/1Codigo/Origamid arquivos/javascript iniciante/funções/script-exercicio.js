// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}
console.log(isTruthy(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(a, b, c, d) {
  return a + b + c + d;
}
console.log(perimetro(1, 2, 3, 4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
console.log(nomeCompleto("Adriano", "Pimentel"));

// Crie uma função que verifica se um número é par
function isEven(numero) {
  var modulo =
    numero %
    2; /* % modulo retorna 0 ou 1 dependendo se o numero é ou não divisivel por dois */
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Adriano Pimentel");
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// Corrija o erro abaixo

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

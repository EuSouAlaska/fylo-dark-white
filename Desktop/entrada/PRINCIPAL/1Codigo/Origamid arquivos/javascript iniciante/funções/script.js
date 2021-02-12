/* addEventListener("click", function () {
  console.log("Clicou");
}); */
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); // retorna o imc
console.log(imc(80, 1.8)); // retorna o imc e undefined

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

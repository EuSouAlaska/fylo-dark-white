/* // Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((i) => {
  const numeroLimpo = +i.valor.replace("R$", "");

  if (i.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else if (i.descricao.slice(0, 4) === "Rece") {
    recebimentoTotal += numeroLimpo;
  }
});
console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo

const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransporte = transportes.split(";");
console.log(arrayTransporte);

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const troca = html.split("span");
const entro = troca.join("a");

console.log(entro);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

const ultimo = frase.charAt(--frase.length);
console.log(ultimo);

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxas = "";

transacoes2.forEach((i) => {
  let noSpace = i.trim().toLowerCase();
  console.log(noSpace);
  if (noSpace.startsWith("taxa")) {
    totalTaxas = `${totalTaxas} ${noSpace},`;
  }
});
totalTaxas = totalTaxas.slice(0, -1);
console.log(`O total de taxas é a${totalTaxas}.`);
 */

const li = document.querySelectorAll('li')

let conta = 0;

li.forEach((i) => conta = conta + 1)
//Exercícios de interpretação de código

//1.
//a)O código está verificando se o número digitado é par ou impar.
//b)Números pares.
//c)Números impares.

//2.
//a)Para verificar o valor da fruta que eu digitar no prompt.
//b)console.log("O preço da fruta ", Maçã, " é ", "R$ ", 2.25)
//c)console.log("O preço da fruta ", Pêra, " é ", "R$ ", 5)

//3.
//a)Solicitando para o usuário um número.
//b)console.log("Esse número passou no teste"). E se o valor for -10 apresentará erro.
//c)sim.A variável "mensagem" esta dentro da estrutura do if, para que ela seja executada deve ser retirada de dentro do escopo do if.

//Exercícios de escrita de código

//1.
/*
const idade = prompt("Qual é a sua idade?");
const num = Number(idade);

if (num >= 18) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você não pode dirigir!");
}
*/

//2.
/*
const turno = prompt(
  "Qual turno você estuda? Digite: M (matutino) ou V (Vespertino) ou N (Noturno)"
).toUpperCase();

if (turno === "M") {
  console.log("Bom Dia!");
} else {
  if (turno === "V") {
    console.log("Boa Tarde!");
  } else {
    console.log("Boa Noite!");
  }
}
*/
//3.
/*
const turno = prompt(
  "Qual turno você estuda? Digite: M (matutino) ou V (Vespertino) ou N (Noturno)"
);
switch (turno) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Bom Tarde!");
    break;
  case "N":
    console.log("Boa Noite!");
    break;
  default:
    console.log("Opção não identificada!");
    break;
}
*/

//4.
/*
const genero = prompt("Qual gênero de filme vc deseja assistir?").toLowerCase();
const valor = prompt("Qual é o valor do ingresso?");
const preco = Number(valor);

if (genero === "fantasia" && preco < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}
*/

//Desafio

//1.
/*
const genero = prompt("Qual gênero de filme vc deseja assistir?").toLowerCase();
const valor = prompt("Qual é o valor do ingresso?");
const preco = Number(valor);

if (genero === "fantasia" && preco < 15) {
  const comida = prompt("Qual snack que você quer comprar?");

  console.log("Bom filme!");
  console.log(`Aproveite o seu ${comida}`);
} else {
  console.log("Escolha outro filme :(");
}
*/

//2.
const nomeCompleto = prompt("Qual o seu nome completo?");
const tipoJogo = prompt(
  "Qual o tipo de jogo? Digite:IN (internacional) ou DO (doméstico)."
);
const etapaJogo = prompt(
  "Qual a etapa do jogo? Digite: SF indica semi-final; DT (decisão de terceiro lugar) ou FI (final)"
);
const categoria = prompt("Digite qual o número da categoria:");
const ingresso = prompt("Quantos ingressos vc deseja?");

const sf = {
  categoria1: 1320,
  categoria2: 880,
  categoria3: 550,
  categoria4: 220,
};

const dt = {
  categoria1: 660,
  categoria2: 440,
  categoria3: 330,
  categoria4: 170,
};

const fi = {
  categoria1: 1980,
  categoria2: 1320,
  categoria3: 880,
  categoria4: 330,
};

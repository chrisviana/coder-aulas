//Sugar syntax

// const valor = true;
// if (valor) {
//   console.log("Sugar syntax");
// } else {
//   console.log("Não é Sugar syntax");
// }

// console.log(`${valor ? "Sugar syntax" : "Não é Sugar syntax"} `);

// Spread Operator
const objeto = {
  name: "Christian",
  idade: 25,
  profissao: "Programador",
};

const { name, ...resto } = objeto;
console.log(name);
console.log(resto);

// Propriedade computada
const id = 10;
const obj = {
  name: "Pedro",
  ["id" + id]: 10,
};

console.log(obj);
// Deep Matching

const objeto2 = {
  nome: "maria",
  idade: 25,
  profissao: "Programadora",
  id: 20,
};

const { nome, idade, profissao } = objeto2;
console.log(nome);
console.log(idade);
console.log(profissao);

// Atribuição via desestruturação
var [a = 1, b = 2, c = 3, d] = [4, 5];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

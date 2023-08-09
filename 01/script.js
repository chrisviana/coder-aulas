function exemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}

exemploVar();

function exemploLet() {
  if (true) {
    let x = 20;
    console.log("Let: ", x);
  }
}

exemploLet();

function exemploConst() {
  const x = 320;
  console.log("Const: ", x);
}

exemploConst();

const Pessoa = {
  name: "Christian",
  idade: 25,
};

const PessoaReferencia = Pessoa;
PessoaReferencia.idade = 45;

console.log("Pessoa: ", Pessoa);
console.log("Pessoa: ", PessoaReferencia);

const numero = 5;
const numeroCopia = numero;

numeroCopia = 10;

console.log("numero: ", numero);
console.log("numeroCopia: ", numeroCopia);

// Função tradicional para somar dois números
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); // Output: 5

// Mesma função usando Arrow Function
const somarArrow = (a, b) => a + b;

console.log(somarArrow(2, 3));

let meuPrimeiroObjt = {
  patas: 4,
  nome: "Thor",
  latir: function () {
    console.log("Au, au");
  },
};

console.log(meuPrimeiroObjt.nome);
meuPrimeiroObjt.latir();

let carro = {
  portas: 2,
  portaMalas: "200l",
  motor: "2.0",
};

let adicionais = {
  tetoSolar: true,
  arCondicionado: false,
};

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);

console.log(Object.keys(carro));

let marcas = ["nike", "pulma", "adidas"];

console.log(marcas);

let marcaRemovida = marcas.pop();

console.log(marcas);

marcas.push("marcaNova");

console.log(marcas);

let marcaRemovidaInicio = marcas.shift();

console.log(marcas);

marcas.unshift("novaMarcaInicio");

console.log(marcas);

let numeros = [0, 1, 2, 1, 0];

console.log(numeros.indexOf(1));
console.log(numeros.lastIndexOf(1));

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums.slice(4, 5));
console.log(nums.slice(4, 6));

console.log(nums.slice(2));

console.log(nums.slice(-2));

console.log(nums.slice(3, -2));

let nomes = ["Matheus", "Maria", "José", "Pedro", "João"];

nomes.forEach((nome) => {
  console.log("O nome é " + nome);
});

let carros = ["BMW", "Fiat", "VW", "Renault", "Audi"];

console.log(carros.includes("Fiat"));
console.log(carros.includes("Ford"));

console.log(carros.reverse());

let nums2 = [1, 2, 3, 45, 6, 7, 7];

console.log(nums2.reverse());

let nome = "\n   John \n ";

// Olá     Matheus , tudo bem?

let nomeCorrigido = nome.trim();

console.log(nome);
console.log(nomeCorrigido);

let sku = "34";

console.log(sku.padStart(6, "0"));

let sku2 = "7348";

console.log(sku2.padStart(6, "0"));

let frase = "Testando o método split";

console.log(frase.split(" "));

let palavras = frase.split(" ");

console.log(palavras);

let produtos = "Banana;Maçã;Jaca;Pera;Bola;Tapete";

console.log(produtos.split(';'));
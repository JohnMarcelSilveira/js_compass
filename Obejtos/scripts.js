const pessoa = {
  maos: 2,
};

const pessoaNova = Object.create(pessoa);

pessoaNova.maos = 3;

console.log(pessoaNova.maos);

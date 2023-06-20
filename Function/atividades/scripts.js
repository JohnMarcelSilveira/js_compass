function Hello() {
  console.log("Hello world!");
}

Hello();

function validarIdade(idade) {
  if (idade > 0) {
    console.log(`Você tem ${idade} anos`);
  }
}

validarIdade(30);

function positivarNumero(numero) {
  return numero * -1;
}

console.log(positivarNumero(-200));

function contarCaracteres(texto) {
  if (texto.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
}

contarCaracteres("123456789");

function imprimePares(numero) {
  for (let i = numero; i > 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

imprimePares(10);

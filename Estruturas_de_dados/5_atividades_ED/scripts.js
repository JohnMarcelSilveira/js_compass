let nome = "Nome";
let numero = 10;
let booleano = true;

console.log(typeof nome);
console.log(typeof numero);
console.log(typeof booleano);

let idade = 19;

if (idade >= 18) {
  console.log("Pode entrar!");
}

let base = 2;

console.log(Math.pow(2, base));
console.log(Math.pow(3, base));
console.log(Math.pow(18, base));

for (let i = 100; i >= 50; i--) {
  console.log(i);
}

for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`O número ${i} é par`);
  } else {
    console.log(`O número ${i} é impar`);
  }
}

// verificar se é primo

let primo = 40;
let ehPrimo = true;

for (let i = 2; i < primo; i++) {
  if (primo % i == 0) {
    ehPrimo = false;
    break;
  }
}
if (ehPrimo) {
  console.log(`${primo} é primo`);
} else {
  console.log(`${primo} não é primo`);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const semPares = [];
let j = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    semPares[j] = arr[i];
    j++;
  }
}

for (let i = 0; i < semPares.length; i++) {
  console.log(`${semPares[i]} `);
}

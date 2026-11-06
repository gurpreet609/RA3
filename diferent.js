//6.- Donats un number i un BigInt ( 1.234 i 5.678 ), calcula les quatre operacions: suma, resta, divisió i multiplicació i mostra els resultats amb un sol decimal.


let number = 1234;
let bigInt = 5678n;

console.log("Suma -> " + (number + Number(bigInt)).toFixed(1));
console.log("Resta -> " + (number - Number(bigInt)).toFixed(1));
console.log("Divisió -> " + (number / Number(bigInt)).toFixed(1));
console.log("Multiplicació -> " + (number * Number(bigInt)).toFixed(1));

//7.- Calcula la hipotenusa d’un triangle on les longituds dels catets sigui de 4.

const catetoA = 4;
const catetoB = 4;

const hipotenusa = Math.hypot(catetoA, catetoB);

console.log(hipotenusa);








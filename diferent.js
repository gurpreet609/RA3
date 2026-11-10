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

// 8.- Divideix un enter entre un String. Què retorna?

let enter = 89
let string =  "9"

console.log(enter / string)
//9.- Donat un String amb el teu nom i cognoms, extreu el teu primer cognom, i mostra’l per pantalla indicant el número de caràcters que té

let nom = "Gurpreet Singh Kaur"
console.log(nom.slice(8,14))

//10.- Donat un String amb el teu nom i cognoms, esborra el caràcter de la posició 6 i mostra el resultat per pantalla.

let nomComplet = "Gurpreet Singh Kaur";
let posicioAEsborrar = 6;

let resultat = nomComplet.slice(0, posicioAEsborrar) + nomComplet.slice(posicioAEsborrar + 1);

console.log(resultat);

// 11.- Declara una variable undefined i un null. Què passa si els sumes?

let variableUnde;
let variableNull = null;

let result = variableUnde + variableNull;
console.log(result);

//12.- Realitza una coerció explícita i implícita d’un booleà a String.

let esCert = true;

let explicit = String(esCert);

let implicit = esCert + "";

console.log(explicit, typeof explicit);
console.log(implicit, typeof implicit);

// 13.- Realitza una coerció explícita i implícita d’un String a booleà.

let text = "hola";

let exp = Boolean(text);
let imp = !!text;

// 14.- Realitza una coerció explícita i implícita d’un booleà a Number.

let b = true;

let var4 = Number(b);
let var5 = +b;




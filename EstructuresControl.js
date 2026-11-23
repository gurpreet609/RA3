// 1.- Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.
let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 100));
}

numeros.sort((a, b) => a - b);
console.log(numeros);

console.log("//////////////////////////////////////////////")

//2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior
let copiaNumeros = [...numeros];

console.log("Copia array -> " +  copiaNumeros)

console.log("//////////////////////////////////////////////")

//3.- Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).
let array1 = [3, 4, 5, 4];
let array2 = [3, 4, 5, 6];

let resultado = [];

for (let i = 0; i < array1.length; i++) {
    resultado.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
    let repetido = false;

    for (let j = 0; j < resultado.length; j++) {
        if (array2[i] == resultado[j]) {
            repetido = true;
        }
    }

    if (!repetido) {
        resultado.push(array2[i]);
    }
}

console.log(resultado);
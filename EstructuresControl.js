// 1.- Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.
let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 100));
}

numeros.sort((a, b) => a - b);
console.log(numeros);


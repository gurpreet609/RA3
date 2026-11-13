// function NomCognoms() {
//     console .log("Gurpreet Singh kaur")
// }
// NomCognoms();
// console.log("---------------" +
//             "---------------")

// function tipus(valor) {
//     console.log(typeof valor);
// }
// tipus(10);
//
//
// console.log("---------------" +
//             "---------------")

// function data() {
//      let fecha = "10/11/2026";
//      console.log(fecha);
//  }
// data();
//
// console.log("---------------" +
//     "---------------")

// // function prueba() {
// // //     let numero = 10;
// // // }

// // console.log(numero);
//
// function vocals(text) {
//     let cont = 0;
//     for(let i = 0; i < text.length; i++) {
//         if(text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") { cont++; } }
// //     return cont;
// // }

// console.log(vocals("Gurpreet Singh"));
//
// //6.- Passa 3 enters com a paràmetres (el tercer ha de tenir un valor per defecte) i retorni la suma dels tres.

// function Tres(a, b, c = 0) {
//     return a + b + c;
// }
// console.log(Tres(1, 2, 3));
// // 7.- Ha de cridar la funció de l’exercici 3 i retornar el resultat de la funció de l’exercici 6.

// function exercici7() {
//     data();
//     return Tres(1, 2, 3);
// }

// console.log(exercici7());


//
// function Trenta(a, b) {
//     return (a === 30 || b === 30 || (a + b) === 30);
// }

// console.log(Trenta(15, 15));
// console.log(Trenta(30, 5));
// console.log((10, 10));


// 9.- Repeteix l’exercici anterior però com a funció anònima.

// var comprovarTrentaAnonima = function(a, b) {
//     return (a === 30 || b === 30 || (a + b) === 30);
// };

// console.log(comprovarTrentaAnonima(15, 15));
// console.log(comprovarTrentaAnonima(10, 10));


// 10.- Passa't dos valors, retorni cert o falç si el valor i el tipus de dades són el mateix.

// const mateixValorTipus = (a, b) => a === b;

// console.log(mateixValorTipus(5, "5"));
// console.log(mateixValorTipus(5, 5));

// 11.- Passa’t un valor, realitzi l’arrel quadrada i retorni el valor amb dos decimals.

// const arrelQuadrada = (valor) => Math.sqrt(valor).toFixed(2);

// console.log(arrelQuadrada(9));
// console.log(arrelQuadrada(10));

// 12.- Passa’t un String, el retorni en minúscules.

// const Minuscules = (text) => text.toLowerCase();
//
// console.log(Minuscules("GURPREET SINGH KAUR"));


// 13.- Passa’t dos valors, retorni el que no és null.

// const noNull = (a, b) => (a !== null ? a : b);

// console.log(noNull(null, "Hola"));
// console.log(noNull(5, null));


// 14.- Definir dos funcions: posicio i dividir

// Funció 1 --> posicio
// function posicio(frase, paraula) {
//     let index = frase.indexOf(paraula);
//     return frase.length - index;
// }

// // Funció 2 --> dividir
// function dividir(frase, paraula) {
//     let index = frase.indexOf(paraula);
//     return frase.substring(index);
// }

// let unaFrase = "Hola com estas";
// let unaParaula = "com";

// console.log(posicio(unaFrase, unaParaula));
// console.log(dividir(unaFrase, unaParaula));

// 15.- Explica què fa la següent funció i fes-ne un cas de prova:  (x) => x + x + x
// const multiplicarTres = (x) => x + x + x;

// console.log(multiplicarTres(5));

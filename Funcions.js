// function NomCognoms() {
//     console .log("Gurpreet Singh kaur")
// }
// NomCognoms();
// console.log("---------------" +
//             "---------------")
//
// function tipus(valor) {
//     console.log(typeof valor);
// }
// tipus(10);
//
//
// console.log("---------------" +
//             "---------------")
//
// function data() {
//      let fecha = "10/11/2026";
//      console.log(fecha);
//  }
// data();
//
// console.log("---------------" +
//     "---------------")
//
// // function prueba() {
// // //     let numero = 10;
// // // }
// //
// // console.log(numero);
//
// function vocals(text) {
//     let cont = 0;
//     for(let i = 0; i < text.length; i++) {
//         if(text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") { cont++; } }
// //     return cont;
// // }
//
// console.log(vocals("Gurpreet Singh"));
//
// //6.- Passa 3 enters com a paràmetres (el tercer ha de tenir un valor per defecte) i retorni la suma dels tres.

// function Tres(a, b, c = 0) {
//     return a + b + c;
// }
// console.log(Tres(1, 2, 3));
// // 7.- Ha de cridar la funció de l’exercici 3 i retornar el resultat de la funció de l’exercici 6.
//
// function exercici7() {
//     data();
//     return Tres(1, 2, 3);
// }
//
// console.log(exercici7());



function Trenta(a, b) {
    return (a === 30 || b === 30 || (a + b) === 30);
}

console.log(Trenta(15, 15));
console.log(Trenta(30, 5));
console.log((10, 10));



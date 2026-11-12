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
//     let fecha = "10/11/2026";
//     console.log(fecha);
// }
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
//     return cont;
// // }
//
// console.log(vocals("Gurpreet Singh"));

//6.- Passa 3 enters com a paràmetres (el tercer ha de tenir un valor per defecte) i retorni la suma dels tres.

function Tres(a, b, c = 0) {
    return a + b + c;
}
console.log(Tres(1, 2, 3));

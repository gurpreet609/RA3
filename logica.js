
//1.- Decideix si un número és múltiple de 3 o de 7

function ex1 (x) {
    if(x % 3===0) {
        console.log("ES Multiple de 3")
    }
    else if (x % 7 ===0) {
        console.log("Es Multiple de 7")
    }
    else {
        console.log("No es multiple de 3 o 7")
    }
}
ex1(9)
ex1(28)

// 2.- Donats dos enters (x, y), dir quins d’ells estan en el rang de 10 a 50 inclosos. Utilitza un operador ternari.

function ex2 (a, b) {
    let aEX2 = a >= 10 && a <= 50;
    let bEX2 = b >=10 && b <=50;
    console.log("a = " + aEX2)
    console.log("b = " + bEX2)
}
ex2(15,60)
ex2(5,30)



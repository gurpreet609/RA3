
//1.- Decideix si un número és múltiple de 3 o de 7

function ex1 (x) {
    let tipus = "";

    if (x % 3 === 0) {
        tipus = tipus + "3";
    }
    if (x % 7 === 0) {
        tipus = tipus + "7";
    }

    switch (tipus) {
        case "3":
            console.log(x + " és múltiple de 3");
            break;
        case "7":
            console.log(x + " és múltiple de 7");
            break;
        case "37":
            console.log(x + " és múltiple de 3 i de 7");
            break;
        default:
            console.log(x + " no és múltiple de 3 ni de 7");
    }
}

ex1(21);
ex1(9);
ex1(14);
ex1(4);
ex1(9)
ex1(28)

console.log("/////////////////////////////////////")
// 2.- Donats dos enters (x, y), dir quins d’ells estan en el rang de 10 a 50 inclosos. Utilitza un operador ternari.

function ex2 (a, b) {
    let aEX2 = a >= 10 && a <= 50;
    let bEX2 = b >=10 && b <=50;
    console.log("a = " + aEX2)
    console.log("b = " + bEX2)
}
ex2(15,60)
ex2(5,30)

console.log("/////////////////////////////////////")

//3.- Donat un enter (x), mostra per pantalla la qualificació de l’examen:

function ex3 (nota) {
    if(nota >= 0 && nota <= 4.99) {
        console.log("Has suspès")
    }
    else if(nota >= 5 && nota <= 5.99) {
        console.log("Suficient")
    }
    else if(nota >= 6 && nota <= 6.99) {
        console.log("Bé")
    }
    else if(nota >=7 && nota <= 8.99) {
        console.log("Notable")
    }
    else if(nota >= 9 && nota <= 10) {
        console.log("Excel·lent")
    }
    else {
        console.log("Nota no valida")
    }

}
ex3(4.00)
ex3(5.5)
ex3(7.4)
ex3(9,75)
ex3(11,75)

console.log("/////////////////////////////////////")

//5.- Donat un enter (x), troba el màxim número n tal que 1+2+3+...+n <= x / Exemple: si x=15, n seria 5 ( 1 + 2 +3 +4 +5 = 15)

function ex5(x) {
    let n = 0;
    let suma = 0;
    while (suma + (n + 1) <= x) {
        n++;
        suma += n;
    }
    console.log("x=" + x + " ---> n=" + n + " (suma=" + suma + ")");
}

ex5(15)
console.log("/////////////////////////////////////")

//6.- Donat un String (x), sumar els caràcters que siguin números.

function ex6(x) {
    let suma = 0;
    for (let char of x) {
        if (!isNaN(char) && char !== " ") {
            suma += Number(char);
        }
    }
    console.log("Suma: " + suma);
}

ex6("A1b2C3");

console.log("/////////////////////////////////////")

//7.- Donat tres enters, ordena de major a menor.

function ex7(enter1, enter2 , enter3) {
    let aux;
    let enters = [enter1,enter2,enter3]
    for (let i = 0; i < enters.length; i++){
        for (let j = 0; j < enters.length - 1 - i; j++){
            if (enters[j] < enters[j+1]){
                aux = enters[j]
                enters[j] = enters[j+1]
                enters[j+1] = aux
            }
        }
    }
    console.log(enters)

}

ex7(1,4,9)

console.log("/////////////////////////////////////")

// 8.- Donat un enter (x), fes un bucle que digui des del 0 a x, quins són parells i quins senars.

    function ex8(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i + " es parell");
        } else
            console.log(i + " es imparell");
        }
}


ex8(9);

function ex9() {
    let numero = "";

    for(let i = 1; i <6; i++) {
        if(i ===1 ){
            numero="*"
        }
        else {
            numero = numero + "*";
        }
        console.log(numero)

    }
}

console.log("/////////////////////////////////////")

ex9()

function ex10() {
    let suma = 0;
    let i = 1;
    do {
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
        i++;
    } while (i <= 1000);
    console.log("La suma total es:", suma);
}
ex10()


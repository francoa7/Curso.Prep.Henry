// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
    // un par clave-valor en forma de matriz.
    //Ejemplo:
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    var array = [];
    for (const key in objeto) {
        var elemento = [];
        elemento.push(key);
        elemento.push(objeto[key]);
        array.push(elemento);
    }
    return array;
}

function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    //Escribe tu código aquí
    var object = {};
    for (let i = 0; i < string.length; i++) {
        var counter = 0;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j]) {
                counter++;
            }
        }
        object[string[i]] = counter;
    }
    return object;
}

function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    var newString = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            newString += s[i];
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            newString += s[i];
        }
    }
    return newString;
}

function asAmirror(str) {
    //La función recibe una frase.
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    var phraseArray = str.split(" ");
    var reverseArray = [];
    for (let i = 0; i < phraseArray.length; i++) {
        var wordArray = ("" + phraseArray[i]).split("");
        reverseArray.push(wordArray.reverse());
    }
    var array = [];
    for (let i = 0; i < reverseArray.length; i++) {
        array.push(reverseArray[i].join(""));
    }
    var reversePhrase = array.join(" ");
    return reversePhrase;
}

function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    var digitArray = ("" + numero).split("");
    digitArray.reverse();
    var number = parseInt(digitArray.join(""));
    if (number === numero) {
        return "Es capicua";
    } else return "No es capicua";
}

function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    var cutA = cadena.replace("a", "");
    var cutB = cutA.replace("b", "");
    var cutC = cutB.replace("c", "");
    return cutC;
}

function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    arr.sort(function(a, b) {
        if (a.length < b.length) {
            return -1;
        }
        if (b.length < a.length) {
            return 1;
        }
        return 0;
    });
    return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí
    return arreglo1.filter((v) => arreglo2.includes(v));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};
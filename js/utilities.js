//Funzione per trovare un elemento in un array

const arraySpesa = ["carne","pesce","verdura","latte"];

//deve trovare qualcosa in un qualsiasi array


function trovaInArray(listaDaAnalizzare, elementoDaCercare){

let indicePosizioneElemento = -1;

    for(let i = 0; i< listaDaAnalizzare.length ; i++){
    

        if(listaDaAnalizzare[i] === elementoDaCercare){
            indicePosizioneElemento = i;
        }
    }
    return indicePosizioneElemento;
}

console.log(trovaInArray(arraySpesa, "latte"));


console.log("-----------------Secondo esercizio----------------");

//Funzione per trovare se un numero è pari

function isPari(numero){
    const result = numero % 2 === 0;

    return result;
}
console.log(isPari(2));
console.log(isPari(4));
console.log(isPari(19));

console.log("--------------terzo esercizio----------------");

function isDispari (number){

    const risultato = number %2 !== 0;

    return risultato;
}
console.log(isDispari(77));
console.log(isDispari(69));
console.log(isDispari(1111646464));
console.log(isDispari(423542367));
console.log(isDispari(67235));
console.log(isDispari(33));

console.log ("------------quarto esercizio------------")
//Generare un numero random tra un numero minimo e un numero massimo

function generateRandomNumbers(min, max){
    // questa qui è la nosta variabile per avere un min e un max
    const result = Math.floor(Math.random() * (max-min+1))+min;
    return result;
}
console.log(generateRandomNumbers(1,10));
console.log(generateRandomNumbers(1,10));
console.log(generateRandomNumbers(1,10));
console.log(generateRandomNumbers(50,90));
console.log(generateRandomNumbers(50,90));
console.log(generateRandomNumbers(50,90));
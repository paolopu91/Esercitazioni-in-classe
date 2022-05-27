
//Scritte in questo modo sono tutte variabili globali
let saluto = "ciao";
const giorniSettimana =["lunedì"]
var testoIniziale = "Ciao"


// in linea generale quello che è scritto dentro una graffa rimane dentro la graffa

if(true){
    // scritto in questo modo sono blockscope
    //Quindi non saranno visibili fuori dal blocco
    let stato = "attivo";
    const piGreco = "3.14";

    //Questa perchè è var, sarà visibile anche fuori dal blocco
    var pippo = "pippo";
}

function demo (num1,num2){

// function scope
// nulla presente in questa funzione sarà visibile fuori
//neanche gli attributi num1 e num2

 let somma =num1 + num2;
 const moltiplicazione = num1 * num2;
 var sottrazione = num1 - num2;
}
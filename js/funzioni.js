/* 
In questo file andremo a vedere cosa sono le funzioni e come funzionano
*/

// come si scrivono le funzioni??
function + nomeFunzione (){
    //qui inseriremo il blocco di codice che vogliamo la nostra
    // funzione esagua
}

// cosa possiamo scrivere dentro una funzione?
// possiamo scrivere dentro una funzione qualunque istruzione che può essere scritta nel codice generale
function sommaNumeri(num1,num2){
    alert (num1 + num2)
}

// in che modo le nostre funzioni restituiscono un risultato?
// possiamo scrivere in questo modo
function sommaNumeri (num1,num2){
    const risultato = num1 + num2;

    // qui andiamo a dichiarare il valore che vogliamo ottenere dal nostro risultato
    return risultato;

    // ATTENZIONE //

    /* Va però ricordato che se immettiamo il return, sotto non potremmo
        piu' mettere codice, in quanto il return fa terminare la nostra funzione
    */
}

// come usiamo una funzione?
// Quest'ultima va invocata, dove vogliamo che avvenga 
// per invocarla, basta usare il nome della nostra funzione
// Nell'esempio sopra dovremo usare sommaNumeri


// se la funzione restituisce un valore (che sia numerico o stringa)
// dobbiamo conservarlo in una variabile
console.log("Esempio")

function sommaNumeri(num1,num2){
    const risultato = num1+num2;
    return risultato;
}

const somma = sommaNumeri (49,2);
console.log(somma); // Questo uscirà 51
console.log(risultato); // questo uscirà undefined, perchè?
/* 
In questo file andremo a vedere cosa sono le funzioni e come funzionano
*/

// come si scrivono le funzioni??
// function + nomeFunzione (){
    //qui inseriremo il blocco di codice che vogliamo la nostra
    // funzione esagua
// }

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
// console.log(risultato); // questo uscirà undefined, perchè è fuori dalla nostra funzione
// quindi è dentro lo scope della nostra funzione



console.log("-----------------------------------------------")

// Esistono anche le funzioni così dette anonime
// ad esempio:
// prendiamo prima tramite un querySelectors il nostro button
const myButton = document.getElementById('myButton') 

// la funzione anonima la possiamo richiamare anche con una variabile, però è meglio usare il metodo nell'esempio

myButton.onclick = function () {
    alert("Hello")
};

let nome = 'Luca'
// scrivendo così diciamo che la funzione accetta un parametro, in questo caso nome
function hello(nome){
    console.log('Hello ' , nome)
}

function ciao (){
    let cognome = 'Rossi';
    console.log ('Ciao: ' , cognome);
    hello(nome);
}
ciao()

console.log("-----------------------")

// generare la tabella con una function
function generaTabella(){
    generaHeader();
    generaMain();
    generaFooter();
    console.log('Tabella generata')
}

function generaHeader(){
 console.log('header generato')
}
function generaMain(){
console.log ('Main generato')
}
function generaFooter(){
console.log ('footer generato')
}

generaTabella()


console.log("----------------------")

// le funzioni sono soggette ad hoisting!
function stampaMessaggioBenvenuto (){
    console.log("Benvenuto Utente");
}
// non si possono avere due funzioni uguali

// invochiamo così la nostra funzione
// se non lo facciamo non uscirà nulla nel nostro console.log
stampaMessaggioBenvenuto();

//_______________________________________________________
//Funzioni con argomenti
//__________________________________________________________


function sommaNumeri(num1, num2){
console.log(num1 + num2);
}
//        (num1 , num2)
sommaNumeri(45, 12);
sommaNumeri(32 ,78);
sommaNumeri(10, 1);

//____________________________________
//funzione con return
//____________________________________

------------------------------------------------------
// questo è il metodo 1
// const listaNumeri = [];

// function generaNumeroRandom(){
//   const nuovoNumero = Math.floor(math.random() * 10);
//   listaNumeri.push(nuovoNumero)
// }
// generaNumeroRandom()

----------------------------------------------------

----------------------------------------------------
// metodo numero 2
const listaNumeri = [];

function generaNumeroRandom(){
  const nuovoNumero = Math.floor(math.random() * 10);
return nuovoNumero;
}
// così non leggo il valore che restituisce la funzione
//lo sto solo invocando
generaNumeroRandom()

// leggo e salvo in una variabile il valore della mia funzione
const numeroGenerato = generaNumeroRandom();

//in questo modo sto leggendo la funzione a schermo.
console.log(generaNumeroRandom())

//posso pushare direttamente dentro l'array il valore della mia funzione
listaNumeri.push(generaNumeroRandom());

// generare numeri random con i cicli e la funzione
for (let i= 0; i< 100 ; i++){
    listaNumeri.push(generaNumeroRandom);
}

console.log(listaNumeri);

----------------------------------------------------
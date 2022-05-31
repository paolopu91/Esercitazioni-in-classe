/*
//TIMING FUNCTION COSA SONO E COME SI SCRIVONO

NON ABBIAMO UN TEMPO STANDARD IN CUI VA ESEGUITA QUESTA FUNZIONE, POSSIMAO METTERE I MILLESECONDI CHE VOGLIAMO!

NON HANNO UNA POSIZIONE SU DOVE DEVONO ESSERE SCRITTE NEL JS

//COME SI SCRIVE:
setTimeout(nomeFunzione,tempoDaAspettare)
// nome funzione(nome della funzione, tempo da aspettare)
//il tempo va indicato in millisecondi 3000millesecondi = 3 secondi

ESISTE ANCHE IL setInterval
come si scrive?
setInterval(nomeFunzione, tempoPerOgniRipetizione);
cosa cambia?
questa viene invocata ogni x tempo da noi indicato.

come si ferma?
Usando il clearInterval (indicare qui il nome della variabile) che servirà a fermare il nostro setInterval, che altrimenti
si ripeterebbe all'infinito.

quando lavoriamo con setInterval dobbiamo usarlo dentro una variabile.
Perchè? perchè riusciamo poi fuori dalla funzione richiamare il clearInterval e annullare così la ripetizione dell'evento.


fino ad ora noi abbiamo sempre lavorato in modo sincrono.


Quando invece parliamo di programmmazione asincrona, parliamo di un'azione
che avrà luogo in futuro.



ESERCIZI DI PRATICA QUI SOTTO
*/

//Timer che indica tra quanto arriva la pausa
let secondiRimanenti = 50;

//per vedere un timer che va al contrario, usiamo un setInterval
//Questa funzione deve avere 2 argomenti, funzione ad intervalli di tempo, tempo da aspettare prima che la funzione si avveri
const timerSecondi = setInterval(function(){
console.log(secondiRimanenti);

secondiRimanenti--;
}, 1000)

console.log("variabile timerSecondi =", timerSecondi);

// per bloccare il timer usaimo il clearInterval
//quando bloccarlo? Non subito ma dopo 5 secondi

//richiamiamo la funzione setTimeout per dichiarare il nostro clearInterval e bloccare il codice dopo 5 secondi.
setTimeout(function(){
    clearInterval(timerSecondi);
}, 5000);

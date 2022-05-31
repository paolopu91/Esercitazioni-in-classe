/*
//TIMING FUNCTION COSA SONO E COME SI SCRIVONO

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











*/
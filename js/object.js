// < > minore e maggiore
//`` backtick


// Esempi oggetti in javascript

const palla = {
    colore :"verde",
    tipo : "da tennis",
    oggetto : 5,
    materiali : ["plastica","tela"],
    somma: function(a, b){
        return a + b;
    }
};
console.log(palla);

//cambiamo il diametro della nostra palla
palla.diametro = 6;
// leggo il diametro della palla
console.log(palla.diametro);

// assegniamo un prezzo alla nostra palla
palla.prezzo = 10;
// leggo il prezzo della palla
console.log(palla.prezzo);

// per richiamare la mia funzione farò in questo modo
palla.somma();

// se voglio aggiungere elementi dentro materiali, che è un array si fa così:
palla.materiali.push("carta");

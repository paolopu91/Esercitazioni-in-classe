
// 1 step
const studente = {
    nome : "fabio",
    cognome : "valeri",
    età : 17,
}

//2 step
//le chiavi di un oggetto non possono essere ordinate!!!
for(let key in studente) {
    // ad ogni ciclo key avrà un valore diverso
    //al primo key = nome
    //al secondo key = cognome
    //al terzo key = età

    console.log(key, studente[key]);
}

//step 3

const containerStudenti = [
    {
        nome : "paolo",
        cognome : "Pugliese",
        eta : 30,
    },
    {
        nome: "silvio",
        cognome: "fumagalli",
        eta : 28,
    },
    {
        nome: "valerio",
        cognome: "massi",
        eta : 30, 
    }
];
console.table(containerStudenti)

// step 4

for (let i = 0; i<containerStudenti.length; i++){
    const studente = containerStudenti[i];

    console.log(studente.nome , studente.cognome , studente.eta);
}

//step 5

const nomeNuovoStudente = prompt ("Inserisci il nome");
const cognomeNuovoStudente= prompt("inserisci il cognome");
const etaNuovoStudente = prompt ("inserisci eta");

// creare un nuovo oggetto per il/la nuovo/a studente
// primo metodo
//posso aggiungere le chiavi e i valori da subito
// const nuovoStudente = {
//     nome: nomeNuovoStudente,
//     cognome: cognomeNuovoStudente,
//     eta: etaNuovoStudente,
// };

// secondo metodo
// posso creare il nuovo studente come oggetto vuoto
const NuovoStudente = {};

// e poi assegno i valori uno ad uno
NuovoStudente.nome = nomeNuovoStudente;
NuovoStudente.cognome = cognomeNuovoStudente;
NuovoStudente.eta = +etaNuovoStudente;

console.table(NuovoStudente);

containerStudenti.push(NuovoStudente);
console.log(containerStudenti);

//step 6

const classi = [
    {
        nome : "1A",
        studenti: [
            {
                nome : "Mario",
                cognome : "rossi",
                eta : 15,
            },
            {
                nome : "paolo",
                cognome : "Pugliese",
                eta : 14,
            },
            {
                nome: "silvio",
                cognome: "fumagalli",
                eta : 16,
            },
        ],
    },
    {
        nome : "1B",
        studenti : [
            {
                nome: "silvio",
                cognome: "fumagalli",
                eta : 15,
            },
            {
                nome: "silvio",
                cognome: "fumagalli",
                eta : 15,
            },
            {
                nome: "silvio",
                cognome: "fumagalli",
                eta : 15,
            },
        ]
    },
    {
        nome: "4C",
        studenti:[
            {
                nome: "silvio",
                cognome: "fumagalli",
                eta : 18,
            },
            {
                nome: "silvio",
                cognome: "fumagalli",
                eta : 18,
            },
            {
                nome: "silvio",
                cognome: "fumagalli",
                eta : 18,
            },
        ],
    }
];

classi[0].studenti[0].indirizzo.via
console.table(classi);



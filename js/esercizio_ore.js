
/*
Esercizio su come calcolare il tempo
*/

// let numeroDiSecondi = prompt("Quanti secondi vuoi convertire?");
// let ore = Math.floor(numeroDiSecondi / 3600);
// let restoMinuti = numeroDiSecondi % 3600;
// let minuti = Math.floor(restoMinuti / 60);
// let secondi = restoMinuti % 60;
// alert(ore + " ore, " + minuti + " minuti e " + secondi + " secondi");


console.log("-----------------------");

// Esercizio simile al tempo, solo che qui calcoleremo un anno

let annoCivile = prompt("In quanto vuoi scomporre il tuo anno?");
const numeroMinuti = 525600;
let ore = Math.floor(numeroMinuti / 8760 );
let giorni = Math.floor(ore / 365);
let settimane = Math.floor (giorni / 52,14);
let mese = Math.floor(settimane / 12);

alert(ore +" ore ," + giorni + " giorni ," + settimane+ " settimane e" + mese+ " mesi.")

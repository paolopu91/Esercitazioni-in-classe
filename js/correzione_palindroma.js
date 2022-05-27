const parola = "asso";

function revertWord(parolaDaInvertire){
let parolaAlContrario = "";
for(let i = parolaDaInvertire.length, i>=0 ; i--){
    const letteraCorrente = parolaDaInvertire[i];
    
    parolaAlContrario += letteraCorrente
}
return parolaAlContrario
}

function isPalindroma(parolaDaInvertire){
    const parolaDaInvertita = revertWord(parolaDaControllare);

return parolaDaControllare === parolaInvertita

}

console.log("--------guardare registrazione 1 di florian per questa correzione---------");
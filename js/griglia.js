//Variabile globale, utilizabile in tutto il mio foglio js
const gridContainer = document.querySelector(".grid-container");


//creare una griglia 8x8 con delle celle grandi 50px x 50px
//Serve un ciclo per creare le celle(8*8 oppure 3*3 oppure 9*9)
    //creiamo un div per ogni singola cella
    //appendo la cella al suo contenitore

    //creiamo una funzione per numeri random
  
    // quanto voglio che sia grande la griglia? inteso in numero di quadrati che può contenere
function createGrid (xCells , yCells){
    const cellsNumber = xCells * yCells;

    console.log(cellsNumber)
    
    //questa formula va messa fuori il nostro ciclo for perchè sennò ad ogni ciclo si ripete
    gridContainer.style.width = `calc(50px * ${xCells})`


    // creo il mio ciclo per far si che si vedano le mie celle
    for (let i = 0 ; i<cellsNumber; i++){

        // Creo un div usando createElement e non innerHTML
        const celle = document.createElement("div");
        //aggiungo le classi alle mie celle che ho inserito in css
        celle.classList.add("celle");
        //append aggiunge un elemento virtuale ad un elemento che abbiamo creato
        gridContainer.append(celle);
    }
}
//richiamo esternamente alla mia funzione per mostrare le celle in HTML
createGrid(10, 10);
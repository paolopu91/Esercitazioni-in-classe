


// come spezzettare il codice html e inserirlo tramite js con delle funzioni
// ``, >, <,

function getHeader (profile, author, time){

return ` qui all'interno metteremo tutto il nostro html`

}

function getText (text){
    return ` qui all'interno metteremo tutto il nostro html
    per inserire il nostro argomento ${text} dove è necessario`
}

function getImageTemplate (postText){
    return ` qui all'interno metteremo tutto il nostro html
    per inserire il nostro argomento ${postText} dove è necessario`
}
function postImage (postImage,postTextImage){
    return ` qui all'interno metteremo tutto il nostro html
    per inserire il nostro argomento ${postText} dove è necessario
    possiamo anche inserire un secondo argomento,${postTextImage} `
}
function getFooter (){
    return ` qui all'interno metteremo tutto il nostro html
    per inserire il nostro argomento ${postText} dove è necessario`
}


/**
 * qui va inserito il commento di cosa fa
 * 
 * @param {}
 * @param {}
 * @param {}
 */


// per stampare dobbiamo prendere il nostro html container con una variabile / costante
//const containerHeader = document.querySelector(".containerFooter");
document.getElementById("posts-container")
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const randomUser = (Math.floor(Math.random() * 6) + 1);
console.log("Numero random generato del giocatore:", randomUser);

const randomPc = (Math.floor(Math.random() * 6) + 1);
console.log("Numero random generato del giocatore:", randomPc);

let result = "";

if (randomUser > randomPc) {
    console.log("Hai vinto!");
    result = "Hai vinto!";
} else {
    console.log("Hai perso!");
    result = "Hai perso!";
}

document.getElementById("message").innerHTML = result;


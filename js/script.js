// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

let positive = "luca.pessione@gmail.com";
let positiveAccess = "Bentornato Luca!";
let negativeAccess = "Non sei registrato nei nostri sistemi!";

// Chiediamo all'utente la sua email
const userEmail = prompt("Inserisci la tua email!");

console.log("La tua email è:", userEmail);

// Controlliamo che la mail inserita sia tra quelle che può accedere

// Stampiamo un messaggio dell'esito del controllo
if (userEmail === positive) {
    document.getElementById("message").innerHTML = positiveAccess;
    console.log(positiveAccess);
} else {
    document.getElementById("message").innerHTML = negativeAccess;
    console.log(negativeAccess);
}

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creo lista iscritti
const subscribers = ["luca.pessione@gmail.com", "pincopallo@gmail.com", "francesco.cogliati23@gmail.com", "martacagliani18@gmail.com"];

console.log(`Email personale: ${subscribers[0]}`);

// creo variabili di avvenuto o non avvenuto accesso
let positiveAccess = "Bentornato Luca! <br> E' un piacere rivederti.";
let negativeAccess = "Qualcosa è andato storto... <br> Non sei registrato nei nostri sistemi!";

// Chiediamo all'utente la sua email
const userEmail = prompt("Inserisci la tua email!");

console.log("La tua email è:", userEmail);

// Controlliamo che la mail inserita sia tra quelle che può accedere
for (let i = 0; i <= subscribers.length; i++) {
    console.log(subscribers[i]);
}

// Stampiamo un messaggio dell'esito del controllo
if (userEmail === subscribers[i]) {
    document.getElementById("message").innerHTML = positiveAccess;
} else {
    document.getElementById("message").innerHTML = negativeAccess;
}

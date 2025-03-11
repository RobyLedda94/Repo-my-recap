console.log('debug');

// --------------------------------------------------


// Gioco dei dadi

// Definizione dell funzioni

// Funzione che genera de numeri random da 1 a 6 per l'utente
function humanRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

// Funzione che genera dei numeri random da 1 a 6 per il pc
function pcRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

// Funzione per stabilire le condizioni di vittoria pareggio o sconfitta
function determineWinner(human, pc) {
    // Condizione per stabilire la logica del gioco (vittoria, sconfitta, pareggio)

    // Se il numero utente è maggiore del numero pc (vittoria utente)
    if (human > pc) {
        // Mostro in console il risultato 
        console.log(`Vince l'utente con il numero ${human}, contro il pc con il numero ${pc}`);

    } else if (human < pc) { // Altrimenti se il numero utente è minore del numero pc (vittoria pc)
        // Mostro in console il risultato
        console.log(`Vince il pc con il numero ${pc}, contro l'utente con il numero ${human}`);

    } else { // Se le precedenti condizioni sono false (pareggio)
        // Mostro il risultato in console
        console.log(`Pareggio !! Numero utente : ${human}, Numero pc : ${pc}`);
    };
};


// Definizione delle variabili

// Recupero i bottoni dal dom
let gameDice_start_btn = document.getElementById('start-btn');
let gameDice_reset_btn = document.getElementById('reset-btn');

// Recupero gli elementi per la visualizazzione 

let human_icon = document.getElementById('human-icon');
let pc_icon = document.getElementById('pc-icon');
let gameDice_result = document.getElementById('game-result');




// Gestione degli eventi per i bottoni

// Start
gameDice_start_btn.addEventListener('click', function () {
    // Al click del bottone, richiamo le funzioni che generano dei numeri randomici per l'utente e per il pc
    let humanNumber = humanRandomNumber();
    let pcNumber = pcRandomNumber();

    // Richiamo la funzione che determina il vincitore o pareggio
    determineWinner(humanNumber, pcNumber);

});

// Reset
gameDice_reset_btn.addEventListener('click', function () {
    console.log(this);
});

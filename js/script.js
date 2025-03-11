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
    // Rimuovo le classi al messaggio per la visualizazzione (evito conflitti in base alle condizioni)
    gameDice_result.classList.remove('txt-green', 'txt-red', 'txt-cyan');

    // Condizione per stabilire la logica del gioco (vittoria, sconfitta, pareggio)

    // Se il numero utente è maggiore del numero pc (vittoria utente)
    if (human > pc) {
        // Inietto dinamuicamete il contenuto all'elemento che mostra il messaggio a video
        gameDice_result.innerText = `Vince l'utente con il numero ${human}, contro il pc con il numero ${pc}`;
        // Proprietà classList per modificare la classe in base alla condizione 
        gameDice_result.classList.add('txt-green');

    } else if (human < pc) { // Altrimenti se il numero utente è minore del numero pc (vittoria pc)
        // Stesso approccio per la consizione di sconfitta
        gameDice_result.innerText = `Vince il pc con il numero ${pc}, contro l'utente con il numero ${human}`;

        gameDice_result.classList.add('txt-red');

    } else { // Se le precedenti condizioni sono false (pareggio)

        gameDice_result.innerText = `Pareggio !! Numero utente : ${human}, Numero pc : ${pc}`;

        gameDice_result.classList.add('txt-cyan');
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

    // Reset delle classi agli elementi che mostreranno le icone
    human_icon.className = 'fas fa-2xl';
    pc_icon.className = 'fas fa-2xl';

    // Utilizzo dello switch per assegnare le classi in base al numero 
    switch (humanNumber) {
        case 1:
            human_icon.classList.add('fa-dice-one');
            break;
        case 2:
            human_icon.classList.add('fa-dice-two');
            break;
        case 3:
            human_icon.classList.add('fa-dice-three');
            break;
        case 4:
            human_icon.classList.add('fa-dice-four');
            break;
        case 5:
            human_icon.classList.add('fa-dice-five');
            break;
        case 6:
            human_icon.classList.add('fa-dice-six');
            break;
    };

    switch (pcNumber) {
        case 1:
            pc_icon.classList.add('fa-dice-one');
            break;
        case 2:
            pc_icon.classList.add('fa-dice-two');
            break;
        case 3:
            pc_icon.classList.add('fa-dice-three');
            break;
        case 4:
            pc_icon.classList.add('fa-dice-four');
            break;
        case 5:
            pc_icon.classList.add('fa-dice-five');
            break;
        case 6:
            pc_icon.classList.add('fa-dice-six');
            break;
    };

});

// Reset
gameDice_reset_btn.addEventListener('click', function () {
    // Click del bottone che resetta svuoto il contenuto del messaggio
    gameDice_result.innerText = '';

    // Resetto le classi delle icone
    human_icon.className = 'fas fa-2xl';
    pc_icon.className = 'fas fa-2xl';


});

// ----------------------------------------------------------------------------------------------------------------------

// Esercizio Game List

// Definizione delle Funzioni

// Definizione delle variabili

// Array (omogeneo) che contiene la lista dei videogiochi
const array_gameList = ['Space Marine 2', 'Metal Gear Solid Snake', 'Fallout 4', 'Spiderman 2', 'Gran Turismo 3', 'Call of Duty'];


// Variabili per la visulizazzione
let ul_gameList = document.getElementById('game-list');
let msg_gameList = document.getElementById('msg-gamelist');




// Bottoni
let show_btn = document.getElementById('show-btn');
let search_btn = document.getElementById('search-btn');
let add_btn = document.getElementById('add-btn');
let resetGameList_btn = document.getElementById('resetgamelist-btn');


// Gestione degli eventi

// Show
show_btn.addEventListener('click', function () {
    console.log(this);
});

// Search
search_btn.addEventListener('click', function () {
    console.log(this);
});

// Add
add_btn.addEventListener('click', function () {
    console.log(this);
});

// Reset
resetGameList_btn.addEventListener('click', function () {
    console.log(this);
});



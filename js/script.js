console.log('debug');

// --------------------------------------------------


// Gioco dei dadi

// Definizione dell funzioni


// Definizione delle variabili

// Recupero i bottoni dal dom
let gameDice_start_btn = document.getElementById('start-btn');
let gameDice_reset_btn = document.getElementById('reset-btn');

// Recupero gli elementi per la visualizazzione 

let human_icon = document.getElementById('human-icon');
let pc_icon = document.getElementById('pc-icon');
let gameDice_result = document.getElementById('game-result');

console.log(human_icon, pc_icon, gameDice_result);


// Gestione degli eventi per i bottoni

// Start
gameDice_start_btn.addEventListener('click', function () {
    console.log(this);
});

// Reset
gameDice_reset_btn.addEventListener('click', function () {
    console.log(this);
});

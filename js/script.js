

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

// Funzione che crea un list item
function createListItem() {
    // Creo un elemento (div)
    let li_gameList = document.createElement('div');

    // Proprietà class list per assegnare la classe ai list items
    li_gameList.classList.add('py-2');

    // Restituisco l'elemento creato
    return li_gameList;
};

// Funzione che gestisce la logica di visualizazzione
function showGameList(element) {
    // Svuoto preventivamente la lista per evitare di ricrearla
    ul_gameList.innerHTML = '';

    // Svuoto il messaggio quando mostro la lista
    msg_gameList.innerText = '';

    // Ciclo for sull'array dei videogiochi
    for (let i = 0; i < element.length; i++) {

        // Richiamo la funzione che crea un list items all'interno del ciclo for
        let listItems = createListItem();

        // Inietto il contenuto agli elementi creati (elemento i-esimo dell'array game list)
        listItems.innerText = element[i];

        // Appedo i list_items creati all'elemento contenitore per la visualizazzione
        ul_gameList.appendChild(listItems);
        // Proprietà class list per assegnare la classe alla ul
        ul_gameList.classList.add('p-0');
    };
};

// Definizione della funzione che gestisce la logica della variabile flag
function variableFlag(input, msg) {
    // Varibile flag settata a false (parto col presupposto che non ho tovato ancora nulla perche devo prima cercare all'interno dell'array)
    let found_game = false;

    // Rimuovo le classi assegnate al messaggio per evitare conflitti
    msg_gameList.classList.remove('txt-yellow', 'txt-green');

    // Ciclo l'array per scorrere tutti i suoi elementi (cerco)
    for (let i = 0; i < array_gameList.length; i++) {
        // Condizione per stabilre la corrispondenza tra il valore inserito e l'elemento i-esimo dell'array
        if (input.toLowerCase() === array_gameList[i].toLowerCase()) {
            // Se corrispondono setto la variabile flag a true (elemento trovato)
            found_game = true;
        };
    };


    // Condizione di controllo sulla variabile flag
    if (found_game === true) {
        // Inietto il contenuto al messaggio in base alla condizione 
        msg.innerText = `Il videogioco ${input}, è presente nella lista !!`;
        // Proprietà classList per assegnare delle classi al messaggio
        msg.classList.add('txt-yellow');
    } else {
        // Inietto il contenuto al messaggio in base alla condizione 
        msg.innerText = `Il videgioco ${input}, non è presente nella lista aggiungilo !!`;
        // Proprietà classList per assegnare delle classi al messaggio
        msg.classList.add('txt-green');
    };
};

// Definizione della funzione che aggiunge un nuovo videogioco all'array
function addNewGame(input, msg) {
    // Varibile flag settata a false (parto col presupposto che non ho tovato ancora nulla perche devo prima cercare all'interno dell'array)
    let found_game = false;

    // Rimuovo le classi assegnate al messaggio per evitare conflitti
    msg_gameList.classList.remove('txt-yellow', 'txt-green');

    // Ciclo l'array per scorrere tutti i suoi elementi (cerco)
    for (let i = 0; i < array_gameList.length; i++) {
        // Condizione per stabilre la corrispondenza tra il valore inserito e l'elemento i-esimo dell'array
        if (input.toLowerCase() === array_gameList[i].toLowerCase()) {
            // Se corrispondono setto la variabile flag a true (elemento trovato)
            found_game = true;
        };
    };


    // Condizione di controllo sulla variabile flag
    if (found_game === true) {
        // Inietto il contenuto al messaggio in base alla condizione 
        msg.innerText = `Il videogioco ${input}, è presente nella lista !!`;
        // Proprietà classList per assegnare delle classi al messaggio
        msg.classList.add('txt-yellow');
    } else {
        // Faccio il push (aggiungo un nuovo elemento in coda all'array) del nuovo valore
        array_gameList.push(input);
        // Inietto il contenuto al messaggio in base alla condizione 
        msg.innerText = `Il videgioco ${input}, è stato aggiunto con successo !!`;
        // Proprietà classList per assegnare delle classi al messaggio
        msg.classList.add('txt-green');
    };
};

// Definizione della funzione che resetta la lista
function resetGameList(resetArray) {

    // Svuoto l'array
    resetArray.length = 0;
    // Svuoto il contenuto della lista
    ul_gameList.innerText = '';

    // Svuoto il messaggio
    msg_gameList.innerText = '';
};

// Definizione per il controllo sul dato inserito dall'utente
function validateInput(input, msg) {
    if (input === '') {
        msg.innerText = 'Prego inserire un dato valido';
        msg.classList.add('txt-red');
        return false;
    };
    return true;
}

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
    // Richiamo la funzione che mostra il contenuto a video
    showGameList(array_gameList);
});

// Search
search_btn.addEventListener('click', function () {
    // Recupero l'elemento di input e catturo il valore inserito dall'utente
    let input_gameList = document.getElementById('input-gamelist').value.toLowerCase();

    // Richiamo la funzione per il controllo del dato
    if (!validateInput(input_gameList, msg_gameList)) {
        return;
    }

    // Richiamo la funzione che gestisce la logica del filtraggio
    variableFlag(input_gameList, msg_gameList);

});

// Add
add_btn.addEventListener('click', function () {
    // Recupero il campo di input e catturo il suo valore
    let input_gameList = document.getElementById('input-gamelist').value.toLowerCase();

    // Richiamo la funzione per il controllo del dato
    if (!validateInput(input_gameList, msg_gameList)) {
        return;
    }

    // Richiamo la funzione che gestisce la logica per l'aggiunta di un nuovo elemento
    addNewGame(input_gameList, msg_gameList);

});

// Reset
resetGameList_btn.addEventListener('click', function () {
    // Richiamo ls funzione che gestisce il reset
    resetGameList(array_gameList);
});


// -------------------------------------------------------------------------------------------------------------

// Esercizio Palindroma


// Definizione delle funzioni

// Funzione per verificare che la parola sia palindroma o meno
function checkPalindroma(word) {
    // Assegno il valore recuperato dall'input ad una variabile che dovrà (splittare i caratteri, invertire e riunire)
    let reverseWord = word.split('').reverse().join('');

    // Rimuovo preventivamente le classi che assegno al messaggio per evitare conflitti
    msg_palindroma.classList.remove('txt-green', 'txt-yellow');

    // Istruzione condizionale per stabilire se la parola inserita dall'utente è palindroma
    if (word === reverseWord) {
        // Inietto dinamicamente il contenuto all'elemento messaggio
        msg_palindroma.innerText = `La parola ${word}, è palindroma aggiungila !!`;
        // Proprietà classList per definire lo stile
        msg_palindroma.classList.add('txt-green');

    } else {
        msg_palindroma.innerText = `La parola ${word}, non è palindroma !!`;
        msg_palindroma.classList.add('txt-yellow');
    };
};


// Definizione delle variabili

// Definizione dell'array che contiene le parole palindrome

const array_palindromas = [];

// Elementi per la visualizazzione

let ul_palindroma = document.getElementById('ul-palindroma');
let msg_palindroma = document.getElementById('msg-palindroma');



// Bottoni

let btn_check_palindroma = document.getElementById('check-palindroma');
let btn_add_palindroma = document.getElementById('add-palindroma');
let btn_show_palindroma = document.getElementById('show-palindroma');
let btn_reset_palindroma = document.getElementById('reset-palindroma');


// Gestione degli eventi

// Controllo
btn_check_palindroma.addEventListener('click', function () {
    // Recupero l'elemento di input e catturo il suo valore
    let input_palindroma = document.getElementById('input-palindroma').value.toLowerCase();

    // Richiamo la funzione (checkPalindroma)
    checkPalindroma(input_palindroma);



});

// Aggiunta
btn_add_palindroma.addEventListener('click', function () {
    console.log(this);
});

// Mostra
btn_show_palindroma.addEventListener('click', function () {
    console.log(this);
});

// Reset
btn_reset_palindroma.addEventListener('click', function () {
    console.log(this);
});

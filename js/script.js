

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
    human_icon.className = '';
    pc_icon.className = '';


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

// Funzione per il controllo sul dato inserito dall'utente

function validateInputPalindroma(input, msg) {
    // Rimuovo preventivamente le classi che assegno al messaggio per evitare conflitti
    msg.classList.remove('txt-red', 'txt-green', 'txt-yellow', 'txt-cyan');

    // Rimuovo gli spazi e normalizzo l'input
    input = input.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Controllo se l'input è vuoto
    if (input === '') {
        msg.innerText = 'Prego inserire un dato valido!';
        msg.classList.add('txt-red');
        return false;
    };

    // Espressione regolare per accettare solo lettere
    let regex = /^[a-zA-Z]+$/;
    if (!regex.test(input)) {
        msg.innerText = 'Errore: Inserire solo lettere, niente numeri o caratteri speciali!';
        msg.classList.add('txt-red');
        return false;
    };

    // Se l'input è valido svuoto il messaggio
    msg.innerText = '';

    return true;
};


// Funzione per invertire la parola dell'input

function getReversedWord(word) {
    return word.split('').reverse().join('');
}

// Funzione per verificare che la parola sia palindroma o meno

function checkWordPalindroma(input, msg) {

    // Variabile a cui assegno il valore catturato nell' input
    let checkWord = input.split('').reverse().join('');

    // Rimuovo le classi al messaggio
    msg.classList.remove('txt-red', 'txt-green', 'txt-yellow', 'txt-cyan');

    // Attraverso l'istruzione condizionale verifico le la parola è palindroma oppure no
    if (input === checkWord) {

        // Inietto al messaggio il contenuto (tramite innerText e tempalte literal)
        msg.innerText = `La parola ${input}, è palindroma aggiungila !!`;

        // Stilizzo il messaggio con la proprietà classList
        msg.classList.add('txt-green');

    } else {

        msg.innerText = `La parola ${input}, non è palindorma`;

        msg.classList.add('txt-red');

    };

};

function flagPalindroma(input, msg) {

    // Rimuovo le classi del messaggio per evitare conflitti
    msg.classList.remove('txt-red', 'txt-green', 'txt-yellow', 'txt-cyan');

    // Controllo che non vengano inserite parole doppie nell'array

    // Setto una variabile flag (parto col presupposto che non ho torvato nulla perche devo ancora cercare nell'array)
    let found_palindroma = false;

    // Per cercare nell'array devo scrorrere tutti i suoi elementi attraverso un ciclo for

    for (let i = 0; i < array_palindromas.length; i++) {
        if (array_palindromas[i].toLowerCase() === input.toLowerCase()) {
            found_palindroma = true;
        };
    };

    // Se è vero che ho trovato la parola non posso aggiungerla

    if (found_palindroma) {

        msg.innerText = `La parola ${input} è gia presente nell'elenco non puoi aggiungerla !!`;
        msg.classList.add('txt-yellow');

    } else { // altrimnti faccio il push della parola inserita dall'utente nell'array delle parole palindrome

        array_palindromas.push(input);
        msg.innerText = `La parola ${input} è stata aggiunta con successo !!`;
        msg.classList.add('txt-green');
    };
};

// Funzione che controlla lo stato dell'array

function checkEmptyArray(array, msg) {

    // Rimuovo le classi del messaggio per evitare conflitti
    msg.classList.remove('txt-red', 'txt-green', 'txt-yellow', 'txt-cyan');

    // Controllo sulla lunghezza dell'array
    if (array.length === 0) {
        msg.innerText = 'Al momento la lista è vuota aggiungi una parola';
        msg.classList.add('txt-cyan');
        return true; // true se l'array è vuoto
    };

    return false; // false l'array ha elementi
};

// Funzione per creare e mostrare la lista a video

function createListPalindroma(element, msg) {
    // Svuoto preventivamente la lista, per evitare di ricrearla ogni volta che premo sul bottone
    ul_palindroma.innerHTML = '';

    // Elimino il messaggio quando mostro la lista
    msg.innerText = '';

    // Logica per la visualizazzione a video (ciclo for)
    for (let i = 0; i < element.length; i++) {

        // Per ogni iterazione creo un elemento (li)
        let item_palindroma = document.createElement('li');

        // Proprietà classList sugli item
        item_palindroma.classList.add('py-2');

        // Inietto l'elemento i-esimo dell'array nei list item creati
        item_palindroma.innerText = element[i];

        // Appendo i list item creati alla lista padre (ul_palindroma)
        ul_palindroma.appendChild(item_palindroma);

        // Proprietà classList sulla lista
        ul_palindroma.classList.add('list-unstyled');

    };
};


// Definizione delle variabili

// Definizione dell'array che contiene le parole palindrome

let array_palindromas = [];

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

    // Recupero l'imput e catturo il suo valore (mtodo trim rimuove gli spazi bianchi all'inizio e alla fine)
    let input_palindroma = document.getElementById('input-palindroma').value.toLowerCase();

    // Richiamo la funzione che controlla il dato inserito nell'input
    if (!validateInputPalindroma(input_palindroma, msg_palindroma)) {
        return;
    };


    // Richiamo la funzione assegnandole un valore reale (ovvero il campo di input)
    checkWordPalindroma(input_palindroma, msg_palindroma);

});


// Aggiunta
btn_add_palindroma.addEventListener('click', function () {

    // Recupero l'imput e catturo il suo valore (mtodo trim rimuove gli spazi bianchi all'inizio e alla fine)
    let input_palindroma = document.getElementById('input-palindroma').value.toLowerCase();

    // Richiamo la funzione che controlla il dato inserito nell'input
    if (!validateInputPalindroma(input_palindroma, msg_palindroma)) {
        return;
    };

    // Richiamo la funzione (che inverte il valore del capo input) assegnandole un valore reale (ovvero il campo di input)
    let reverseWord = getReversedWord(input_palindroma);


    // Rimuovo le classi al messaggio
    msg_palindroma.classList.remove('txt-red', 'txt-green', 'txt-yellow', 'txt-cyan');

    // Istruzione condizionale in cui confronto il valore del campo di input con la funzione che inverte il valore 
    if (input_palindroma !== reverseWord) {
        msg_palindroma.innerText = `La parola ${input_palindroma}, non è palindroma non puoi aggiungerla !!`;
        msg_palindroma.classList.add('txt-red');
        return;
    };

    // Richiamo la funzione flag palindroma 
    flagPalindroma(input_palindroma, msg_palindroma);

    // Debug
    console.log(array_palindromas);

});

// Mostra
btn_show_palindroma.addEventListener('click', function () {

    // Richiamo la funzione sul controllo dello stato dell'array
    if (checkEmptyArray(array_palindromas, msg_palindroma) === true) { // esegue se non trova elementi
        return;
    }

    // Richiamo la funzione che crea la lista delle parole palindorme (argomento array)
    createListPalindroma(array_palindromas, msg_palindroma);

});

// Reset
btn_reset_palindroma.addEventListener('click', function () {

    // Svuoto l'array
    array_palindromas = [];

    // Svuoto la lista
    ul_palindroma.innerHTML = '';

    // Svuoto il contenuto del messaggio
    msg_gameList.innerText = '';
});


// ---------------------------------------------------------------------------------------------------------

// Array numerico algoritmo bubble sort

// Definizione delle funzioni

// Funzione che crea gli elementi della lista e mostra a video
function createAndShowNmberList() {
    // Svuoto preventivamente la lista
    ul_numberList.innerHTML = '';
    // Ciclo while per scorrete gli elementi della lista

    // Variabile contatore
    let i = 0;

    while (i < numbers.length) { // codizione da verificare 

        // Per ogni iterazione creo un elemento (li)
        let li_numberList = document.createElement('li');

        // Innertext ai list  items creati
        li_numberList.innerText = numbers[i];

        // Class list per definire lo stile dei list items
        li_numberList.classList.add('py-2');

        // Appendo i list items creati alla ul_numberList
        ul_numberList.appendChild(li_numberList);

        // Class list per definire lo stile della ul
        ul_numberList.classList.add('list-unstyled');

        // incremento (fine ciclo)
        i++
    };
};

// Funzione algoritmo bubble sort
function bubbleSort() {
    // Algoritmo bubble sort per riordinare i numeri della lista (dal piu piccolo al piu grande)

    // Ciclo for esterno per scorrere gli elementi della lista
    for (let i = 0; i < numbers.length; i++) {
        // Ciclo for iterno per confrontare gli elementi della lista
        for (let j = 0; j < numbers.length; j++) {
            // Confronto il valore corrente con quello sucessivo
            if (numbers[j] > numbers[j + 1]) {
                // Assegno il valore attualmente iterato ad una variabile temporanea
                let temp = numbers[j];
                // Assengno al valore attuale il valore sucessivo
                numbers[j] = numbers[j + 1];
                // Assegno al valore sicessivo il valore della variabile temporanea (attuale)
                numbers[j + 1] = temp;
            };
        };
    };
};


// Dichiarazione delle variabili


// Array numerico

let numbers = [40, 10, 60, 90, 20, 50, 30, 70, 100, 80];

// Elementi per la visualizazzione

let ul_numberList = document.getElementById('number-list');

// Bottoni

let btn_showNumbers = document.getElementById('show-number-list');
let btn_replaceNumbers = document.getElementById('replace-number-list');

// Gestione eventi per i bottoni

// Mostra
btn_showNumbers.addEventListener('click', function () {
    // Richiamo la funzione per creare e mostrare la lista numerica
    createAndShowNmberList();
});


// Riordina e mostra
btn_replaceNumbers.addEventListener('click', function () {
    // Richiamo la funzione bubble sort
    bubbleSort();
    // Richiamo la funzione per creare e mostrare la lista numerica
    createAndShowNmberList();
});


// Carosello con array di oggetti

// Definizione delle funzioni

// Funzione per la crazione dinamica delle immagini per le item
function item(immagine, titolo, descrizione) {
    return `
            <div class="item position-relative h-100">
                <img src="./img/${immagine}" alt="">
                <div class="txt-image">
                    <h3>${titolo}</h3>
                    <p>${descrizione}</p>
                </div>
            </div>       
            `
};


// Funzione per lsa creazione delle thums
function thumb(immagine) {
    return `
        <div class="thumb">
            <img src="./img/${immagine}" alt="">
        </div>
    `
}


// Definizione delle variabili

// Array di oggetti per le immagini il titolo e la descrizione

const image = [
    {
        img: 'img_1.jpg',
        title: 'Terrapieno',
        description: 'Dal terrapieno si può ammirare uno splendido panorama',
    },
    {
        img: 'img_2.jpg',
        title: 'Villanova',
        description: 'Qartiere storico di Cagliari',
    },
    {
        img: 'img_3.jpg',
        title: 'Bastione',
        description: 'Una delle tante attrazioni di Cagliari',
    },
    {
        img: 'img_4.jpg',
        title: 'La Vega',
        description: 'Quartiere storico di Cagliari',
    },
    {
        img: 'img_5.jpg',
        title: 'Via Roma',
        description: 'Una delle vie principali di Cagliari',
    },
    {
        img: 'img_6.jpg',
        title: 'Castello',
        description: 'Quartiere storico di Cagliari',
    },
];

// Ciclo for each per iterate gli elementi dell'array
image.forEach((elem, index) => {
    console.log(index);
    console.log(elem.img);
    console.log(elem.title);
    console.log(elem.description);
});



// Variabili (vuote) le quali dovranno contenere il contenuto creato dinamicamente
let itemsContent = '';
let thumbsContent = '';

// Variabile contatore per tenere traccia dell'elemento attivo
let active_image = 0;

// Ciclo for each per scorrere sugli elementi dell'array
image.forEach((elem) => {
    // Concateno il valore di items content con la chiamata della funzione che crea le immagini per le item
    itemsContent += item(elem.img, elem.title, elem.description);
    thumbsContent += thumb(elem.img);

});



// Elementi per la visualizazzione (contenitori)
let items_container = document.querySelector('.items');
let thumbs_container = document.querySelector('.thumbs');

// Inietto ai contenitori gli item creati 
items_container.innerHTML = itemsContent;
thumbs_container.innerHTML += thumbsContent;


// Recupero tutti gli elementi con classe item e thumb
let items = document.querySelectorAll('.item');

let thumbs = document.querySelectorAll('.thumb');


// Recupero solo il primo elemento della node List grazie alla variabile contatore (active image) e le assegno la classe active 
items[active_image].classList.add('active');
thumbs[active_image].classList.add('active');





// Bottoni (icone)
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');


// Gestione eventi

// Evento icona (prev)
prev.addEventListener('click', function () {
    // Istuzione condizionale per scorrere le immagini dell'array (prev)
    if (active_image === 0) { // se l'immagine attiva corrisponde al primo elemento dell'array
        active_image = image.length - 1; // ritorna all'ultimo elemento dell'array
    } else {
        active_image--; // altrimenti decrementa
    };

    // Item

    // Seleziono il primo elemento attivo e le rimuovo la classe active
    document.querySelector('.item.active').classList.remove('active');

    // Seleziono tutti gli elementi item e le aggiungo la classe attiva
    document.querySelectorAll('.item')[active_image].classList.add('active');

    // Thumb


    // Seleziono il primo elemento attivo e le rimuovo la classe active
    document.querySelector('.thumb.active').classList.remove('active');

    // Seleziono tutti gli elementi item e le aggiungo la classe attiva
    document.querySelectorAll('.thumb')[active_image].classList.add('active');
});

// Evento icona (next)
next.addEventListener('click', function () {
    // Istuzione condizionale per scorrere le immagini dell'array (next)
    if (active_image === image.length - 1) { // se l'immagine corrente corrisponde all'ultimo elemento dell'array
        active_image = 0;  // ritorna al primo elemento dell'array
    } else {
        active_image++; // altimenti incrementa
    };

    // Item

    // Seleziono il primo elemento attivo e le rimuovo la classe active
    document.querySelector('.item.active').classList.remove('active');

    // Seleziono tutti gli elementi item e le aggiungo la classe attiva
    document.querySelectorAll('.item')[active_image].classList.add('active');

    // Thumb

    // Seleziono il primo elemento attivo e le rimuovo la classe active
    document.querySelector('.thumb.active').classList.remove('active');

    // Seleziono tutti gli elementi item e le aggiungo la classe attiva
    document.querySelectorAll('.thumb')[active_image].classList.add('active');

});


// My family (array di oggetti, cilo for, funzioni)


// Definizione delle funzioni

// Definizione della funzione che crea la singola colonna
function createColumn() {
    // Creo un elemento div
    let col = document.createElement('div');

    // Assegno alle colonne create le classi di bootrstrap per definire il layout
    col.classList.add('col-12', 'col-sm-6', 'col-md-4');

    // Restituisco l'elemento creato
    return col;
};

// Funzione per la creazione delle singole cardù
function createCard(member, i) {
    return `
            <div class="card my-2">
                <div class="card-body">
                    <div>
                        <h3>${i + 1}</h3>
                    </div>
                    <div>
                        <h4>${member.name}</h4>
                        <h5>${member.role}</h5>
                        <p>${member.sex}</p>
                        <p><strong>Lavoro : ${member.work === true ? 'Si' : 'No'}</strong></p>
                    </div>
                </div>
            </div>
    `
};

// Funzione per mostrare le card
function showCards(array_members) {
    // Recupero il contenitore (main-container)
    let familyContainer = document.getElementById('main-container');

    // Svuoto preventivamente il contenitore
    familyContainer.innerHTML = '';

    // Ciclo forEach sull'array di oggetti (membri famiglia)
    array_members.forEach((elem, index) => {

        // Richiamo la funzione che crea la singola colonna
        let cols = createColumn();
        console.log(cols);

        // Inietto il contenuto alle colonne richiamo la funzione che crea la singola carta
        cols.innerHTML = createCard(elem, index);

        // Appendo al contenitore gli elementi creati dinamicamente (colonne e cards)
        familyContainer.appendChild(cols);

    });
};

// Funzione per filtrare solo i membri che lavorano
function workingMembersFilter() {
    // Creazione di un nuovo array con il metodo filter
    const workingMembers = memberFamily.filter((elem) => {
        return elem.work === true;
    });

    // Restiuisco l'array filtrato
    return workingMembers;
};

// Funzione per filtrare solo i membri che non lavorano
function noWorkingMembersFilter() {
    const noWorkingMembers = memberFamily.filter((elem) => {
        return elem.work === false;
    });

    return noWorkingMembers;
}

// Funzione per mostrare solo i membri che lavorano
function showWorkingMembers() {
    const workingMembers = workingMembersFilter();

    showCards(workingMembers);
};

// Funzione per mostrare solo i membri che non lavorano
function showNoWorkingMembers() {
    const noWorkingMembers = noWorkingMembersFilter();

    showCards(noWorkingMembers);
}


// Definizione delle variabili

// Array di oggetti membri della famiglia
const memberFamily = [
    {
        name: 'Alessandro',
        role: 'Padre',
        sex: 'Uomo',
        work: false,
    },
    {
        name: 'Adriana',
        role: 'Madre',
        sex: 'Donna',
        work: false,
    },
    {
        name: 'Antonio',
        role: 'Primo genito',
        sex: 'Uomo',
        work: true,
    },
    {
        name: 'Alessandro Jr',
        role: 'Secondo genito',
        sex: 'Uomo',
        work: true,
    },
    {
        name: 'Giuanluca',
        role: 'Terzo genito',
        sex: 'Uomo',
        work: true,
    },
    {
        name: 'Roberto',
        role: 'Quarto genito',
        sex: 'Uomo',
        work: true,
    },
];



// Bottoni

let showMembers_btn = document.getElementById('show-members');
let workingMembers_btn = document.getElementById('working-mebers');
let no_WorkingMembers_btn = document.getElementById('no-working-members');



// Gestione eventi
showMembers_btn.addEventListener('click', function () {
    // Richiamo la funzione per mostrare le card passando un argomento reale (memberFamily)
    showCards(memberFamily);
});

workingMembers_btn.addEventListener('click', function () {

    // Richiamo la funzione che mostra solo i membri che lavorano
    showWorkingMembers();
});

no_WorkingMembers_btn.addEventListener('click', function () {

    // Richiamo la funzione che mostra solo i membri che non lavorano
    showNoWorkingMembers();
});



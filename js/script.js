// ? ESERCIZIO CAMPO MINATO

/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

    BONUS:
1 - quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
2 - quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle */

// ! INIZIO

function play() {
    playButton.innerText = ('Ricomincia');

    const grid = document.getElementById('grid');
    grid.innerHTML = '';
};


// ! FASE PREPARATIVA

let proves = 0;
const totalBombs = 16;

const difficult = document.getElementById('difficult').value;

let totalCells;
let CellsPerRows;

switch (difficult) {
    case 'easy':
        totalCells = 100;
        CellsPerRows = 10;

        break;
    case 'medium':
        totalCells = 81;
        CellsPerRows = 9;

        break;
    case 'hard':
        totalCells = 49;
        CellsPerRows = 7;

        break;
}

const maxAttempts = totalCells - totalBombs;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateBombs = (totalBombs, totalNumber) => {
    const bomb = [];

    while (bomb.length < totalBombs) {
        const randNumber = getRandomNumber(1, totalNumber);
        if (!bomb.includes(randNumber)) bomb.push(randNumber);
    }
    return bomb;
}



const bomb = generateBombs(totalBombs, totalCells);


const playButton = document.getElementById('button');
playButton.addEventListener('click', function () {
    play();
});





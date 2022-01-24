// ? Campo minato

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
1- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle */


// ! Funzione da riutilizzare, per generare numeri random
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ! Recupero elementi
const select = document.getElementById("choices");
const grid = document.getElementById("grid");
const button = document.getElementById("start");


// ! Cambio il tasto del bottone e lo rinomino ricomincia (PUNTO 1)

function start() {
    button.innerText = 'Ricomincia'

    grid.innerHTML = '';
    grid.style.display = 'flex';
};


// ! Preparo quello che mi serve per il gioco (PUNTO 2) 

let attempts = 0;
const totalBombs = 16;

let columns;

switch (select.value) {
    case "2":
        columns = 9;
        break;
    case "3":
        columns = 7;
        break;
    default:
        columns = 10;
        break;
}

const totalCells = columns * columns;

const maxAttempts = totalCells - totalBombs;
let bombs = [];


// ! GENERO UNA BOMBA (PUNTO 3)

const generateBombs = (totalBombs, totalNumber) => {
    const bombs = [];
    while (bombs.length < totalBombs) { // il numero di bombe è inferiore a 16
        const randNumber = getRandomNumber(1, totalNumber);
        if (!bombs.includes(randNumber)) { // Controllo se c'è nell'array di bombe
            bombs.push(randNumber);
        }
    }
    return bombs;
}


// ! GENERO LA GRIGLIA (PUNTO 4)

const generateGrid = (cellsNumber, cellsPerRow, bombs) => {
    for (let i = 1; i <= cellsNumber; i++) {
        const cell = createCell(i, cellsPerRow);
        cell.addEventListener('click', onCellClick);
        grid.appendChild(cell);
    }
}

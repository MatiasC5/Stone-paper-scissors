const scissorsBtn = document.querySelector('#scissors-btn');
const paperBtn = document.querySelector('#paper-btn');
const stoneBtn = document.querySelector('#stone-btn');
const resetBtn = document.querySelector('#reset-btn');

const firstPlayerChoice = document.querySelector('.first-player-choice');
const computerChoice = document.querySelector('.computer-choice');

const pointsList = document.querySelector('.points-list');
const pointsPlayerOne = document.getElementById('points-player-one');
const pointsPlayerTwo = document.getElementById('points-player-two');

let playerOne = 0;
let playerTwo = 0;

scissorsBtn.addEventListener('click', scissorsChoice)
paperBtn.addEventListener('click', paperChoice)
stoneBtn.addEventListener('click', stoneChoice)
resetBtn.addEventListener('click', resetGame)


const choices = [{
    name: 'scissors',
    img: './images/icons8-cortar-con-tijeras-64.png',
},
{
    name: 'paper',
    img: './images/icons8-papel-64.png',
},
{
    name: 'stone',
    img: './images/icons8-roca-48.png'
}
]

function scissorsChoice() {
    firstPlayerChoice.setAttribute('src', './images/icons8-cortar-con-tijeras-64.png');
    const randomChoice = Math.floor(Math.random() * choices.length);
    computerChoice.setAttribute('src', choices[randomChoice].img);
    if (scissorsBtn.value === 'scissors' && choices[randomChoice].name === 'paper') {
        playerOne++;
        pointsPlayerOne.innerHTML = playerOne;
    }
    if (scissorsBtn.value === 'scissors' && choices[randomChoice].name === 'stone') {
        playerTwo++;
        pointsPlayerTwo.innerHTML = playerTwo;
    }

    finishGame()
}

function paperChoice() {
    firstPlayerChoice.setAttribute('src', './images/icons8-papel-64.png');
    const randomChoice = Math.floor(Math.random() * choices.length);
    computerChoice.setAttribute('src', choices[randomChoice].img);
    if (paperBtn.value === 'paper' && choices[randomChoice].name === 'scissors') {
        playerTwo++;
        pointsPlayerTwo.innerHTML = playerTwo;
    }
    if (paperBtn.value === 'paper' && choices[randomChoice].name === 'stone') {
        playerOne++;
        pointsPlayerOne.innerHTML = playerOne;
    }

    finishGame()
}

function stoneChoice() {
    firstPlayerChoice.setAttribute('src', './images/icons8-roca-48.png');
    const randomChoice = Math.floor(Math.random() * choices.length);
    computerChoice.setAttribute('src', choices[randomChoice].img);
    if (stoneBtn.value === 'stone' && choices[randomChoice].name === 'scissors') {
        playerOne++;
        pointsPlayerOne.innerHTML = playerOne;
    }
    if (stoneBtn.value === 'stone' && choices[randomChoice].name === 'paper') {
        playerTwo++;
        pointsPlayerTwo.innerHTML = playerTwo;
    }

    finishGame()
}

function finishGame() {
    if (playerOne == 3) {
        alert('Player one wins the game');
    }

    if (playerTwo == 3) {
        alert('Player two wins the game');
    }
}

function resetGame() {
    playerOne = 0;
    playerTwo = 0
    pointsPlayerOne.textContent = '-'
    pointsPlayerTwo.textContent = '-'
    firstPlayerChoice.src = ''
    computerChoice.src = ''
}


let playBtn = document.querySelector('#play-btn');
let chooseItem = document.querySelector('.choose-item');
let moves = document.querySelectorAll('.single-item');
let mainGame = document.querySelector('.main-game');
let youWon = document.querySelector('#you-won');
let youLost = document.querySelector('#you-lost');
let myScore = document.querySelector('#my-score');
let opScore = document.querySelector('#bot-score');
let playAgainBtn = document.querySelector('#play-again-btn');
let chosenMove = null;
let myScoreNumber = parseInt(myScore.innerText);
let opScoreNumber = parseInt(opScore.innerText);

playBtn.addEventListener('click', e => {
    playBtn.style.display = 'none';
    chooseItem.style.display = 'block';
});

playAgainBtn.addEventListener('click', e => {
    chooseItem.style.display = 'block';
    mainGame.style.display = 'none';
    mainGame.querySelectorAll('.single-item').forEach(item => {
        item.style.display = 'none';
    })
});

moves.forEach( move => {
    move.addEventListener('click', e => {
    chosenMove = e.target.closest('.single-item');
    chooseItem.style.display = 'none';
    mainGame.style.display = 'flex';
    mainGame.querySelector('.left').appendChild(chosenMove);
    let opMove = opponentMove()
    mainGame.querySelector('.right').appendChild(opMove);
    if(winner(chosenMove, opMove)) {
        youWon.style.display = 'block';
        myScoreNumber++;
        updateScore(myScoreNumber, opScoreNumber);
    } else {
        youLost.style.display = 'block';
        opScoreNumber++;
        updateScore(myScoreNumber, opScoreNumber);
    }
})});

const opponentMove = () => {
    let opMove = Math.floor(Math.random() * 3);
    return moves[opMove];
}

const winner = (p1, p2) => {
    if((p1.id == 'rock' && p2.id == 'scissors') || (p1.id == 'paper' && p2.id == 'rock') || (p1.id == 'scissors' && p2.id == 'paper')) {
        return true;
    }
    return false;
}

const updateScore = (myS, opS) => {
    myScore.innerText = myS;
    opScore.innerText = opS;
}
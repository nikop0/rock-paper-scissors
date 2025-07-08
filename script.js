let playBtn = document.querySelector('#play-btn');
let chooseItem = document.querySelector('.choose-item');
let moves = document.querySelectorAll('.single-item');
let mainGame = document.querySelector('.main-game');
let youWon = document.querySelector('#you-won');
let youLost = document.querySelector('#you-lost');
let chosenMove = null;
playBtn.addEventListener('click', e => {
    playBtn.style.display = 'none';
    chooseItem.style.display = 'block';
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
    } else {
        youLost.style.display = 'block';
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
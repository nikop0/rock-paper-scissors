let playBtn = document.querySelector('#play-btn');
let chooseItem = document.querySelector('.choose-item');
let moves = document.querySelectorAll('.single-item');
let mainGame = document.querySelector('.main-game');
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
    console.log('');
    mainGame.querySelector('.left').appendChild(chosenMove);
    mainGame.querySelector('.right').appendChild(opponentMove());
})});

const opponentMove = () => {
    let opMove = Math.floor(Math.random() * 3);
    return moves[opMove];
}
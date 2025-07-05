let playBtn = document.querySelector('#play-btn');
let chooseItem = document.querySelector('.choose-item');
let moves = document.querySelectorAll('.single-item');
let chosenMove = null;
playBtn.addEventListener('click', e => {
    playBtn.style.display = 'none';
    chooseItem.style.display = 'block';
});

moves.forEach( move => {
    move.addEventListener('click', e => {
    chosenMove = e.target;
    chooseItem.style.display = 'none';
})});
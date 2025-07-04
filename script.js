let playBtn = document.querySelector('#play-btn');
let chooseItem = document.querySelector('.choose-item');

playBtn.addEventListener('click', e => {
    playBtn.style.display = 'none';
    chooseItem.style.display = 'block';
});
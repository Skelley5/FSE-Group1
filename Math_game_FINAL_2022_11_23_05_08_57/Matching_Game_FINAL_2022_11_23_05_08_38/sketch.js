const cards = document.querySelectorAll('.memory-card');
var t = 60;
let button;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let tally = 0;
let timer = document.getElementById('timer')
let timerOn = false;


if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  
  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      startCountdown();
    });
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  
  this.classList.add('flip');
  
  if (!hasFlippedCard) {
    //FIRST CLICK
    hasFlippedCard = true;
    firstCard = this;
    
    return;
  }
  
    //SECOND CLICKKK
    secondCard = this;
  
    checkForMatch();
}


function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
    return isMatch ? disableCards() : unflipCards();
}


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    tally = tally + 1;
  
    if(tally == 6) {
      this.victory();
    } else  
    resetBoard();
}


function unflipCards() {
  lockBoard = true;
  
  setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    
  resetBoard();
    }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function startCountdown() {
      setInterval(function () {
        t = t == 0 ? gameOver() : t - 1;
        timer.innerHTML = Math.floor(t);
      }, 1000);
}

function gameOver() {
  timer = 0;
  document.getElementById('game-over-text').classList.add('visible');
    }

function victory() {
  document.getElementById('victory-text').classList.add('visible');
}

cards.forEach(card => card.addEventListener('click', flipCard));
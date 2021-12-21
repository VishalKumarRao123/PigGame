'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');

//starting conditions
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
let winner = false;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
const newGame = function() {
    diceEl.classList.add('hidden');
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
    if (activePlayer == 1) switchPlayer();
    playing = true;
    winner = false;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.add('player--active');
    activePlayer = 0;
    currentScore = 0;
    scores[0] = 0;
    scores[1] = 0;
};
//rolling dice
btnRoll.addEventListener('click', function name(params) {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceEl.src = `./dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    } else {
        newGame();
    }
});

btnhold.addEventListener('click', function() {
    console.log('holding');
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    if (scores[activePlayer] >= 20 && winner == false) {
        winner = true;
        playing = false;
        console.log('winner');
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');

        // document
        //     .querySelector(`.player--${activePlayer}`)
        //     .classList.remove('player--active');
        currentScore = 0;
    } else {
        // Switch to the next player
        if (winner == true) newGame();
        console.log('niche');
        switchPlayer();
    }
});
btnnew.addEventListener('click', newGame);
// btnnew.addEventListener('click', function name(params) {
//     document.querySelector('.player--0').classList.add('player--active');
//     document.querySelector('.player--1').classList.remove('player--active');
//     diceEl.classList.add('hidden');
//     currentScore = 0;
//     scores[0] = scores[1] = 0;
//     document.querySelector('#current--0').textContent = 0;
//     document.querySelector('#current--1').textContent = 0;
//     document.querySelector('#score--0').textContent = 0;
//     document.querySelector('#score--1').textContent = 0;
//     // player0El.classList.toggle('player--0');
//     if (
//         document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.contains('player--winner')
//     ) {
//         document
//             .querySelector(`.player--${activePlayer}`)
//             .classList.remove('player--winner');
//     }
// });
'use strict';


const current_0 = document.querySelector("#current--0");
const current_1 = document.querySelector("#current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const section0 = document.querySelector(".player--0");
const section1 = document.querySelector(".player--1");
const bigScore0 = document.querySelector("#score--0");
const bigScore1 = document.querySelector("#score--1");

bigScore0.textContent = 0;
bigScore1.textContent = 0;


    let scores;
    let score;
    let activePlayer;
    let play;    

    const startState = function () {
        bigScore0.textContent = 0;
        bigScore1.textContent = 0;
        current_0.textContent = 0;
        current_1.textContent = 0;
        section0.classList.add("player--active");
        section1.classList.remove("player--active");
        section0.classList.remove("player--winner");
        section1.classList.remove("player--winner");
        dice.classList.add("hidden");
        scores = [0,0];
        score = 0;
        activePlayer = 0;
        play = true;   

    }

    startState();


const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    score = 0;
    activePlayer = activePlayer === 0 ? 1 :0;
    section0.classList.toggle("player--active");
    section1.classList.toggle("player--active");
}

btnRoll.addEventListener("click", ()=> {

    if (play) {
        const randomNumber = Math.trunc(Math.random()*6)+1
        dice.classList.remove("hidden");
        dice.src = `dice-${randomNumber}.png`;
        
        if (randomNumber !== 1) {
            score += randomNumber;
            document.querySelector(`#current--${activePlayer}`).textContent = score;
       
        } else {
           switchPlayer();
        }
       }
})


btnHold.addEventListener("click", () => {

    if (play) {
        scores[activePlayer] += score;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >=100) {
          play = false;
          dice.classList.add("hidden");
          console.log(scores[activePlayer] += score)
          document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
          document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
          switchPlayer();
        }
    }
})

btnNew.addEventListener("click", startState)
//alert players who goes first...
window.alert("Player 1 goes first!");
//html dom queries
let timerLong = document.getElementById("timer-long");
let timerShort = document.getElementById("timer-short");
let guess = document.getElementById("guess");
let pass = document.getElementById("pass");
let input = document.getElementById("what-is");
let playerMarker = document.getElementById("player-marker");
let playerOneScore = document.getElementById("player-one-score");
let playerTwoScore = document.getElementById("player-two-score");
let itemOne = document.getElementById("item-one");
let itemTwo = document.getElementById("item-two");
let itemThree = document.getElementById("item-three");
let itemFour = document.getElementById("item-four");
let itemFive = document.getElementById("item-five");
let itemSix = document.getElementById("item-six");
let itemSeven = document.getElementById("item-seven");
let itemEight = document.getElementById("item-eight");
let itemNine = document.getElementById("item-nine");
let itemTen = document.getElementById("item-ten");
let itemEleven = document.getElementById("item-eleven");
let itemTwelve = document.getElementById("item-twelve");
let itemThirteen = document.getElementById("item-thirteen");
let itemFourteen = document.getElementById("item-fourteen");
let itemFifteen = document.getElementById("item-fifteen");
let itemSixteen = document.getElementById("item-sixteen");
let itemSeventeen = document.getElementById("item-seventeen");
let itemEighteen = document.getElementById("item-eighteen");
let itemNineteen = document.getElementById("item-nineteen");
let itemTwenty = document.getElementById("item-twenty");
let itemTwentyone = document.getElementById("item-twentyone");
let itemTwentytwo = document.getElementById("item-twentytwo");
let itemTwentythree = document.getElementById("item-twentythree");
let itemTwentyfour = document.getElementById("item-twentyfour");
let itemTwentyfive = document.getElementById("item-twentyfive");
let itemTwentysix = document.getElementById("item-twentysix");
let itemTwentyseven = document.getElementById("item-twentyseven");
let itemTwentyeight = document.getElementById("item-twentyeight");
let itemTwentynine = document.getElementById("item-twentynine");
let itemThirty = document.getElementById("item-thirty");
//other declarations
let idForTimerProcess = null;
let countLong = 300;
let countShort = 6;
//disable guess and pass buttons
guess.disabled = true;
pass.disabled = true;
//put round timer on page

console.log(itemOne);
console.log(itemOne.textContent);

countdownLong();

//i need a better way to determine the display for who's turn it is and I want your help...

itemOne.addEventListener("click", () => {
  itemOne.textContent = "She's mom to Kate Hudson";
  //question above buttons disabled below
  guess.disabled = false;
  pass.disabled = false;

  countdownShort();
  //small timer for question begins

  pass.addEventListener("click", () => {
    pass.disabled = true;
    countdownShort();
    //-----here we need if conditionals for who's turn it will be passed to if the pass button is pressed. 
    if (playerMarker === "Player 1's turn") {
      playerMarker = "Player 2's turn";  
    } else if (playerMarker === "Player 2's turn") {
      playerMarker = "Player 1's turn"
    }
    
    //------this guess is for after pass is pressed
    guess.addEventListener("click", () => {
      if (input.value === "Goldie Hawn" || input.value === "goldie hawn") {
        playerTwoScore.textContent = parseInt(playerTwoScore.textContent) + 100;
      }
    });
    pass.disabled = false;
  });
//-------this guess is for w/o pass being
  guess.addEventListener("click", () => {
    if (input.value === "Goldie Hawn" || input.value === "goldie hawn") {
      playerOneScore.textContent = parseInt(playerOneScore.textContent) + 100;
    }
  });
});

function countdownLong() {
  idForTimerProcess = setTimeout(counter, 1000);

  function counter() {
    countLong = countLong - 1;

    let min = Math.floor(countLong / 60);
    let sec = countLong % 60;

    timerLong.textContent = `${min}:${sec}`;
    //This logic will be changed no need for blastoff in jeopardy
    if (countLong <= 0) {
      countLong = "Blastoff!";
      timerLong.textContent = countLong;
      //I think this logic is ok
    } else {
      idForTimerProcess = setTimeout(counter, 1000);
    }
  }
}

function countdownShort() {
  idForTimerProcess = setTimeout(counter, 1000);

  function counter() {
    countShort = countShort - 1;

    let min = Math.floor(countShort / 60);
    let sec = countShort % 60;

    timerShort.textContent = `${min}:${sec}`;
    //This logic will be changed no need for blastoff in jeopardy
    if (countShort <= 0) {
      countShort = 5;
      timerShort.textContent = countShort;
      //I think this logic is ok
    } else {
      idForTimerProcess = setTimeout(counter, 1000);
    }
  }
}

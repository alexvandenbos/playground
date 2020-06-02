// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
let wrongLetters = [];
let display = [];

const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];
let maxAmount = 5;

const wordPicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};
//url update hangman svg
function hangmanUpdate(tries) {
  document.querySelector(".gallows img").src = `./assets/Gallows${tries}.svg`;
}

let inputs;
const wordGuessed = function (word, inputs) {
  // remove all letters from word that are already guessed
  // We can do this with a for loop to.
  let remaining = word.filter(function (letter) {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputs.includes(letter);
  });
  // If we have letters left, right?
  return remaining.length === 0;
};

let gameOver;
const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

const loseTheGame = function () {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

const letters = function (word, inputs) {
  wrongLetters = inputs.filter(function (letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  console.log("wrongletters vanuit letters functie:", wrongLetters);
  console.log(
    "wrongletters NA queryselector vanuit letters functie:",
    wrongLetters
  );
  return wrongLetters;
};

const theWord = function (word, inputLetterWords) {
  display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  return display;
};

const updateDomGuessedLetters = function (wrongLetters) {
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const updateDomTheWord = function (display) {
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const checkIfLost = function (tries) {
  if (tries >= 5) {
    // let looseStatus = true;
    return true;
  } else {
    looseStatus = false;
    return false;
  }
};

function getThePlayer(player) {
  let play = document.getElementById("player1");
  play = play + "We are about to start the game";
  return play;
}

function beginTheGameWithPlayer(player1) {
  getThePlayer(player1);
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordPicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
  updateDomTheWord(display);
  updateDomGuessedLetters([]);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});

const updateTries = function (word, input1) {
  if (!word.includes(input1)) {
    return true;
  } else {
    return false;
  }
};

const guessLetter = function () {
  if (gameOver) {
    return;
  }
  const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  if (updateTries(word, input1) === true) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);

  updateDomGuessedLetters(wrongLetters);
  updateDomTheWord(display);
  hangmanUpdate(tries);

  checkIfLost();

  if (checkIfLost(tries) === true) {
    loseTheGame();
  }
  console.log(checkIfLost(tries));

  if (wordGuessed(word, inputs) === true) {
    winTheGame();
  }
};


module.exports = {
  document,
  wordList,
  wordPicker,
  theWord,
  letters,
  guessLetter,
  checkIfLost,
  wordGuessed,
  updateTries,
};

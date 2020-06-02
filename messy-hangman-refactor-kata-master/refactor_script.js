// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
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

const checkLetter = function (word, guessedLetter) {
  if (word.includes(guessedLetter)) {
    return true;
  } else {
    return false;
  }
};

const updateAttemptsRemaining = function (checkLetter, attemptsRemaining) {
  if (checkLetter === true) {
    return attemptsRemaining;
  } else {
    attemptsRemaining = attemptsRemaining - 1;
    return attemptsRemaining;
  }
};

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

const lose4 = function () {
  // when losing 3 times, this has to happen
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

const letters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  console.log(wrongLetters);
  return wrongLetters;
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
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

  if (!word.includes(input1)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);
  checkIfWon();
  checkIfLost();
};

const checkIfLost = function (tries) {
  if (tries >= 5) {
    // lose4();
    return true;
  } else {
    return false;
  }
};

const checkIfWon = function (word, inputs) {
  if (wordGuessed(word, inputs)) {
    // winTheGame();
    return true;
  } else {
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
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});

function hangmanUpdate(tries) {
  document.querySelector(".gallows img").src = `./assets/Gallows${tries}.png`;
}

module.exports = {
  wordList,
  wordPicker,
  checkLetter,
  updateAttemptsRemaining,
  letters,
  guessLetter,
  checkIfLost,
  checkIfWon,
};

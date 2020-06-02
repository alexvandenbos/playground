// All global variables here
let wrongLetters = [];
let display = [];
letterInputArray = [];

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

//kiest woord
const wordPicker = (list) => {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};
//url update hangman svg
function hangmanUpdate(tries) {
  document.querySelector(".gallows img").src = `./assets/Gallows${tries}.svg`;
};
//levert array met correct geraden letters
const wordGuessed = function (word, letterInputArray) {
  let remaining = word.filter(function (letter) {
    return !letterInputArray.includes(letter);
  });
  return remaining.length === 0;
};
//levert array met verkeerd geraden letters
const letters = function (word, letterInputArray) {
  wrongLetters = letterInputArray.filter(function (letter) {
    return !word.includes(letter);
  });
  return wrongLetters;
};
//verandert class wanneer de speler gewonnen heeft
const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};
//verandert class wanneer de speler verloren heeft
const loseTheGame = function () {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

//stopt correct geraden letters in de display array of een _
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
//joined verkeerd geraden letters tot een string in de dom
const updateDomGuessedLetters = function (wrongLetters) {
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};
//joined correct geraden letters tot een string in de display
const updateDomTheWord = function (display) {
  document.querySelector(".the_word").innerHTML = display.join(" ");
};
//controlleerd het aantal pogingen en kent status toe
const checkIfLost = function (tries) {
  if (tries >= 5) {
    return true;
  } else {
    looseStatus = false;
    return false;
  }
};
//update pogingen
const updateTries = function (word, guessedLetter) {
  if (!word.includes(guessedLetter)) {
    return true;
  } else {
    return false;
  }
};
//start de game, manipuleerd classes
function startGame() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";
  word = wordPicker(wordList).split("");
  theWord(word, letterInputArray);
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;
  updateDomTheWord(display);
  updateDomGuessedLetters([]);
}
//functie voor het opnieuw beginnen
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", startGame);
  startGame();
});
//evalueert geraden letter en proces
const guessLetter = function () {
  if (gameOver) {
    return;
  }
  const guessedLetter = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (letterInputArray.includes(guessedLetter) || guessedLetter === "") {
    return;
  }
  if (updateTries(word, guessedLetter) === true) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }
  letterInputArray.push(guessedLetter);
  theWord(word, letterInputArray);
  letters(word, letterInputArray);
  updateDomGuessedLetters(wrongLetters);
  updateDomTheWord(display);
  hangmanUpdate(tries);
  if (checkIfLost(tries) === true) {
    loseTheGame();
  }
  if (wordGuessed(word, letterInputArray) === true) {
    winTheGame();
  }
};
//module exports voor test
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

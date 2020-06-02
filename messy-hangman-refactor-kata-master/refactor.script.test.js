const functions = require("./refactor_script.js");

// 1. starten van de game d.m.v. het kiezen van het woord

test("1 wordPicker picks word from wordList", () => {
  const list = functions.wordList;
  expect(functions.wordPicker(list)).toBeTruthy();
});

test("1 wordPicker fails if wordList is empty ", () => {
  const list = 0;
  expect(functions.wordPicker(list)).toBeUndefined();
});

test("1 wordPicker fails if wordList is empty ", () => {
  const list = 0;
  expect(functions.wordPicker(list)).not.toEqual(null);
});

// 2. checken of een letter voorkomt in het woord

// nieuwe functie gemaakt: checkletter

test("2 theWord returns _ if word does not contain letter", () => {
  const word = ["b", "o", "o", "m"];
  const inputLetterWords = ["q"];
  expect(functions.theWord(word, inputLetterWords)).toEqual([
    "_",
    "_",
    "_",
    "_",
  ]);
});

test("2 theWord returns _ if word does not contain letter", () => {
  const word = ["b", "o", "o", "m"];
  const inputLetterWords = ["o"];
  expect(functions.theWord(word, inputLetterWords)).toEqual([
    "_",
    "o",
    "o",
    "_",
  ]);
});

// 3. updaten van het aantal pogingen van de gebruiker

// nieuwe functie gemaakt: updateAttemptsRemaining

test("als de letter niet in het woord voorkomt wordt tries geupdate", () => {
  const word = ["b", "o", "o", "m"];
  const input1 = "q";
  expect(functions.updateTries(word, input1)).toBe(true);
});

test("als de letter wel in het woord voorkomt wordt tries niet geupdate", () => {
  const word = ["b", "o", "o", "m"];
  const input1 = "o";
  expect(functions.updateTries(word, input1)).toBe(false);
});

// als de ingegeven letter niet voorkomt in het gekozen woord wordt het aantal resterende pogingen verminderd met 1

// const livesRemaining = 5 const letterChecker = true expect liveUpdater(livesRemaining, letterChecker) toBe 5

// const livesRemaining = 5 const letterChecker = false expect liveUpdater(livesRemaining, letterChecker) toBe 4

// 4. updaten van de lijst met letters die al geraden zijn door de gebruiker

test("4 if inputs contains letters that are not in word, the letters function returns them", () => {
  const word = "vrachtwagen";
  const inputs = ["a", "q", "x"];
  const array = functions.letters(word, inputs);
  console.log(word, inputs, array, typeof word, typeof inputs, typeof array);
  expect(array).toEqual(["q", "x"]);
});

test("4 if inputs does not contain letters that are not in word, the letters function returns nothing", () => {
  const word = "vrachtwagen";
  const inputs = ["a", "v", "r"];
  const array = functions.letters(word, inputs);
  console.log(word, inputs, array, typeof word, typeof inputs, typeof array);
  expect(array).toEqual([]);
});

// als de ingegeven letter niet voorkomt in het gekozen woord wordt deze toegevoegd aan de lijst reeds geraden letters

// const failedLetters = ["a","f',"g"] const letterGuessed = "e" const letterChecker = true expect failUpdater(failedLetters, letterChecker, letterGuessed) toBe === failedLetters

// const failedLetters = ["a","f',"g"] const letterGuessed = "e" const letterChecker = false expect failUpdater(failedLetters, letterChecker, letterGuessed) toBe === ["a","f',"g","e"]

// 5. verliezen van de game wanneer er geen pogingen meer over zijn

test("5 on the 5th failed attempt the player loses the game", () => {
  let tries = 5;
  const lose = functions.checkIfLost(tries);
  expect(lose).toBeTruthy();
});

test("5 with less than 5 failed attempts the player does not lose the game", () => {
  let tries = 4;
  const lose = functions.checkIfLost(tries);
  expect(lose).toBeFalsy();
});

// zodra het aantal pogingen === 0 eindigt het spel met verlies

// const livesRemaining = 0 expect loseGame(livesRemaining) toBe true

// const livesRemaining = 1 expect loseGame(livesRemaining) toBe false

// 6. winnen van de game

test("6 when all letters of the word are guessed, the player wins", () => {
  let word = ["g", "e", "e", "u", "w"];
  let inputs = ["g", "e", "u", "w"];
  const win = functions.wordGuessed(word, inputs);
  expect(win).toBeTruthy();
});

test("6 when all letters of the word are guessed, the player wins", () => {
  let word = ["g", "e", "e", "u", "w"];
  let inputs = ["e", "u", "w"];
  const win = functions.wordGuessed(word, inputs);
  expect(win).toBeFalsy();
});

// zodra het aantal nog te raden letters van het gekozen woord === 0 eindigt het spel met winst

// zodra het aantal pogingen === 0 eindigt het spel met verlies

// const lettersRemaining = 0 expect winGame(lettersRemaining) toBe true

// const lettersRemaining = 1 expect winGame(livesRemaining) toBe false

// zolang 5 en 6 niet van toepassing zijn kan de gebruiker opnieuw een letter ingeven

// CSS

// er verschijnt een streepje voor iedere letter van het te raden woord waarop later de geraden letters verschijnen

// er verschijnt voor iedere fout geraden letter een ledemaat van de hangman met een animatie

// woorden uit een aparte file halen (zoals de films bij de filmzoeker)

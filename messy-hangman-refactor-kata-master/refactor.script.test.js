const functions = require("./refactor_script.js");

// 1. starten van de game d.m.v. het kiezen van het woord

test("wordPicker picks word from wordList", () => {
  const list = functions.wordList;
  expect(functions.wordPicker(list)).toBeTruthy();
});

test("wordPicker fails if wordList is empty ", () => {
  const list = 0;
  expect(functions.wordPicker(list)).toBeUndefined();
});

// const list = wordList const pickedWord = pickWord(list) expect pickedWord to Be (true)

// const list = 0 const pickedWord = pickWord(list) expect pickedWord to Be (false)

// 2. checken of een letter voorkomt in het woord

// na het ingeven van een letter wordt gechecked of deze voorkomt in het gekozen woord

// const wordToGuess = "hoofdpijn" const lettersRemaining = 5 const letterGuessed = "o" expect letterChecker(wordToGuess, letterGuessed) toBe true expect lettersRemaining toBe 4

// const wordToGuess = "hoofdpijn" const lettersRemaining = 5 const letterGuessed = "e" expect letterChecker(wordToGuess, letterGuessed) toBe false expect lettersRemaining toBe 5

// als de ingegeven letter voormkomt in het gekozen woord verschijnt de letter op de juiste steepjes

// Dit is een DOM test, extra requirement

// 3. updaten van het aantal pogingen van de gebruiker

// als de ingegeven letter niet voorkomt in het gekozen woord wordt het aantal resterende pogingen verminderd met 1

// const livesRemaining = 5 const letterChecker = true expect liveUpdater(livesRemaining, letterChecker) toBe 5

// const livesRemaining = 5 const letterChecker = false expect liveUpdater(livesRemaining, letterChecker) toBe 4

// 4. updaten van de lijst met letters die al geraden zijn door de gebruiker

// als de ingegeven letter niet voorkomt in het gekozen woord wordt deze toegevoegd aan de lijst reeds geraden letters

// const failedLetters = ["a","f',"g"] const letterGuessed = "e" const letterChecker = true expect failUpdater(failedLetters, letterChecker, letterGuessed) toBe === failedLetters

// const failedLetters = ["a","f',"g"] const letterGuessed = "e" const letterChecker = false expect failUpdater(failedLetters, letterChecker, letterGuessed) toBe === ["a","f',"g","e"]

// 5. verliezen van de game wanneer er geen pogingen meer over zijn

// zodra het aantal pogingen === 0 eindigt het spel met verlies

// const livesRemaining = 0 expect loseGame(livesRemaining) toBe true

// const livesRemaining = 1 expect loseGame(livesRemaining) toBe false

// 6. winnen van de game

// zodra het aantal nog te raden letters van het gekozen woord === 0 eindigt het spel met winst

// zodra het aantal pogingen === 0 eindigt het spel met verlies

// const lettersRemaining = 0 expect winGame(lettersRemaining) toBe true

// const lettersRemaining = 1 expect winGame(livesRemaining) toBe false

// zolang 5 en 6 niet van toepassing zijn kan de gebruiker opnieuw een letter ingeven

// CSS

// er verschijnt een streepje voor iedere letter van het te raden woord waarop later de geraden letters verschijnen

// er verschijnt voor iedere fout geraden letter een ledemaat van de hangman met een animatie

// woorden uit een aparte file halen (zoals de films bij de filmzoeker)

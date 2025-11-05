const FRUIT_WORDS = ["fig", "melon", "nut", "kiwi", "plum", "pear", "date",
  "lime", "litchi", "apple", "mango", "grape", "guava", "lemon", "berry", "olive",
  "papaya", "banana", "raisin", "peach"];
const RED = "\x1B[31m";
const GREEN = "\x1B[32m";
const YELLOW = "\x1B[33m";
const MAGENTA = "\x1B[35m";
const CYAN = "\x1B[36m";
const END_OF_FORMAT_STRING = "\x1B[0m";

function formatText(colour, text) {
  return colour + text + END_OF_FORMAT_STRING;
}

function displayFinalMessage(point, systemGeneratedString, userString) {
  const finalMessage = `
  ${formatText(RED, "!!!GAME OVER!!!")}\n
  Your point : ${formatText(GREEN, point)}\n\n
  The actual words in sequence : ${systemGeneratedString}\n
  You entered : ${userString}`;
  console.log(finalMessage);
}

function generateCuurentWord() {
  const currentWordIndex = Math.floor(Math.random() * FRUIT_WORDS.length);
  return FRUIT_WORDS[currentWordIndex];
}

function generateMessage(round, currentWord) {
  const message = `${formatText(MAGENTA, "ROUND : ")}${formatText(MAGENTA, round)}
  The new word is : ${formatText(YELLOW, currentWord)}`;
  return message;
}

function isNotEqual(systemGeneratedString, memoryString) {
  return systemGeneratedString !== memoryString;
}

function playGame(systemGeneratedWords, round) {
  const currentWord = generateCuurentWord();
  systemGeneratedWords.push(currentWord);
  const systemGeneratedString = systemGeneratedWords.join(" ");
  console.log(generateMessage(round, currentWord));
  const userString = prompt("Enter the elements sequencially : ");
  console.clear();

  if (isNotEqual(systemGeneratedString, userString)) {
    displayFinalMessage(round - 1, systemGeneratedString, userString);
  }

  return isNotEqual(systemGeneratedString, userString);
}

function startGame() {
  const systemGeneratedWords = [];
  let round = 1;
  let isLose = false;

  while (!isLose) {
    isLose = playGame(systemGeneratedWords, round);
    round++;
  }
}

function main() {
  startGame();
}

main();
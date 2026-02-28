const FRUIT_WORDS = ["fig", "melon", "nut", "kiwi", "plum", "pear", "date",
  "lime", "litchi", "apple", "mango", "grape", "guava", "lemon", "berry", "olive",
  "papaya", "banana", "raisin", "peach"];
const FLOWER_WORDS = ["rose", "lily", "pansy", "iris", "bluebell", "tulip", "daisy",
  "lotus", "lilac", "zinnia", "aster", "orchid", "jasmine", "beli", "sunflower", "marigold",
  "hibiscus", "datura", "peony", "viola"];
const COLOUR_WORDS = ["red", "blue", "green", "yellow", "pink", "purple", "orange",
  "brown", "black", "white", "grey", "violet", "indigo", "maroon", "beige", "cyan",
  "magenta", "gold", "silver", "teal"];
const ANIMAL_WORDS = ["dog", "cat", "cow", "pig", "rat", "ant", "bat", "fox", "bear",
  "lion", "tiger", "horse", "sheep", "whale", "zebra", "panda", "snake", "camel", "goose",
  "duck"];
const COUNTRY_WORDS = ["india", "china", "france", "brazil", "cannada", "russia", "mexico", "egypt",
  "turkey", "germany", "nigeria", "norway", "sweden", "denmark", "poland", "finland", "belgium",
  "portugal", "ireland", "japan"];
  
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

function generateCuurentWord(typeOfWords) {
  const currentWordIndex = Math.floor(Math.random() * typeOfWords.length);
  return typeOfWords[currentWordIndex];
}

function generateMessage(round, currentWord) {
  const message = `${formatText(MAGENTA, "ROUND : ")}${formatText(MAGENTA, round)}
  The new word is : ${formatText(YELLOW, currentWord)}`;
  return message;
}

function isNotEqual(systemGeneratedString, memoryString) {
  return systemGeneratedString !== memoryString;
}

function playGame(systemGeneratedWords, round, typeOfWords) {
  const currentWord = generateCuurentWord(typeOfWords);
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

function chooseType(typeOfWords) {
  switch (typeOfWords) {
    case "fruit":
      return FRUIT_WORDS;
    case "flower":
      return FLOWER_WORDS;
    case "colour":
      return COLOUR_WORDS;
    case "animal":
      return ANIMAL_WORDS;
    case "country":
      return COUNTRY_WORDS;
  }
}

function startGame() {
  const systemGeneratedWords = [];
  const typeOfWords = prompt("Enter the type of words you want :");
  const chosenType = chooseType(typeOfWords);
  let round = 1;
  let isLose = false;

  while (!isLose) {
    isLose = playGame(systemGeneratedWords, round, chosenType);
    round++;
  }
}

function showDisclaimer() {
  const introductionMessage = `
  ${formatText(GREEN, "😁 GAME : MEMORY GAME 😁")}\n
  ${formatText(YELLOW, "🤗 General information for game 🤗")}\n\n
  👉 There are 5 types of word : 
     -> animal
     -> colour
     -> country
     -> flower
     -> fruit
  👉 New words will be generated in each round based on the chosen type
  👉 You have to enter all the words in each round in sequence
  👉 If you enter wrong sequence the game will over !!!\n\n\n
  ${formatText(CYAN, "🤗 Instructions to play the game 🤗")}\n\n
  👉 Enter the type of words you want
  👉 See the new word in each round and remember that
  👉 Enter the words from beginning in each round (seperated by space) & press enter`;
  console.log(introductionMessage);
}

function main() {
  showDisclaimer();
  startGame();
}

main();
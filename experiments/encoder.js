const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

function getTextIndex(char) {
  return ALPHABETS.indexOf(char);
}

function getDecodedChar(charIndex, secretNumber) {
  const decodedCharIndex = (charIndex - secretNumber + ALPHABETS.length) % ALPHABETS.length;
  return ALPHABETS[decodedCharIndex];
}

function decodeWords(word, secretNumber) {
  let newWord = "";

  for (let index = 0; index < word.length; index++) {
    const curPosition = getTextIndex(word[index]);
    newWord += getDecodedChar(curPosition, secretNumber);
  }
  return newWord;
}

function decodeText(text, secretNumber) {
  const newTextWords = [];
  const words = text.split(" ");

  for (let index = 0; index < words.length; index++) {
    const newTextWord = decodeWords(words[index], secretNumber);
    newTextWords.push(newTextWord);
  }
  return newTextWords.join(" ");
}

function getEncodedChar(charIndex, secretNumber) {
  const encodedCharIndex = (charIndex + secretNumber) % ALPHABETS.length;
  return ALPHABETS[encodedCharIndex];
}

function encodeWords(word, secretNumber) {
  let newWord = "";

  for (let index = 0; index < word.length; index++) {
    const curPosition = getTextIndex(word[index]);
    newWord += getEncodedChar(curPosition, secretNumber);
  }
  return newWord;
}

function encodeText(text, secretNumber) {
  const newTextWords = [];
  const words = text.split(" ");

  for (let index = 0; index < words.length; index++) {
    const newTextWord = encodeWords(words[index], secretNumber);
    newTextWords.push(newTextWord);
  }
  return newTextWords.join(" ");
}

function selectChoice(decisionNumber, text, secretNumber) {
  switch (decisionNumber) {
    case 0: 
      return encodeText(text, secretNumber);
    case 1:
      return decodeText(text, secretNumber);
  }
}

function startEncodingDecoding() {
  const text = prompt("Enter a text : ");
  const numberAsText = prompt("Enter the secret number : ");
  const secretNumber = parseInt(numberAsText);
  const decision = prompt("Enter your choice:\nEncode[0]/Decode[1]");
  const decisionNumber = parseInt(decision);
  const modifiedText = selectChoice(decisionNumber, text, secretNumber);
  console.log("Modified text :", modifiedText);
}

startEncodingDecoding();
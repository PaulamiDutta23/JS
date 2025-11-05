// Given a string and a single-character delimiter, returns an array of strings
// obtained by splitting the input string at each occurrence of the delimiter.
// The delimiter must be a single character.
// Examples:
// split("a,b,c", ",") => ["a", "b", "c"]
// split("one:two:three", ":") => ["one", "two", "three"]
// split("hello", ",") => ["hello"]
// function sliceChunk(array, chunkStartIndex, delimiter) {
//   const sliceString = array.slice()
// }

function split(sentence, delimiter) {
  const arrayOfChunks = [];
  let curText = sentence;
  let chunkEndIndex = 0;

  while (chunkEndIndex !== -1) {
    chunkEndIndex = curText.indexOf(delimiter);
    const chunk = chunkEndIndex === -1 ? curText : curText.slice(0, chunkEndIndex);
    arrayOfChunks.push(chunk);
    curText = curText.slice(chunkEndIndex + 1);
  }

  return arrayOfChunks;
}

function areElementsEqual(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return areElementsEqual(array1, array2);
}

function formatMessage(input, expectedValue, actualValue) {
  const outputFragment = `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
  console.log(outputFragment);
}

function displayMessage(header, input, expectedValue, actualValue) {
  console.log(header);

  if (!areEqual(expectedValue, actualValue)) {
    return formatMessage(input, expectedValue, actualValue);
  }
}

function testSplit(description, sentence, delimiter, expectedValue) {
  const actualValue = split(sentence, delimiter);
  const input = `${sentence}, ${delimiter}`;
  const isPassed = areEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllSplit() {
  console.log(dashes("Split"));
  testSplit("one words seperated by delimiter", "a,b,c", ",", ["a", "b", "c"]);
  testSplit("multiwords seperated by delimiter", "on:to", ":", ["on", "to"]);
  testSplit("one word without delimiter", "hello", ",", ["hello"]);
  testSplit("delimiter at last", "hello,hi, ", ",", ["hello", "hi", " "]);
  testSplit("empty space and no delimiter", " ", ",", [" "]);
  testSplit("empty space is delimiter", "a,b, ,c,d", " ", ["a,b,", ",c,d"]);
  testSplit("string contains only delimiter", ",", ",", ["", ""]);
  testSplit("string delimiter at the last", "ab,", ",", ["ab", ""]);
  testSplit("2 words, one delimiter at last", "ab,cd,", ",", ["ab", "cd", ""]);
}

testAllSplit();

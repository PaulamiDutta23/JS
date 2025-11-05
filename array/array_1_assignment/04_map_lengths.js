function mapLengths(words) {
  const arrayOfLengths = [];

  for (let index = 0; index < words.length; index++) {
    const wordsLength = words[index].length;
    arrayOfLengths.push(wordsLength);
  }
  return arrayOfLengths;
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
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
}

function displayMessage(header, input, expectedValue, actualValue) {
  console.log(header);

  if (!areEqual(expectedValue, actualValue)) {
    return formatMessage(input, expectedValue, actualValue);
  }
}

function testMapLengths(description, array, expectedValue) {
  const actualValue = mapLengths(array);
  const input = `${array}`;
  const isPassed = areEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllMapLengths() {
  console.log(dashes("Map Lengths"));
  testMapLengths("One word", ["a"], [1]);
  testMapLengths("Multi words", ["apple", "cat", "Four"], [5, 3, 4]);
}

testAllMapLengths();

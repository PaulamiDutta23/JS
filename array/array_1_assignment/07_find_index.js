// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }
  return -1;
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

  if (expectedValue !== actualValue) {
    return formatMessage(input, expectedValue, actualValue);
  }
}

function testFindIndex(description, array, element, expectedValue) {
  const actualValue = findIndex(array, element);
  const input = `${array} | ${element}`;
  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllFindIndex() {
  console.log(dashes("Find Index"));
  testFindIndex("Element at 0th position", [1, 2, 1], 1, 0);
  testFindIndex("Element at middle", ["apple", "tea", "cat", "tea"], "tea", 1);
  testFindIndex("Element at last", [1, true, "tea", "cat", "bat"], "bat", 4);
  testFindIndex("Element absent", [1, true, "tea", "cat", "bat"], "at", -1);
}

testAllFindIndex();
// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
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

function testFindLastIndex(description, array, element, expectedValue) {
  const actualValue = findLastIndex(array, element);
  const input = `${array} | ${element}`;
  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllFindLastIndex() {
  console.log(dashes("Find Index"));
  testFindLastIndex("Element at 0th position", [3, 2, 1], 3, 0);
  testFindLastIndex("Element at middle", [1, "pea", "cat", "tea"], "pea", 1);
  testFindLastIndex("Element at last", [1, true, "tea", "cat", "at"], "at", 4);
  testFindLastIndex("Element absent", [1, 2, "tea", "cat", "bat"], true, -1);
}

testAllFindLastIndex();
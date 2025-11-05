// Given an array return reverse of array. DO NOT USE `.reverse()` function
// Write your own implementation of reverse
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters
function reverse(array) {
  const reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
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

function testReverse(description, array, expectedValue) {
  const actualValue = reverse(array);
  const input = `${array}`;
  const isPassed = areEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllReverse() {
  console.log(dashes("Reverse"));
  testReverse("One length array", [1], [1]);
  testReverse("Multi length array", [1, 2, 3], [3, 2, 1]);
  testReverse("Empty array", [], []);
}

testAllReverse();
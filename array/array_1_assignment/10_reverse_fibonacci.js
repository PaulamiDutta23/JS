function reverseFibonacci(nthValue) {
  let currentTerm = 0;
  let nextTerm = 1;
  const reverseFibonacciSeries = [];

  for (let iterator = 1; iterator <= nthValue; iterator++) {
    reverseFibonacciSeries.unshift(currentTerm);
    const futureTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = futureTerm;
  }

  return reverseFibonacciSeries;
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

function testReverseFibonacci(description, nthValue, expectedValue) {
  const actualValue = reverseFibonacci(nthValue);
  const input = `${nthValue}`;
  const isPassed = areEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllReverseFibonacci() {
  console.log(dashes("Fibonacci series in reverse"));
  testReverseFibonacci("n = 1", 1, [0]);
  testReverseFibonacci("n > 2", 9, [21, 13, 8, 5, 3, 2, 1, 1, 0]);
  testReverseFibonacci("n = 0", 0, []);
  testReverseFibonacci("n = 2", 2, [1, 0]);
}

testAllReverseFibonacci();
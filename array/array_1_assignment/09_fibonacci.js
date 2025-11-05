function fibonacci(nthValue) {
  let currentTerm = 0;
  let nextTerm = 1;
  const fibonacciTermsArray = [];

  for (let iterator = 1; iterator <= nthValue; iterator++) {
    fibonacciTermsArray.push(currentTerm);
    const futureTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = futureTerm;
  }
  return fibonacciTermsArray;
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

function testFibonacci(description, nthValue, expectedValue) {
  const actualValue = fibonacci(nthValue);
  const input = `${nthValue}`;
  const isPassed = areEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllFibonacci() {
  console.log(dashes("Fibonacci series"));
  testFibonacci("n = 1", 1, [0]);
  testFibonacci("n > 2", 9, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
  testFibonacci("n = 0", 0, []);
  testFibonacci("n = 2", 2, [0, 1]);
}

testAllFibonacci();
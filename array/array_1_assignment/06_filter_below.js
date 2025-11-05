function isSmaller(numberToCheck, threshold) {
  return numberToCheck < threshold;
}

function filterBelow(array, threshold) {
  const arrayOfNumbers = [];

  for (let index = 0; index < array.length; index++) {
    if (isSmaller(array[index], threshold)) {
      arrayOfNumbers.push(array[index]);
    }
  }
  return arrayOfNumbers;
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

function testFilterBelow(description, array, threshold, expectedValue) {
  const actualValue = filterBelow(array, threshold);
  const input = `${array} | ${threshold}`;
  const isPassed = areEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllFilterBelow() {
  console.log(dashes("Filter Below"));
  testFilterBelow("One element", [1, 3, 2], 2, [1]);
  testFilterBelow("Multi-elements", [3, 2, 4, 5, 0, -1, 4], 4, [3, 2, 0, -1]);
  testFilterBelow("No element", [1, 3, 2, 4, 7, 6], 0, []);
}

testAllFilterBelow();
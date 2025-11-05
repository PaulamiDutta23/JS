function isGreater(numberToCheck, threshold) {
  return numberToCheck > threshold;
}

function filterAbove(array, threshold) {
  const arrayOfNumbers = [];

  for (let index = 0; index < array.length; index++) {
    if (isGreater(array[index], threshold)) {
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

function testFilterAbove(description, array, threshold, expectedValue) {
  const actualValue = filterAbove(array, threshold);
  const input = `${array} | ${threshold}`;
  const isPassed = areEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllFilterAbove() {
  console.log(dashes("Filter Above"));
  testFilterAbove("One element", [1, 3, 2], 2, [3]);
  testFilterAbove("Multi-elements", [3, 2, 4, 5, 6, -1, 4], 3, [4, 5, 6, 4]);
  testFilterAbove("No element", [1, 3, 2, 4, 7, 6], 10, []);
}

testAllFilterAbove();
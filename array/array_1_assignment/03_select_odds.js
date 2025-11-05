function isOdd(numberToCheck) {
  return numberToCheck % 2 !== 0;
}

function selectOdds(numbers) {
  const arrayOfOdds = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      arrayOfOdds.push(numbers[index]);
    }
  }
  return arrayOfOdds;
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

function testSelectOdds(description, array, expectedValue) {
  const actualValue = selectOdds(array);
  const input = `${array}`;
  const isPassed = areEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllSelectOdds() {
  console.log(dashes("Select Odds"));
  testSelectOdds("One odd element", [1, 2, 4], [1]);
  testSelectOdds("Multiodd elements", [3, 2, 4, 5, 7], [3, 5, 7]);
  testSelectOdds("No odd element", [2, 4, 6], []);
}

testAllSelectOdds();
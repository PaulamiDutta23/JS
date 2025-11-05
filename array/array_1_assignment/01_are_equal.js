// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([1, [22] 3], [1, [22], 3]) => true
// do not modify input parameters
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

  if (expectedValue !== actualValue) {
    return formatMessage(input, expectedValue, actualValue);
  }
}

function testAreEqual(description, array1, array2, expectedValue) {
  const actualValue = areEqual(array1, array2);
  const input = `${array1} | ${array2}`;
  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllAreEqual() {
  console.log(dashes("Are Equal"));
  testAreEqual("One length arrays and equal", [1], [1], false);
  testAreEqual("Multilength arrays and equal", [1, 2, 3], [1, 2, 3], true);
  testAreEqual("Unequal element in multilength arrays", [4, 1], [1, 2], false);
  testAreEqual("Arrays of different length", [1, 2, 3], [1, 2, 3, 4], false);
  testAreEqual("One length arrays and unequal", [1], [2], false);
}

testAllAreEqual();
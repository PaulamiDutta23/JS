// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]
function isArray(element) {
  return typeof element === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function includes(array, target) {
  if (!isArray(array)) {
    return false;
  }

  for (let index = 0; index < array.length; index++) {
    if (areDeepEqual(array[index], target)) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const differenceArray = [];

  for (let index = 0; index < array1.length; index++) {
    if (!includes(array2, array1[index])) {
      differenceArray.push(array1[index]);
    }
  }
  return differenceArray;
}

function formatMessage(input, expectedValue, actualValue) {
  const outputFragment = `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
  console.log(outputFragment);
}

function displayMessage(header, input, expectedValue, actualValue) {
  console.log(header);

  if (!areDeepEqual(expectedValue, actualValue)) {
    return formatMessage(input, expectedValue, actualValue);
  }
}

function testDifference(description, array1, array2, expectedValue) {
  const actualValue = difference(array1, array2);
  const input = `${array1} | ${array2}`;
  const isPassed = areDeepEqual(expectedValue, actualValue);
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllDifference() {
  console.log(dashes("Differenec"));
  testDifference("one unmatch element", [1, 2, 3], [2, 3], [1]);
  testDifference("one unmatch array element", [1, [2, 3]], [1], [[2, 3]]);
  testDifference("no unmatched element", [1, [2]], [1, [2]], []);
  //testDifference("target(array) present", [1, "abc", [1, 2]], [1, 2], true);
}

testAllDifference();
// Given an array and a value, returns true if the value is present in the array, else false.
// Examples:
// includes([1, 2, 3], 2) => true
// includes([1, 2, 3], 4) => false
// includes([], 1) => false
// do not modify input parameters
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

  if (expectedValue !== actualValue) {
    return formatMessage(input, expectedValue, actualValue);
  }
}

function testIncludes(description, array, target, expectedValue) {
  const actualValue = includes(array, target);
  const input = `${array} | ${target}`;
  const isPassed = expectedValue === actualValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllIncludes() {
  console.log(dashes("Includes"));
  testIncludes("target(number) present", [1, 2, 3], 2, true);
  testIncludes("target(string) present", [1, "abc", true], "abc", true);
  testIncludes("target(boolean) present", [1, "abc", false], false, true);
  testIncludes("target(array) present", [1, "abc", [1, 2]], [1, 2], true);
}

testAllIncludes();
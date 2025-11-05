// Given array1 and array2, returns true if both arrays are deeply equal, else false.
// Deep equality means both arrays contain the same elements in the same order,
// including any nested arrays, which must also be deeply equal.
// Examples:
// areDeepEqual([1, 2, 3], [1, 2, 3]) => true
// areDeepEqual([1, [2, 3]], [1, [2, 3]]) => true
// areDeepEqual([1, [2, 3]], [1, [3, 2]]) => false
// areDeepEqual([1, 2], [1, 2, 3]) => false
// areDeepEqual([1, [2, [3]]], [1, [2, [3]]]) => true
// areDeepEqual([1, [2, [3]]], [1, [2, 3]]) => false
// do not modify input parameters
function isNotEqualType(element1, element2) {
  return typeof element1 !== typeof element2;
}

function areSubarrayEqual(array1, array2) {
  if (isNotEqualType(array1, array2)) {
    return false;
  }
  return areDeepEqual(array1, array2);
}

function isArray(array) {
  return typeof array === "object";
}

function areDeepEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (isArray(array1[index])) {
      return areSubarrayEqual(array1[index], array2[index]);
    }
    else if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
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

function testAreDeepEqual(description, array1, array2, expectedValue) {
  const actualValue = areDeepEqual(array1, array2);
  const input = `${array1} | ${array2}`;
  const isPassed = expectedValue === actualValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllAreDeepEqual() {
  console.log(dashes("Are Deep Equal"));
  testAreDeepEqual("one length arrays", ["a"], ["a"], true);
  testAreDeepEqual("multilength arrays without subarray", [1, 2, 3], [1, 2, 3], true);
  testAreDeepEqual("multilength unequal arrays without subarray", [1, 2], [1, 2, 3], false);
  testAreDeepEqual("multilength equal arrays with subarray", [1, [2, 3]], [1, [2, 3]], true);
  testAreDeepEqual("multilength unequal arrays with subarray", [1, [2, 3]], [1, [3, 2]], false);
  testAreDeepEqual("multilength equal arrays with multiple subarrays", [1, [2, [3]]], [1, [2, [3]]], true);
  testAreDeepEqual("multilength unequal arrays with multiple subarrays", [1, [2, [3]]], [1, [2, 3]], false);
  testAreDeepEqual("multilength equal arrays with empty subarray", [1, 2, [], [3]], [1, 2, [], [3]], true);
  testAreDeepEqual("multilength unequal arrays with subarray in middle", [1, 2, [4, 5], 3], [1, 2, [4, 5], 4], false);
}

testAllAreDeepEqual();

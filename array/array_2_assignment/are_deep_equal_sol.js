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
  testAreDeepEqual("multilength equal arrays", [1, 2, 3], [1, 2, 3], true);
  testAreDeepEqual("multilength unequal arrays", [1, 2], [1, 2, 3], false);
  testAreDeepEqual("equal arrays with subarray", [1, [2]], [1, [2]], true);
  testAreDeepEqual("unequal arrays with subarray", [1, [3]], [1, [2]], false);
  testAreDeepEqual("nested arrays & equal", [[2, [3]]], [[2, [3]]], true);
  testAreDeepEqual("nested array & unequal", [[2, [3]]], [[2, 3]], false);
  testAreDeepEqual("empty subarray & equal", [1, 2, []], [1, 2, []], true);
  testAreDeepEqual("subarray in middle", [1, [4], 3], [1, [4], 4], false);
  testAreDeepEqual("equal arrays with empty subarray", [1, []], [1, []], true);
}

testAllAreDeepEqual();

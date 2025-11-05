function isSubstringAt(string, otherString, index, subIndex) {
  if (string[index] !== otherString[subIndex]) {
    return false;
  }

  if (string[index + otherString.length - 1] === otherString[otherString.length - 1]) {
    return true;
  }
  return isSubstringFound(string, otherString, index + 1, subIndex);
}

function isSubstringFound(string, otherString, index, subIndex) {
  if (index === string.length - 1 && !isSubstringAt(string, otherString, index, subIndex)) {
    return false;
  }

  if (isSubstringAt(string, otherString, index, subIndex)) {
    return true;
  }
  return isSubstringFound(string, otherString, index + 1, subIndex);
}

function isSubString(string, otherString) {
  return isSubstringFound(string, otherString, 0, 0);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;

}

function testIsSubString(description, string, otherString, expectedValue) {
  const actualValue = isSubString(string, otherString);
  const input = `${string}, ${otherString}`;

  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;
  console.log(header);

  if (!isPassed) {
    const message = formatText(input, expectedValue, actualValue);
    console.log(message);
  }
}

function main() {
  testIsSubString("Substring at beginning", "ababb", "ab", true);
  testIsSubString("Substring at beginning in one char string", "a", "a", true);
  testIsSubString("Substring not present in one char string", "a", "b", false);
  testIsSubString("Substring not present in multichar string", "abacda", "ef", false);
  testIsSubString("Substring in the middle", "abacda", "acd", true);
  testIsSubString("Substring present at last", "abacda", "cda", true);
}

main();
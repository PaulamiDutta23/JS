function stringToNumber(string) {
  return string - "0";
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
}

function testStringToNumber(description, string, expectedValue) {
  const actualValue = stringToNumber(string);
  const input = `${string}`;
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
  testStringToNumber("Single length string contains more than 0", "1", 1);
  testStringToNumber("Multi length string contains more than 0", "12543", 12543);
  testStringToNumber("Multi length string contains 0 in middle", "103", 103);
  testStringToNumber("Single length string contains 0", "0", 0);
  testStringToNumber("Multi length string contains multiple 0s", "000", 0);
}

main();
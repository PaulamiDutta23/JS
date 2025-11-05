function multiply(multiplier, multiplicand) {
  if (multiplier === 0) {
    return 0;
  }
  return multiplicand + multiply(multiplier - 1, multiplicand);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;

}

function testMultiply(description, multiplier, multiplicand, expectedValue) {
  const actualValue = multiply(multiplier, multiplicand);
  const input = `${multiplier}, ${multiplicand}`;
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
  testMultiply("Multiplicand & Multiplier are positive", 3, 2, 6);
  testMultiply("Multiplicand is greater than multiplier", 5, 7, 35);
  testMultiply("Square of a positive number", 3, 3, 9);
  testMultiply("Multiplicand is 0", 2, 0, 0);
  testMultiply("Multiplier is 0", 0, 12, 0);
  testMultiply("Multiplicand is less than 0", 2, -4, -8);
}

main();
function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }
  return remainder(dividend - divisor, divisor);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;

}

function testRemainder(description, dividend, divisor, expectedValue) {
  const actualValue = remainder(dividend, divisor);
  const input = `${dividend}, ${divisor}`;
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
  testRemainder("Dividend & divisor are positive", 12, 2, 0);
  testRemainder("Dividend is not exactly divisible", 24, 5, 4);
  testRemainder("Dividend is less than divisor", 1, 3, 1);
}

main();
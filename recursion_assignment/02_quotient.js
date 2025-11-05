function divideCount(dividend, divisor, count) {
  if (dividend < divisor) {
    return count;
  }
  return divideCount(dividend - divisor, divisor, count + 1);
}

function quotient(dividend, divisor) {
  if (dividend === divisor) {
    return 1;
  }

  if (dividend < divisor) {
    return 0;
  }
  return divideCount(dividend, divisor, 0);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
}

function testQuotient(description, dividend, divisor, expectedValue) {
  const actualValue = quotient(dividend, divisor);
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
  testQuotient("Dividend exactly divisible", 12, 2, 6);
  testQuotient("Dividend not exactly divisible", 24, 5, 4);
  testQuotient("Dividend less than divisor", 1, 5, 0);
  testQuotient("Dividend zero", 0, 3, 0);
  testQuotient("Dividend less than zero", -3, 3, -1);
  testQuotient("Divisor & dividend less than zero", -3, -3, 1);
}

main();
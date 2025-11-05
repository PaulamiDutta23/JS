function nthFibonacciTerm(nThTerm) {
  if (nThTerm === 1) {
    return 0;
  }

  if (nThTerm === 2) {
    return 1;
  }
  return nthFibonacciTerm(nThTerm - 1) + nthFibonacciTerm(nThTerm - 2);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
}

function testNthFibonacciTerm(description, nThTerm, expectedValue) {
  const actualValue = nthFibonacciTerm(nThTerm);
  const input = `${nThTerm}`;
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
  testNthFibonacciTerm("First term", 1, 0);
  testNthFibonacciTerm("Second term", 2, 1);
  testNthFibonacciTerm("Third term", 3, 1);
  testNthFibonacciTerm("10th term", 10, 34);
}

main();
function sumOfAP(term, distance, valueOfN) {
  if (valueOfN === 0) {
    return 0;
  }
  return term + sumOfAP(term + distance, distance, valueOfN - 1);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
}

function testAP(description, firstTerm, distance, valueOfN, expectedValue) {
  const actualValue = sumOfAP(firstTerm, distance, valueOfN);
  const input = `${firstTerm}, ${distance}, ${valueOfN}`;
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
  testAP("Distance is 1", 1, 1, 5, 15);
  testAP("Distance is more than 1", 2, 3, 4, 26);
  testAP("Distance and number of term same", 1, 3, 1, 1);
  testAP("First term is negative", -1, -2, 4, -16);
  testAP("Distance is negative", 2, -1, 5, 0);
  testAP("Number of term is zero", 2, -1, 0, 0);
}

main();
function hasNoFactorInRange(numberToCheck, factor) {
  if (numberToCheck % factor === 0) {
    return false;
  }

  if (numberToCheck % factor !== 0 && factor === numberToCheck - 1) {
    return true;
  }
  return hasNoFactorInRange(numberToCheck, factor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate <= 1) {
    return false;
  }

  if (primeCandidate === 2) {
    return true;
  }
  return hasNoFactorInRange(primeCandidate, 2);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
}

function testIsPrime(description, primeCandidate, expectedValue) {
  const actualValue = isPrime(primeCandidate);
  const input = `${primeCandidate}`;
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
  testIsPrime("Number is 2", 2, true);
  testIsPrime("Number is greater than 2 and prime", 43, true);
  testIsPrime("Number is greater than 2 and composite", 9, false);
  testIsPrime("Number is 1", 1, false);
  testIsPrime("Number is less than 1", -1, false);
}

main();
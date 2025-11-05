function hasNoFactorInRange(number, factor) {
  if (number % factor === 0) {
    return false;
  }

  if (number % factor !== 0 && factor === number - 1) {
    return true;
  }
  return hasNoFactorInRange(number, factor + 1);
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

function firstPrimeAbove(number) {
  if (isPrime(number + 1)) {
    return number + 1;
  }
  return firstPrimeAbove(number + 1);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
}

function testFirstPrimeAbove(description, number, expectedValue) {
  const actualValue = firstPrimeAbove(number);
  const input = `${number}`;
  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}\n`;
  console.log(header);

  if (!isPassed) {
    const message = formatText(input, expectedValue, actualValue);
    console.log(message);
  }
}

function main() {
  testFirstPrimeAbove("Number is 2", 2, 3);
  testFirstPrimeAbove("Number is 1", 1, 2);
  testFirstPrimeAbove("Number is 0", 0, 2);
  testFirstPrimeAbove("Number is less than 0", -4, 2);
  testFirstPrimeAbove("Number is greater than 2 and prime", 5, 7);
  testFirstPrimeAbove("Number is greater than 2 and non-prime", 21, 23);
  testFirstPrimeAbove("Number is greater than 2 and non-prime", 94, 97);
}

main();
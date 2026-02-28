function hasAnyFactor(numberToCheck, divisor) {
  return numberToCheck % divisor === 0;
}

function checkPrime(numberToCheck) {
  let isPrime = true;
  let currentDivisor = 2;

  while (currentDivisor < numberToCheck) {
    if (hasAnyFactor(numberToCheck, currentDivisor)) {
      isPrime = false;
    }

    currentDivisor++;
  }

  return numberToCheck > 1 && isPrime;
}

function findAllPrimes(startValue, endValue) {
  let primeTerms = "";
  for (let currentTerm = startValue; currentTerm <= endValue; currentTerm++) {
    if (checkPrime(currentTerm)) {
      primeTerms = primeTerms + currentTerm + " ";
    }
  }

  return primeTerms;
}

function showResult(startValue, endValue, expectedPrimes, actualPrimes, isPassed) {
  const firstLine = isPassed + "Start Of range : " + startValue + "\n";
  const secondLine = "End Of range : " + endValue + "\n";
  const thirdLine = "Expected Prime Factors : " + expectedPrimes + "\n";
  const fourthLine = "Actual Prime Factors : " + actualPrimes + "\n";
  console.log(firstLine, secondLine, thirdLine, fourthLine);
}

function testFindPrimes(startValue, endValue, expectedPrimes) {
  const actualPrimes = findAllPrimes(startValue, endValue);
  const isPassed = expectedPrimes === actualPrimes ? "✅" : "❌";
  showResult(startValue, endValue, expectedPrimes, actualPrimes, isPassed);
}

function main() {
  testFindPrimes(0, 5, "2 3 5 ");
  testFindPrimes(1, 10, "2 3 5 7 ");
  testFindPrimes(-5, 15, "2 3 5 7 11 13 ");
  testFindPrimes(20, 30, "23 29 ");
  testFindPrimes(40, 60, "41 43 47 53 59 ");
}

main();
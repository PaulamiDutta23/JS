function hasAnyFactor(numberToCheck, divisor) {
  return numberToCheck % divisor === 0;
}

function checkPrime(numberToCheck) {
  let isPrime = true;
  let currentDivisor = 2;
  
  while (isPrime && currentDivisor < numberToCheck) {
    if (hasAnyFactor(numberToCheck, currentDivisor) ) {
      isPrime = false;
    }
    
    currentDivisor++;
  }

  return numberToCheck > 1 && isPrime;
}

function showResult(numberToCheck, expectedResult, actualResult, isPassed) {
  const firstLine = isPassed + "Number : " + numberToCheck + "\n";
  const secondLine = "Expected Result : " + expectedResult + "\n";
  const thirdLine = "Actual Result : " + actualResult + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testIsPrime(numberToCheck, expectedResult) {
  const actualResult = checkPrime(numberToCheck);
  const isPassed = actualResult === expectedResult ?  "✅" : "❌";
  showResult(numberToCheck, expectedResult, actualResult, isPassed);
}

function main() {
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(4, false);
  testIsPrime(7, true);
  testIsPrime(9, false);
  testIsPrime(11, true);
}

main();
function hasAnyFactor(numberToCheck, divisor) {
  return numberToCheck % divisor === 0;
}

function checkPrime(numberToCheck) {
  let isPrime = true;
  let currentDivisor = 2;
  
  while (currentDivisor < numberToCheck) {
    if (hasAnyFactor(numberToCheck, currentDivisor) ) {
      isPrime = false;
    }
    
    currentDivisor++;
  }

  return numberToCheck > 1 && isPrime;
}

function firstPrimeAbove(givenNumber) {
  let numberToCheck = givenNumber + 1; 
  let firstPrimeAbove = 0;
  
  while (firstPrimeAbove === 0) {
    if (checkPrime(numberToCheck)) {
      firstPrimeAbove = numberToCheck;
      return firstPrimeAbove;
    }
    
    numberToCheck++;
  }
}

function showResult(givenNumber, expectedAbovePrime, actualAbovePrime, isPassed) {
  const firstLine = isPassed + "Number : " + givenNumber + "\n";
  const secondLine = "Expected first above prime : " + expectedAbovePrime + "\n";
  const thirdLine = "Actual first above prime : " + actualAbovePrime + "\n";
  console.log(firstLine, secondLine, thirdLine);
}


function testFirstPrimeAbove(givenNumber, expectedAbovePrime) {
  const actualAbovePrime = firstPrimeAbove(givenNumber);
  const isPassed = expectedAbovePrime === actualAbovePrime ?  "✅" : "❌";
  showResult(givenNumber, expectedAbovePrime, actualAbovePrime, isPassed);
}

function main() {
  testFirstPrimeAbove(11, 13);
  testFirstPrimeAbove(23, 29);
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(97, 101);
  testFirstPrimeAbove(53, 59);
  testFirstPrimeAbove(79, 83);
}

main();
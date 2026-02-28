function isEqual(numberToCheck, numberToCompare) {
  return numberToCheck === numberToCompare;
}

function calculateNumberToCompare(numberToCheck, divisor, countOfDigit) {
  let currentDividend = numberToCheck;
  let numberToCompare = 0;

  while (currentDividend > 0) {
    const eachDigit = currentDividend % divisor;
    currentDividend = (currentDividend - eachDigit) / divisor;
    numberToCompare = numberToCompare + (eachDigit ** countOfDigit);
  }

  return numberToCompare;
}

function countDigitOfNumber(numberToCheck, divisor) {
  let countOfDigit = 0;
  let currentDividend = numberToCheck;
  
  while (currentDividend > 0) {
    const eachDigit = currentDividend % divisor;
    currentDividend = (currentDividend - eachDigit) / divisor;
    countOfDigit++;
  }
  
  return countOfDigit;
}

function isArmstrong(numberToCheck) {
  const divisor = 10;
  const countOfDigit = countDigitOfNumber(numberToCheck, divisor);
  const numberToCompare = calculateNumberToCompare(numberToCheck, divisor, countOfDigit);
  return isEqual(numberToCheck, numberToCompare);
}

function showResult(numberToCheck, expectedResult, actualResult, isPassed) {
  const firstLine = isPassed + "Number : " + numberToCheck + "\n";
  const secondLine = "Expected Result : " + expectedResult + "\n";
  const thirdLine = "Actual Result : " + actualResult + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testIsArmstrong(numberToCheck, expectedResult) {
  const actualResult = isArmstrong(numberToCheck);
  const isPassed = actualResult === expectedResult ?  "✅" : "❌";
  showResult(numberToCheck, expectedResult, actualResult, isPassed);
}

function main() {
  testIsArmstrong(12, false); 
  testIsArmstrong(1, true); 
  testIsArmstrong(0, true); 
  testIsArmstrong(153, true); 
  testIsArmstrong(1634, true); 
  testIsArmstrong(1512, false); 
}

main();
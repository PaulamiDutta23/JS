function isEqual(numberToCheck, reverseNumber) {
  return numberToCheck === reverseNumber;
}

function calculateReverseNumber(numberToCheck) {
  const divisor = 10;
  let reverseNumber = 0;
  let currentDividend = numberToCheck;
  
  while (currentDividend > 0) {
    const eachDigit = currentDividend % divisor;
    reverseNumber = (reverseNumber * divisor) + eachDigit;
    currentDividend = (currentDividend - eachDigit) / divisor;
  }
  return reverseNumber;
}

function isPalindrome(numberToCheck) {
  const reverseNumber = calculateReverseNumber(numberToCheck);
  return isEqual(numberToCheck, reverseNumber);
}


function showResult(numberToCheck, expectedResult, actualResult, isPassed) {
  const firstLine = isPassed + "Number : " + numberToCheck + "\n";
  const secondLine = "Expected Result : " + expectedResult + "\n";
  const thirdLine = "Actual Result : " + actualResult + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testIsPalindrome(numberToCheck, expectedResult) {
  const actualResult = isPalindrome(numberToCheck);
  const isPassed = actualResult === expectedResult ?  "✅" : "❌";
  showResult(numberToCheck, expectedResult, actualResult, isPassed);
}

function main() {
  testIsPalindrome(0, true);
  testIsPalindrome(10, false);
  testIsPalindrome(11, true);
  testIsPalindrome(222, true);
  testIsPalindrome(1234, false);
  testIsPalindrome(505, true);
}

main();

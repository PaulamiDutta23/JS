function findSmaller(firstNumber, secondNumber) {
  const smallNumber =  firstNumber < secondNumber ? firstNumber : secondNumber;
  return smallNumber;
}

function findLarger(firstNumber, secondNumber) {
  const largeNumber =  firstNumber > secondNumber ? firstNumber : secondNumber;
  return largeNumber;
}

function calculateHCF (firstNumber, secondNumber) {
  let dividend = findLarger(firstNumber, secondNumber);
  let divisor = findSmaller(firstNumber, secondNumber);
  
  while (divisor !== 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return dividend;
}

function calculateHCF(firstNumber, secondNumber) {
  const highestCommonFactor = calculateHCF(firstNumber, secondNumber);
  const productOfTwoNumbers = firstNumber * secondNumber;
  const lowestCommonMultiple = productOfTwoNumbers / highestCommonFactor;
  return lowestCommonMultiple;
}

function showResult(firstNumber, secondNumber, expectedLCM, actualLCM, isPassed) {
  const firstLine = isPassed + "First Number : " + firstNumber + "\n";
  const secondLine = "second Number : " + secondNumber + "\n";
  const thirdLine = "Expected LCM : " + expectedLCM + "\n";
  const fourthLine = "Actual LCM : " + actualLCM + "\n";
  console.log(firstLine, secondLine, thirdLine, fourthLine);
}

function testHCF(firstNumber, secondNumber, expectedLCM) {
  const actualLCM = calculateHCF(firstNumber, secondNumber);
  const isPassed = actualLCM === expectedLCM ?  "✅" : "❌";
  showResult(firstNumber, secondNumber, expectedLCM, actualLCM, isPassed);
}

function main() {
  testHCF(4, 3, 12);
  testHCF(1, 2, 2);
  testHCF(14, 35, 70);
  testHCF(15, 25, 75);
  testHCF(36, 18, 36);
  testHCF(27, 36, 108);
}

main();
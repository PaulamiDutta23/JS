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

function showResult(firstNumber, secondNumber, expectedHCF, actualHCF, isPassed) {
  const firstLine = isPassed + "First Number : " + firstNumber + "\n";
  const secondLine = "second Number : " + secondNumber + "\n";
  const thirdLine = "Expected HCF : " + expectedHCF + "\n";
  const fourthLine = "Actual HCF : " + actualHCF + "\n";
  console.log(firstLine, secondLine, thirdLine, fourthLine);
}

function testHCF(firstNumber, secondNumber, expectedHCF) {
  const actualHCF = calculateHCF(firstNumber, secondNumber);
  const isPassed = actualHCF === expectedHCF ?  "✅" : "❌";
  showResult(firstNumber, secondNumber, expectedHCF, actualHCF, isPassed);
}

function main() {
  testHCF(4, 3, 1);
  testHCF(1, 2, 1);
  testHCF(1, 1, 1);
  testHCF(0, 5, 5);
  testHCF(36, 27, 9);
  testHCF(70, 84, 14);
}

main();
function calculateSquareRoot(numberToCalculate) {
  const squareRootCalculator = 0.5;
  const squareRootOfNumber = numberToCalculate ** squareRootCalculator;
  return squareRootOfNumber;
}

function isApproximatelyEqual(expectedResult, calculatedResult) {
  const delta = calculatedResult - expectedResult;
  const isApproximate = delta > 0.005 || delta < 0.005;
  return isApproximate; 
}

function showResult(isPassed, numberToCalculate, expectedResult, calculatedResult) {
  const firstLine = isPassed + " Number : " + numberToCalculate + "\n";
  const secondLine = "Expected Output : " + expectedResult + "\n";
  const thirdLine = "Calculated Result : " + calculatedResult + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testSquareRoot(numberToCalculate, expectedResult) {
  const calculatedResult = calculateSquareRoot(numberToCalculate);
  const isPassed = isApproximatelyEqual(expectedResult, calculatedResult) ? "✅" : "❌";
  showResult(isPassed, numberToCalculate, expectedResult, calculatedResult);
}

function main() {
  console.log("Calculation of square root of a given number : \n");
  testSquareRoot(1, 1);
  testSquareRoot(2, 1.41);
  testSquareRoot(5, 2.24);
  testSquareRoot(9, 3);
  testSquareRoot(20, 4.47);
  testSquareRoot(36, 6);
}

main();
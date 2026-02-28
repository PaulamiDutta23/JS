function calculateFactorial(numberToFindFactorial) {
  let factorialOfNumber = 1;
  
  for (let currentTerm = 2; currentTerm <= numberToFindFactorial; currentTerm++) {
    factorialOfNumber = factorialOfNumber * currentTerm;
  }

  return factorialOfNumber;
}

function showResult(numberToFindFactorial, expectedValue, actualValue, isPassed) {
  const firstLine = isPassed + "Number : " + numberToFindFactorial + "\n";
  const secondLine = "Expected result : " + expectedValue + "\n";
  const thirdLine = "Actual result : " + actualValue + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testFactorial(numberToFindFactorial, expectedValue) {
  const actualValue = calculateFactorial(numberToFindFactorial);
  const isPassed = expectedValue === actualValue ?  "✅" : "❌";
  showResult(numberToFindFactorial, expectedValue, actualValue, isPassed);
}

function main() { 
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(3, 6);
  testFactorial(5, 120);
  testFactorial(6, 720);
  testFactorial(7, 5040);
}

main();
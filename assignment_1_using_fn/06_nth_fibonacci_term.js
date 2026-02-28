function calculateNthFibonacciTerm(nThValue) {
  let currentTerm = 0;
  let nextTerm = 1;
  
  for (let currentPosition = 1; currentPosition < nThValue; currentPosition++) {
    const futureTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = futureTerm;
  }
  
  return currentTerm;

}

function showResult(nThValue, expectedTerm, actualTerm, isPassed) {
  const firstLine = isPassed + "n : " + nThValue + "\n";
  const secondLine = "Expected nth term : " + expectedTerm + "\n";
  const thirdLine = "Actual nth term : " + actualTerm + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testNthFibonacciTerm(nThValue, expectedTerm) {
  const actualTerm = calculateNthFibonacciTerm(nThValue);
  const isPassed = expectedTerm === actualTerm ?  "✅" : "❌";
  showResult(nThValue, expectedTerm, actualTerm, isPassed);
}

function main() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(10, 34);
}

main();
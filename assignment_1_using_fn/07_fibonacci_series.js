function generateFibonacciSeries(nThValue) {
  let currentTerm = 0;
  let nextTerm = 1;
  let actualTerms = "";
  
  for (let currentPosition = 1; currentPosition <= nThValue; currentPosition++) {
    actualTerms = actualTerms + currentTerm + " ";
    const futureTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = futureTerm;
  }

  return actualTerms;
}

function showResult(nThValue, expectedTerms, actualTerms, isPassed) {
  const firstLine = isPassed + "n : " + nThValue + "\n";
  const secondLine = "Expected terms : " + expectedTerms + "\n";
  const thirdLine = "Actual terms : " + actualTerms + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testFibonacciSeries(nThValue, expectedTerms) {
  const actualTerms = generateFibonacciSeries(nThValue);
  const isPassed = expectedTerms === actualTerms ?  "✅" : "❌";
  showResult(nThValue, expectedTerms, actualTerms, isPassed);
}

function main() {
  testFibonacciSeries(1, "0 ");
  testFibonacciSeries(3, "0 1 1 ");
  testFibonacciSeries(5, "0 1 1 2 3 ");
  testFibonacciSeries(10, "0 1 1 2 3 5 8 13 21 34 ");
  testFibonacciSeries(2, "0 1 ");
  testFibonacciSeries(0, "");
}

main();
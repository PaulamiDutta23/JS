function isFoundPrimeFactor(currentDividend, currentPrimeFactor) {
  return currentDividend % currentPrimeFactor === 0; 
}

function producePrimeFactors(numbertoFactorise) {
  let currentDividend = numbertoFactorise;
  let currentPrimeFactor = 2;
  let primeFactors = "";
  
  while (currentDividend > 1) {
    if (isFoundPrimeFactor(currentDividend, currentPrimeFactor)) {
      primeFactors = primeFactors + currentPrimeFactor + " ";
      currentDividend = currentDividend / currentPrimeFactor;
      currentPrimeFactor = 2;
    } else {
      currentPrimeFactor++;
    }
  }
  return primeFactors;
}

function showResult(numbertoFactorise, expectedPrimeFactors, calculatedPrimeFactors, isPassed) {
  const firstLine = isPassed + "Number : " + numbertoFactorise + "\n";
  const secondLine = "Expected Prime Factors : "  + expectedPrimeFactors + "\n";
  const thirdLine = "Actual Prime Factors : " + calculatedPrimeFactors + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testPrimeFactors(numbertoFactorise, expectedPrimeFactors) {
  const calculatedPrimeFactors = producePrimeFactors(numbertoFactorise);
  const isPassed = calculatedPrimeFactors === expectedPrimeFactors ?  "✅" : "❌";
  showResult(numbertoFactorise, expectedPrimeFactors, calculatedPrimeFactors, isPassed);
}

function main() {
  testPrimeFactors(2, "2 ");
  testPrimeFactors(3, "3 ");
  testPrimeFactors(4, "2 2 ");
  testPrimeFactors(10, "2 5 ");
  testPrimeFactors(12, "2 2 3 ");
  testPrimeFactors(18, "2 3 3 ");
  testPrimeFactors(23, "23 ");
  testPrimeFactors(30, "2 3 5 ");
}

main();
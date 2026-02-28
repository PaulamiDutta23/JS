function calculateApSeriesResult(startOfRange, distanceBetweenTwoTerms, endOfRange) {
  let resultOfAP = 0;
  let currentTerm = startOfRange;

  for (let loopIterator = 1; loopIterator <= endOfRange; loopIterator++) {
    resultOfAP += currentTerm;
    currentTerm += distanceBetweenTwoTerms;
  }

  return resultOfAP;
}

function showResult(startOfRange, distanceBetweenTwoTerms, endOfRange, expectedApResult, calculatedApResult, isPassed) {
  const firstLine = isPassed + "Start of Range : " + startOfRange + "\n";
  const secondLine = "End of Range : " + endOfRange + "\n";
  const thirdLine = "Distance between two terms : " + distanceBetweenTwoTerms + "\n";
  const fourthLine = "Expected output : " + expectedApResult + "\n";
  const fifthLine = "Calculated output : " + calculatedApResult + "\n";
  console.log(firstLine, secondLine, thirdLine, fourthLine, fifthLine);

}

function testApSeriesResult(startOfRange, distanceBetweenTwoTerms, endOfRange, expectedApResult) {
  const calculatedApResult = calculateApSeriesResult(startOfRange, distanceBetweenTwoTerms, endOfRange);
  const isPassed = calculatedApResult === expectedApResult ? "✅" : "❌";
  showResult(startOfRange, distanceBetweenTwoTerms, endOfRange, expectedApResult, calculatedApResult, isPassed);
}

function main() {
  console.log("Result of AP series");
  testApSeriesResult(0, 2, 5, 20);
  testApSeriesResult(1, 1, 10, 55);
  testApSeriesResult(0, 3, 3, 9);
  testApSeriesResult(0, 5, 5, 50);
  testApSeriesResult(2, 2, 5, 30);
  testApSeriesResult(10, 10, 5, 150);
}

main();
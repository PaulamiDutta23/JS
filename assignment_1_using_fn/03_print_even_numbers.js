function produceFirstEven(startValue) {
  const firstEvenTerm = startValue % 2 === 0 ? startValue : startValue + 1;
  return firstEvenTerm;
}

function printAllEven(startValue, endValue) {
  const firstEvenTerm = produceFirstEven(startValue);
  let actualEvens = "";
  
  for (let evenTerm = firstEvenTerm; evenTerm <= endValue; evenTerm += 2) {
    actualEvens = actualEvens + evenTerm + " ";
  }

  return actualEvens;
}

function showResult(startValue, endValue, expectedEvens, actualEvens, isPassed) {
  const firstLine = isPassed + "Start Of range : " + startValue+ "\n";
  const secondLine = "End Of range : " + endValue+ "\n";
  const thirdLine = "Expected Prime Factors : "  + expectedEvens + "\n";
  const fourthLine = "Actual Prime Factors : " + actualEvens + "\n";
  console.log(firstLine, secondLine, thirdLine, fourthLine);
}

function testAllEvenNumber(startValue, endValue, expectedEvens) {
  const actualEvens = printAllEven(startValue, endValue);
  const isPassed = expectedEvens === actualEvens ?  "✅" : "❌";
  showResult(startValue, endValue, expectedEvens, actualEvens, isPassed);
}

function main() {
  testAllEvenNumber(0, 10, "0 2 4 6 8 10 ");
  testAllEvenNumber(-10, 10, "-10 -8 -6 -4 -2 0 2 4 6 8 10 ");
  testAllEvenNumber(21, 30, "22 24 26 28 30 ");
  testAllEvenNumber(1, 5, "2 4 ");
  testAllEvenNumber(55, 66, "56 58 60 62 64 66 ");
  testAllEvenNumber(-5, 5, "-4 -2 0 2 4 ");
}

main();
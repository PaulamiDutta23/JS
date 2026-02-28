function findSimpleInterest(principal, interestRate, time) {
  return (principal * interestRate * time) / 100;
}

function showResult(principal, interestRate, time, expectedValue, actualValue, isPassed) {
  const firstLine = isPassed + "Principal : " + principal + "\n";
  const secondLine = "Rate of Interest : " + interestRate + "\n";
  const thirdLine = "Time Period : " + time + "\n";
  const fourthLine = "Expected Output : " + expectedValue + "\n";
  const fifthLine = "Calculated Output : " + actualValue + "\n";
  console.log(firstLine, secondLine, thirdLine, fourthLine, fifthLine);
}

function testSimpleInterest(principal, interestRate, time, expectedValue) {
  const actualValue = findSimpleInterest(principal, interestRate, time);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  showResult(principal, interestRate, time, expectedValue, actualValue, isPassed);
}

function main() {
  testSimpleInterest(0, 1, 2, 0);
  testSimpleInterest(100, 2, 2, 4);
  testSimpleInterest(100, 2, 3, 6);
  testSimpleInterest(200, 3, 2, 12);
  testSimpleInterest(1500, 5, 2, 150);
  testSimpleInterest(2000, 5, 2, 200);
  testSimpleInterest(500, 2, 5, 50);
  testSimpleInterest(600, 5, 2, 60);
  testSimpleInterest(1500, 0.5, 2, 15);
  testSimpleInterest(7500, 4, 3, 900);
}

main();
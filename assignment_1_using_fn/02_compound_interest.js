function findSimpleInterest(principal, interestRate) {
  return (principal * interestRate) / 100;
}

function findCompoundInterest(principal, time, interestRate) {
  let amount = principal;

  for (let iterator = 1; iterator <= time; iterator++) {
    const interestInEachYear = findSimpleInterest(amount, interestRate);
    amount = amount + interestInEachYear;
  }

  const compoundInterest = amount - principal;

  return compoundInterest;
}

function showResult(principal, interestRate, time, expectedValue, actualValue, isPassed) {
  const firstLine = isPassed + "Principal : " + principal + "\n";
  const secondLine = "Rate of Interest : " + interestRate + "\n";
  const thirdLine = "Time Period : " + time + "\n";
  const fourthLine = "Expected Output : " + expectedValue + "\n";
  const fifthLine = "Calculated Output : " + actualValue + "\n";
  console.log(firstLine, secondLine, thirdLine, fourthLine, fifthLine);
}

function isApproximatelyEqual(expectedValue, actualValue) {
  const delta = actualValue - expectedValue;
  return delta > 0.005 || delta < 0.005;
}

function testCompoundInterest(principal, time, interestRate, expectedValue) {
  const actualValue = findCompoundInterest(principal, time, interestRate);
  const isPassed = isApproximatelyEqual(expectedValue, actualValue) ? "✅" : "❌";
  showResult(principal, interestRate, time, expectedValue, actualValue, isPassed);
}

function main() {
  testCompoundInterest(1000, 4, 2, 82.43);
  testCompoundInterest(200, 3, 0.5, 3.01);
  testCompoundInterest(100, 2, 0.2, 0.4);
  testCompoundInterest(1500, 5, 0.3, 22.63);
  testCompoundInterest(250, 4, 3, 31.37);
  testCompoundInterest(1700, 2, 4, 138.72);
}

main();
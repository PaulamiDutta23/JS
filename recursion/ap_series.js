function calculateAP(endTerm){
  if (endTerm === 0) {
    return 0;
  }

  return endTerm + calculateAP(endTerm - 1);
}

function display(number, expectedValue) {
  const result = calculateAP(number);
  const isPassed = result === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Number of terms: ", number);
  console.log("Expected value :", expectedValue, "| Actual value : ", result, "\n");
}

function testCalculateAP() {
  console.log("Sum of natural numbers :\n");
  display(0, 0);
  display(1, 1);
  display(2, 3);
  display(3, 6);
  display(4, 10);
  display(5, 15);
}

testCalculateAP();
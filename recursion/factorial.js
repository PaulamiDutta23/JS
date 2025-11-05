function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

function display(number, expectedValue) {
  const result = factorial(number);
  const isPassed = result === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Number : ", number);
  console.log("Expected value :", expectedValue, "| Actual value : ", result, "\n");
}

function testFactorial() {
  console.log("Factorials :\n");
  display(0, 1);
  display(1, 1);
  display(2, 2);
  display(3, 6);
  display(4, 24);
  display(5, 120);
}

testFactorial();
/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function isApproximate(expectedValue, actualValue) {
  const delta = actualValue - expectedValue;
  const isApprox = delta > 0.005 || delta < 0.005;
  return isApprox;
}

function convert(from, to, value) {
  if (from === to) {
    return value;
  }

  if (from === "K" && to === "C") {
    return value - 273.15;
  }

  if (from === "C" && to === "K") {
    return value + 273.15;
  }

  if (from === "F" && to === "C") {
    return (value - 32) * (5 / 9);
  }

  if (from === "C" && to === "F") {
    return ((value * 9) + 160) / 5;
  }

  if ((from === "K" && to === "F") || (from === "F" && to === "K")) {
    return convert("C", to, convert(from, "C", value));
  }
  return "NaN";
}

function testConvert(from, to, value, expectedValue) {
  const actualValue = convert(from, to, value);
  const isPassed = isApproximate(expectedValue, actualValue) ? "✅" : "❌";
  console.log(isPassed);
  console.log("From : ", from);
  console.log("To : ", to);
  console.log("Value : ", value);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testConvert("K", "C", 0, -273.15);
  testConvert("C", "K", -173.15, 100);
  testConvert("F", "C", -40, -40);
  testConvert("C", "F", 37, 98.6);
  testConvert("F", "K", 98.6, 310.15);
  testConvert("K", "F", 100, -279.67);
  testConvert("K", "K", 100, 100);
}

main();
const OPERATION_ARRAY = ["+", "-", "*", "/", "%", "**"];

function exponent(baseNumber, power) {
  return baseNumber ** power;
}

function remainder(dividend, divisor) {
  return dividend % divisor;
}

function quotient(dividend, divisor) {
  return dividend / divisor;
}

function multiply(multiplicand, multiplier) {
  return multiplicand * multiplier;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function chooseOperation(firstNumber, secondNumber, operationIndex) {
  switch (operationIndex) {
    case 0:
      return add(firstNumber, secondNumber);
    case 1:
      return subtract(firstNumber, secondNumber);
    case 2:
      return multiply(firstNumber, secondNumber);
    case 3:
      return quotient(firstNumber, secondNumber);
    case 4:
      return remainder(firstNumber, secondNumber);
    case 5:
      return exponent(firstNumber, secondNumber);
  }
}

function startCalculation() {
  const firstNumber = +prompt("\nEnter the first number :");
  const secondNumber = +prompt("Enter the second number :");
  const operation = prompt("Enter the operation :");
  const operationIndex = OPERATION_ARRAY.indexOf(operation);
  const result = chooseOperation(firstNumber, secondNumber, operationIndex);
  console.log("\nResult :", result);
}

function calculateAgain() {
  const decision = confirm("\nDo you want to calculate again?");
  return decision;
}

function showDisclaimer() {
  const introductionMessage = `
  😁 CALCULATOR 😁\n
  🤗 Read the instructions 🤗\n\n
  👉 Enter 2 numbers
  👉 Enter the operation as follows ->
     + : Addition
     - : Subtracttion
     * : Multiplication
     / : Division
     % : Remainder
     ** : Exponent`;
  console.log(introductionMessage);
}

function main() {
  showDisclaimer();
  startCalculation();

  while (calculateAgain()) {
    console.clear();
    startCalculation();
  }
}

main();
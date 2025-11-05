function additionOfTwoNumbers(a, b) {
  return a + b;
}

function subtractionOfTwoNumbers(a, b) {
  //return a - b;
  return additionOfTwoNumbers(a, -b);
}

function productOfTwoNumbers(a, b) {
  let product = 0;

  for (let iterator = 1; iterator <= b; iterator++) {
    product = additionOfTwoNumbers(product, a); 
  }

  return product;
}

const firstNumber = 4;
const secondNumber = 8;

const sum = additionOfTwoNumbers(firstNumber, secondNumber);
const difference = subtractionOfTwoNumbers(firstNumber, secondNumber);
const product = productOfTwoNumbers(firstNumber, secondNumber);

console.log(sum, difference, product);
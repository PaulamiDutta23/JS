const add = function(value1, value2) {
  return value1 + value2;
};

const sub = function(value1, value2) {
  return value1 - value2;
};

const product = function(value1, value2) {
  return value1 * value2;
};

const quotient = function(value1, value2) {
  return value1 / value2;
};

const remainder = function(value1, value2) {
  return value1 % value2;
};

const calculator = function(operation, operand1, operand2) {
  return operation(operand1, operand2);
};

console.log("Addition : ", calculator(add, 5, 3));
console.log("Subtraction : ", calculator(sub, 5, 3));
console.log("Product : ", calculator(product, 5, 3));
console.log("Quotient : ", calculator(quotient, 5, 3));
console.log("Remainder : ", calculator(remainder, 5, 3));
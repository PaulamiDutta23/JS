const operation = function () {
  return {
    add : (a,b) => a + b,
    sub : (a,b) => a - b,
    mul : (a,b) => a * b,
    div : (a,b) => a / b,
  };
};

const calculator = operation();

console.log(calculator.add(2, 3));
console.log(calculator.sub(6, 3));
console.log(calculator.mul(9, 3));
console.log(calculator.div(4, 3));
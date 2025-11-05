function calculateFactorial(x) {
  let factorial = 1;
  for (let currentTerm = 2; currentTerm <= x; currentTerm++) {
    factorial = factorial * currentTerm;
  }

  return factorial;
}

const factorialOfNumber = calculateFactorial(6);

console.log(factorialOfNumber);
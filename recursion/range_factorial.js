function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

function rangeFactorial(startValue, endValue) {
  
}

const closingRange = 8;
const startingRange = 0;

for(let eachTerm = startingRange; eachTerm <= closingRange; eachTerm++) {
  let result = 1;
  for(let currentTerm = 1; currentTerm <= eachTerm; currentTerm ++) {
    result = result * currentTerm;
  }
  console.log("factorial of", eachTerm, "is", result);
}
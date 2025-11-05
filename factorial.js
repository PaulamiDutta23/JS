const number = 6;
let result = 1;

for(let currentTerm = 1; currentTerm <= number; currentTerm ++) {
  result = result * currentTerm;
}

console.log("Factorial of",number,"is",result);
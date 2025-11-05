const number = 9;
let isDivisble = false;

for(let currentTerm = 2; currentTerm < number; currentTerm ++) {
  if(number % currentTerm === 0) {
    isDivisble = true;
  }
console.log(number, currentTerm, isDivisble);
}
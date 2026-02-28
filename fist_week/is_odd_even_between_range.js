const finalRange = 10;
let result = "";

for(let eachTerm = 0; eachTerm <= finalRange; eachTerm++) {
  result = (eachTerm % 2 === 0) ? "is even" : "is odd";
  console.log(eachTerm, result);
}
const finalTerm = 5;
let sum = 0;

for (let currentTerm = 1; currentTerm <= finalTerm; currentTerm++) {
    sum += currentTerm;
}

console.log("The result of AP series upto", finalTerm, "is", sum);
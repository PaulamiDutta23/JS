const firstNumber = 8;
const secondNumber = 8;

// const result = firstNumber > secondNumber ? firstNumber : secondNumber > firstNumber ? secondNumber : "Both are equal";
// const otherNumber = result === firstNumber ? secondNumber : result === secondNumber ? firstNumber : "";
// const suffix = result !== "Both are equal" ? "is larger than" : "";
// console.log(result, suffix, otherNumber);

if(firstNumber !== secondNumber) {
    const result = firstNumber > secondNumber ? firstNumber : secondNumber;
    const otherNumber = result == firstNumber ? secondNumber : firstNumber;
    const suffix = "is larger than";
    console.log(result,suffix,otherNumber);
}
else {
    console.log("Both are equal");
}
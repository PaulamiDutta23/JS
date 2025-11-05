const number = 6;
const highestMultiplier = 10;
let product = 1;

for(let multiplier = 1; multiplier <= highestMultiplier; multiplier++) {
    product = number * multiplier;
    console.log(number,"*",multiplier,"=",product);
}
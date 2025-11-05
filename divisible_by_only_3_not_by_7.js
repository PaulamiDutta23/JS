const startOfRange = 0;
const endOfRange = 50;
let isDivisible;

console.log("All the numbers divisible by 3 but not by 7 between the range from", startOfRange, "to",endOfRange,"are :");

for(let numberToCheck = startOfRange; numberToCheck <= endOfRange; numberToCheck++) {
    isDivisible = numberToCheck % 3 === 0 && numberToCheck % 7 !== 0;
    if(isDivisible) {
        console.log(numberToCheck);
    }
}
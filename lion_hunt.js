const testCase1 = "LZ";
const testCase2 = "Z  L";
const testCase3 = "L  L";
const testCase4 = "Z  Z   Z";
const testCase5 = "L  ZL Z";
const testCase6 = "Z LL  Z";
const testCaseToUse = testCase6;
const testCaseLength = testCaseToUse.length;
let countOfL = 0;
let countOfZ = 0;
let countOfSpace = 0;
let shortestDistance;
let count = 0;
for(let index = 0; index < testCaseLength; index++) {
    if(testCaseToUse[index] === "L" || testCaseToUse[index] === "Z") {
        count = 0;
        if(testCaseToUse[index+1] === "L" || testCaseToUse[index+1] === "Z") {
            shortestDistance = 0;
        }
        else if(testCaseToUse[index + 1] === " ") {
            count++;    
        }
    }
    else if(testCaseToUse[index] === " ") {
        count++;
        if(shortestDistance > count) {
            shortestDistance = count;
        }
        else if(shortestDistance === undefined) {
            shortestDistance = count;
        }
    }
}

for(let index = 0; index < testCaseLength; index++) {
    if(testCaseToUse[index] === "L") {
        countOfL++;
    }
    else if(testCaseToUse[index] === "Z") {
        countOfZ++;
    }
    else if(testCaseToUse[index] === " ") {
        countOfSpace++;
    }
}

if(!countOfL || !countOfZ) {
    shortestDistance = -1;
}
console.log("Length of \"",testCaseToUse,"\"is",testCaseLength);
console.log("No of L =",countOfL);
console.log("No of Z =",countOfZ);
console.log("No of Space =",countOfSpace);
console.log("Shortest distance between L and Z =",shortestDistance);
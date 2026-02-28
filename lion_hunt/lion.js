const testCaseToUse = "LL";
let space = 0;
for (let index = 0; index < testCaseToUse.length; index++) {
    if(testCaseToUse[index] === "Z" || testCaseToUse[index] === "L") {
        if(testCaseToUse[index + 1] === "Z" || testCaseToUse[index + 1] === "L") {
            space = (testCaseToUse[index] !== testCaseToUse[index + 1]) ? 0 : -1;
        }
    }
    else if(testCaseToUse[index] === " ") {
        space++;
        }
}
console.log(testCaseToUse,space);
// "Shortest Distance between L and Z is",
const testCaseToUse = "     ";
const testCaseLength = testCaseToUse.length;
let countOfL = 0;
let countOfZ = 0;
let countOfSpace = 0;
let shortestDistance;
let count = 0;
for(let index = 0; index < testCaseLength; index++) {
    if(testCaseToUse[index] === "L" || testCaseToUse[index] === "Z") {
        count = 0;
        if((testCaseToUse[index+1] === "L" || testCaseToUse[index+1] === "Z") && testCaseToUse[index] !== testCaseToUse[index + 1]) {
            shortestDistance = 0;  
            console.log("inside if if");  
        }
        else if(testCaseToUse[index + 1] === " ") {
            count = 0;
            console.log("inside if elseif");   
        }
    }
    else if(testCaseToUse[index] === " " && testCaseToUse[index + 1] === " ") {
        count++;
        console.log("inside elseif");
        
    }
    else if(testCaseToUse[index] === " " && testCaseToUse[index + 1] === "L" || testCaseToUse[index + 1] === "Z") {
        count++;
        if(shortestDistance > count) {
            shortestDistance = count;
            console.log("inside elseif if");  
        }
        else if(shortestDistance === undefined) {
            shortestDistance = count;
            console.log("inside elseif elseif");  
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

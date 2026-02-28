const endRangeString = ".....";
let resultString = "";
let currentString = "";

while(currentString <= endRangeString) {
    resultString += currentString;
    console.log(resultString, currentString, resultString.length);
    currentString += ".";
}
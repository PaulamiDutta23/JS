/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function isSubstringAt(string, substring, startIndex) {
  for (let index = 0; index < substring.length; index++) {
    if (string[startIndex + index] !== substring[index]) {
      return false;
    }
  }

  return true;
}

function endsWith(string, substring) {
  const startIndex = string.length - substring.length;
  return isSubstringAt(string, substring, startIndex);
}

function testEndsWith(string, substring, expectedValue) {
  const actualValue = endsWith(string, substring);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given string : ", string);
  console.log("Given Substring : ", substring);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testEndsWith("hello", "lo", true);
  testEndsWith("hello world", "lo", false);
  testEndsWith("Paulami", "ami", true);
  testEndsWith("bengaluru", "luru", true);
  testEndsWith(" Durga Puja", "ja ", false);
}

main();
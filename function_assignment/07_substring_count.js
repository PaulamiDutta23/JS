/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

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

function occurrences(string, substring) {
  let occurrenceCount = 0;

  for (let index = 0; index <= string.length - substring.length; index++) {
    if (isSubstringAt(string, substring, index) && substring !== "") {
      occurrenceCount++;
    }
  }

  return occurrenceCount;
}

function testOccurrences(string, substring, expectedValue) {
  const actualValue = occurrences(string, substring);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given string : ", string);
  console.log("Given Substring : ", substring);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testOccurrences("aa", "a", 2);
  testOccurrences("ab", "a", 1);
  testOccurrences("abbcabcc", "bcc", 1);
  testOccurrences("hello world", "l", 3);
  testOccurrences("hello world", "orl", 1);
  testOccurrences("helllllooooo", "ll", 4);
  testOccurrences("hello world", "", 0);
  testOccurrences("hello world", " w", 1);
  testOccurrences("abaababa", "ab", 3);
  testOccurrences("abaababa", "bc", 0);
}

main();
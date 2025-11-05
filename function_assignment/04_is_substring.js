/*
  Implement the function that tells if a string is substring of given string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

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

function isSubstring(string, subString) {
  for (let index = 0; index < string.length; index++) {
    if (isSubstringAt(string, subString, index) && subString !== "") {
      return true;
    }
  }

  return false;
}

function testIsSubstring(string, substring, expectedValue) {
  const actualValue = isSubstring(string, substring);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given string : ", string);
  console.log("Given Substring : ", substring);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testIsSubstring("abcbbca", "a", true);
  testIsSubstring("abcbbca", "ab", true);
  testIsSubstring("abcbbca", "abc", true);
  testIsSubstring("abcbbca", "bcb", true);
  testIsSubstring("abcbbca", "bb", true);
  testIsSubstring("abcbbca", "ca", true);
  testIsSubstring("abcbbca", "ad", false);
  testIsSubstring("hello", "world", false);
  testIsSubstring("hello world", "world", true);
  testIsSubstring("hello world", "hello", true);
  testIsSubstring("hello world", "llo", true);
  testIsSubstring("hello world", "", false);
  testIsSubstring("hello world", " ", true);
}

main();
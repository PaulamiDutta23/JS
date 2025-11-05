/*
  Implement the below function to reverse the given sentence.
  Examples:
  reverseString("hello") returns "olleh"
*/

function reverseString(sentence) {
  let reversed = "";

  for (let index = sentence.length - 1; index >= 0; index--) {
    reversed = reversed + sentence[index];
  }

  return reversed;
}

function testReverseString(sentence, expectedValue) {
  const actualValue = reverseString(sentence);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given sentence : ", sentence);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testReverseString("a", "a");
  testReverseString("He", "eH");
  testReverseString("hello", "olleh");
  testReverseString("Hello", "olleH");
  testReverseString("", "");
  testReverseString("hello world", "dlrow olleh");
  testReverseString("Bengaluru", "urulagneB");
  testReverseString(" ", " ");
  testReverseString("abc ", " cba");
  testReverseString(" abc", "cba ");
}

main();
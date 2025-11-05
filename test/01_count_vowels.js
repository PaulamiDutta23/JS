/*
  Implement the below function to count number of vowels present in the
  give sentence.
  Examples:
  countVowels("hello world") returns 3
  countVowels("hEllo wOrld") returns 3
*/
function isWhiteSpace(character) {
  const vowelString = "AEIOUaeiou";

  for (let index = 0; index < vowelString.length; index++) {
    if (character === vowelString[index]) {
      return true;
    }
  }

  return false;
}

function countVowels(sentence) {
  let vowelCount = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (isWhiteSpace(sentence[index])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

function testCountVowels(sentence, expectedValue) {
  const actualValue = countVowels(sentence);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given sentence : ", sentence);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testCountVowels("hello", 2);
  testCountVowels("he", 1);
  testCountVowels("fw", 0);
  testCountVowels("A lion ", 3);
  testCountVowels("hEllo wOrld", 3);
  testCountVowels("hello world", 3);
  testCountVowels("abcdefghij", 3);
  testCountVowels("sentence", 3);
  testCountVowels("education", 5);
}

main();
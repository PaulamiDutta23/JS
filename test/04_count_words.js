/*
  Implement the below function to count the number of words
  in the given sentence.

  Rules:
  - A word is defined as a sequence of non-whitespace characters.
  - Whitespace includes SPACE(" "), TAB("\t"), and NEW LINE("\n").
  - Multiple consecutive whitespace characters should be treated
    as a single separator.
  - Leading and trailing whitespace should not affect the word count.

  Example:
  countWords("hello   \t   world \n test")
    -> 3
*/
function isWhiteSpace(character) {
  const spaceString = " \n\t";

  for (let index = 0; index < spaceString.length; index++) {
    if (character === spaceString[index]) {
      return true;
    }
  }

  return false;
}

function trimAtStart(sentence) {
  let index = 0;

  while (isWhiteSpace(sentence[index])) {
    index++;
  }

  return index;
}

function countWords(sentence) {
  const firstIndex = trimAtStart(sentence);
  let count = 0;
  
  if (firstIndex <= sentence.length - 1 && !isWhiteSpace(sentence[firstIndex])) {
    count++;
  } 
  
  for (let index = firstIndex + 1; index + 1 < sentence.length; index++) {
    if (isWhiteSpace(sentence[index]) && !isWhiteSpace(sentence[index+1])) {
      count++;
    }
  }
  
  return count;
}

function testCountWords(sentence, expectedValue) {
  const actualValue = countWords(sentence);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given sentence : ", sentence);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testCountWords("a ", 1);
  testCountWords(" a ", 1);
  testCountWords(" a", 1);
  testCountWords("", 0);
  testCountWords(" ", 0);
  testCountWords("a dog", 2);
  testCountWords(" a dog runs ", 3);
  testCountWords("\t\n", 0);
  testCountWords("a\t\t", 1);
  testCountWords("a\n\ta", 2);
  testCountWords("hello  \t   world\n hi  \t1", 4);
}

main();
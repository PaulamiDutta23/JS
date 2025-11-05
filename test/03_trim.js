/*
  Implement the below function to trim(remove all leading and trailing 
  whitespaces) from the given sentence.
  A whitespace is SPACE(" "), NEW LINE("\n"), TAB("\t")
  Examples:
  reverseString(" hello world\n") returns "hello world"
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

function trimAtEnd(sentence) {
  let index = sentence.length - 1;

  while (isWhiteSpace(sentence[index])) {
    index--;
  }

  return index;
}

function trim(sentence) {
  const firstIndex = trimAtStart(sentence);
  const lastIndex = trimAtEnd(sentence);
  let trimmed = "";
  
  for (let index = firstIndex; index <= lastIndex; index++) {
    trimmed = trimmed + sentence[index];
  }
  
  return trimmed;
}

function testCountWords(sentence, expectedValue) {
  const actualValue = trim(sentence);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given sentence : ", sentence);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testCountWords("  ab", "ab");
  testCountWords("a", "a");
  testCountWords(" a", "a");
  testCountWords("a ", "a");
  testCountWords(" a", "a");
  testCountWords("a", "a");
  testCountWords(" hello world\n", "hello world");
  testCountWords("hello world\t", "hello world");
  testCountWords("\n\tDurga Puja  ", "Durga Puja");
}

main();
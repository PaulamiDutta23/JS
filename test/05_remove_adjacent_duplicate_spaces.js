/*
  Implement the below function to replace every run of adjacent SPACE(" ")
  characters with a single SPACE in the given sentence.

  Rules:
  - Consider only the plain SPACE character (" "). Any contiguous sequence
    of one or more SPACE characters should become a single SPACE.
  - Leading and trailing runs of spaces are also collapsed to a single space.
  - Do NOT modify other whitespace characters: TAB("\t") and NEW LINE("\n")
    must remain exactly as they are.
  - Runs of spaces that are separated by other characters (including \t or \n)
    are treated separately and each such run is collapsed independently.

  Examples:
  removeAdjacentDuplicateSpaces("statement      with    two spaces")
    -> "statement with two spaces"
    (multiple spaces between words collapsed to single spaces)

  removeAdjacentDuplicateSpaces("   hello   world   ")
    -> " hello world "
    (leading/trailing runs collapsed to single leading/trailing space)
*/

function removeAdjacentDuplicateSpaces(sentence) {
  let newString = "";
  let index = 0;

  while (index < sentence.length) {
    if (sentence[index] !== " ") {
      newString = newString + sentence[index];
    }

    if (sentence[index] === " " && sentence[index + 1] !== " ") {
      newString = newString + " ";
    }

    index++;
  }

  return newString;
}

function testRmvAdjDupSpaces(sentence, expectedValue) {
  const actualValue = removeAdjacentDuplicateSpaces(sentence);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given sentence : ", sentence);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testRmvAdjDupSpaces("ab", "ab");
  testRmvAdjDupSpaces("a b", "a b");
  testRmvAdjDupSpaces("a  b", "a b");
  testRmvAdjDupSpaces(" a", " a");
  testRmvAdjDupSpaces("  a", " a");
  testRmvAdjDupSpaces("a ", "a ");
  testRmvAdjDupSpaces("a  ", "a ");
  testRmvAdjDupSpaces("   hello   world   ", " hello world ");
  testRmvAdjDupSpaces("statement      with    two spaces", "statement with two spaces");
  testRmvAdjDupSpaces("  \t\t  ", " \t\t ");
  testRmvAdjDupSpaces("", "");
  testRmvAdjDupSpaces(" ", " ");
  testRmvAdjDupSpaces("  ", " ");
}

main();
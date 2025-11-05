/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function replace(text, match, replacement) {
  let newString = "";

  for (let index = 0; index < text.length; index++) {
    const isMatched = text[index] === match;
    newString = isMatched ? newString + replacement : newString + text[index];
  }

  return newString;
}

function testStringRepalce(text, match, replacement, expectedValue) {
  const actualValue = replace(text, match, replacement);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given string : ", text);
  console.log("Matching Character : ", match);
  console.log("Replace character : ", replacement);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testStringRepalce("hello world", "l", "n", "henno wornd");
  testStringRepalce("no space in the text", " ", "_", "no_space_in_the_text");
  testStringRepalce("", "l", "n", "");
  testStringRepalce("bengalore", "b", "m", "mengalore");
  testStringRepalce("sita", "a", "u", "situ");
  testStringRepalce("Paulami", "a", "o", "Poulomi");
}

main();
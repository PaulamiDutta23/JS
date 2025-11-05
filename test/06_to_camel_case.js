/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/
function isUnderScore(character) {
  return character === "_";
}

function trim(sentence, index) {
  while (isUnderScore(sentence[index])) {
    index++;
  }

  return index;
}

function trimAtEnd(sentence) {
  let index = sentence.length - 1;

  while (isUnderScore(sentence[index])) {
    index--;
  }

  return index;
}

function toLowerCase(character){
  const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";

  for (let index = 0; index < upperCaseString.length; index++) {
    if (character === upperCaseString[index]) {
      return lowerCaseString[index];
    }
  }
  
  return character;
}

function toUpperCase(character){
  const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";

  for (let index = 0; index < lowerCaseString.length; index++) {
    if (character === lowerCaseString[index]) {
      return upperCaseString[index];
    }
  }

  return character;
}

function toCamelCase(sentence) {
  let lowerCaseString = "";
  
  for (let index = 0; index < sentence.length; index++) {
    lowerCaseString = lowerCaseString + toLowerCase(sentence[index]);
  }
  
  let camelCaseString = "";
  const firstIndex = trim(sentence, 0);
  const lastIndex = trimAtEnd(sentence);
  
  for (let index = firstIndex; index <= lastIndex; index++) {
    if(lowerCaseString[index] === "_" && lowerCaseString[index + 1] === "_") {
      index = trim(sentence, index) - 2;
    } else if (lowerCaseString[index] === "_") {
      camelCaseString = camelCaseString + toUpperCase(lowerCaseString[index + 1]);
      index++;
    } else {
      camelCaseString = camelCaseString + lowerCaseString[index];
    }
  }
  
  return camelCaseString;
}

function testCamelCase(sentence, expectedValue) {
  const actualValue = toCamelCase(sentence);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given sentence : ", sentence);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testCamelCase("a_a", "aA");
  testCamelCase("a_1", "a1");
  testCamelCase("a_ab", "aAb");
  testCamelCase("hello_wORLd_pro1gram", "helloWorldPro1gram");
  testCamelCase("hello", "hello");
  testCamelCase("__hello", "hello");
  testCamelCase("__hello__", "hello");
  testCamelCase("__he__llo__", "heLlo");
  testCamelCase("_He__llo_", "heLlo");
  testCamelCase("He__llo", "heLlo");
  testCamelCase("__he__l___l_o", "heLLO");
}

main();
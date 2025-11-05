/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

function testFindIndex(text, target, expectedTarget) {
  const actualTarget = findIndex(text, target);
  const isPassed = actualTarget === expectedTarget ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given string : ", text);
  console.log("Given character : ", target);
  console.log("Expected Result : ", expectedTarget);
  console.log("Actual Result : ", actualTarget, "\n");
}

function main() {
  testFindIndex("Hello", "o", 4);
  testFindIndex("Paulami", "p", -1);
  testFindIndex("bengaluru", "u", 6);
  testFindIndex("koramangala", "a", 3);
  testFindIndex("not found", "z", -1);
}

main();
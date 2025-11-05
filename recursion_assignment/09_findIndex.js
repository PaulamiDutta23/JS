function match(string, index, end, char) {
  if (index < end && string[index] === char) return index;
  if (index === end - 1 && string[index] !== char) return -1;
  return match(string, index + 1, end, char);
}

function findIndex(string, char) {
  if(string[string.length - 1] !== char && string.length <= 1) return -1;
  return match(string, 0, string.length, char);
}

function formatText(input, expectedValue, actualValue) {
 return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;

}

function testFindIndex(description, string, char, expectedValue) {
  const actualValue = findIndex(string, char);
  const input = `${string}, ${char}`;

  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;
  console.log(header);
  
  if(!isPassed) {
    const message = formatText(input, expectedValue, actualValue);
    console.log(message);
  }
}

function main() {
  testFindIndex("Character present in one character string", "a", "a", 0);
  testFindIndex("Character not present in one character string", "a", "b", -1);
  testFindIndex("Character present in multicharacter string", "abcdefgh", "d", 3);
  testFindIndex("Whitespace present in multicharacter string", "abcd efgh", " ", 4);
  testFindIndex("Whitespace not present in multicharacter string", "abcdefgh", " ", -1);
  testFindIndex("Character not present in multicharacter string", "ababb", "c", -1);
  testFindIndex("whitespace present in whitespace string", "   ", " ", 0);
  testFindIndex("whitespace not present in whitespace string", "   ", "", -1);
}

main();
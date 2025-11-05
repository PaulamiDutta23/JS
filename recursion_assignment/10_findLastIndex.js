function match(string, index, end, char) {
  if (index >= end && string[index] === char) return index;
  if (index === end && string[index] !== char) return -1;
  return match(string, index - 1, end, char);
}

function findLastIndex(string, char) {
  if(string[string.length - 1] !== char && string.length <= 1) return -1;
  return match(string, string.length - 1, 0, char);
}

function formatText(input, expectedValue, actualValue) {
 return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;

}

function testFindLastIndex(description, string, char, expectedValue) {
  const actualValue = findLastIndex(string, char);
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
  testFindLastIndex("Character present in one character string", "a", "a", 0);
  testFindLastIndex("Character not present in one character string", "a", "b", -1);
  testFindLastIndex("Character present in multicharacter string", "abcdefdh", "d", 6);
  testFindLastIndex("Whitespace present in multicharacter string", "abcd efg h", " ", 8);
  testFindLastIndex("Whitespace not present in multicharacter string", "abcdefgh", " ", -1);
  testFindLastIndex("Character not present in multicharacter string", "ababb", "c", -1);
  testFindLastIndex("whitespace present in whitespace string", "   ", " ", 2);
  testFindLastIndex("whitespace not present in whitespace string", "   ", "", -1);
}

main();
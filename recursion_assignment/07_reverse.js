function trimRest(text, index, end) {
  if (index > end) return "";
  return text[index] + trimRest(text, index + 1, end);
}

function reverse(string) {
  if (string === "") return "";
  return reverse(trimRest(string, string.length - string.length + 1, string.length - 1)) + string[string.length - string.length];
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
}

function testReverse(description, text, expectedValue) {
  const actualValue = reverse(text);
  const input = `${text}`;

  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;
  console.log(header);

  if (!isPassed) {
    const message = formatText(input, expectedValue, actualValue);
    console.log(message);
  }
}

function main() {
  testReverse("One alphabet", "a", "a");
  testReverse("Two alphabet", "aa", "aa");
  testReverse("Two different alphabet", "ab", "ba");
  testReverse("More than two alphabets", "ababa", "ababa");
  testReverse("More than two alphabets", "abab", "baba");
  testReverse("Empty string", "", "");
  testReverse("Whitespace character", " ", " ");
  testReverse("Text with leading and trailing whitespace", " aba ", " aba ");
}

main();
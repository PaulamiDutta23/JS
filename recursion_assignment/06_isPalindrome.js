function trimRest(text, index, end) {
  if (index > end) return "";
  return text[index] + trimRest(text, index + 1, end);
}

function reverseText(text, index) {
  if (text === "") return "";
  return reverseText(trimRest(text, index + 1, text.length - 1), 0) + text[index];
}

function isPalindrome(palindromeCandidate) {
  const reversed = reverseText(palindromeCandidate, 0);
  return reversed === palindromeCandidate;
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;

}

function testIsPalindrome(description, text, expectedValue) {
  const actualValue = isPalindrome(text);
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
  testIsPalindrome("One alphabet", "a", true);
  testIsPalindrome("Two alphabet and palindrome", "aa", true);
  testIsPalindrome("Two alphabet and not palindrome", "ab", false);
  testIsPalindrome("More than two alphabet and palindrome", "ababa", true);
  testIsPalindrome("More than two alphabet and not palindrome", "abab", false);
  testIsPalindrome("Empty string", "", true);
  testIsPalindrome("Whitespace character", " ", true);
  testIsPalindrome("Text with leading and trailing whitespace", " aba ", true);
}

main();
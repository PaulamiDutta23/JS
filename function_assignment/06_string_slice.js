/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function slice(text, start, end) {
  if (start < 0) {
    start = 0;
  }
  
  let stringSlice = "";
  
  for (let index = start; index <=end && index < text.length; index++) {
    stringSlice = stringSlice + text[index];
  }

  return stringSlice;
}

function testStringSlice(text, start, end, expectedValue) {
  const actualValue = slice(text, start, end);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given string : ", text);
  console.log("Starting index : ", start);
  console.log("Ending index : ", end);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testStringSlice("hello world", 0, 4, "hello");
  testStringSlice("", 0, 10, "");
  testStringSlice("Paulami", -1, 3, "Paul");
  testStringSlice("Paulami", -1, 10, "Paulami");
  testStringSlice("Paulami", 4, 6, "ami");
  testStringSlice("Happy Durga Puja", 6, 17, "Durga Puja");
  testStringSlice("Bengaluru", 4, 6, "alu");
  testStringSlice("Bengaluru", 0, 0, "B");
  testStringSlice("hello world", 0, 100, "hello world");
  testStringSlice("hello world", -1, -1, "");
}

main();
/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(number) {
  if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5)) {
    return "fizzbuzz";
  } 
  
  if (isDivisibleBy(number, 3)) {
    return "fizz";
  }
  
  if (isDivisibleBy(number, 5)) {
    return "buzz";
  }
      
  return "" + number;
}

function testFizzBuzz(number, expectedValue) {
  const actualValue = fizzBuzz(number);
  const isPassed = actualValue === expectedValue ? "✅" : "❌";
  console.log(isPassed);
  console.log("Given integer : ", number);
  console.log("Expected Result : ", expectedValue);
  console.log("Actual Result : ", actualValue, "\n");
}

function main() {
  testFizzBuzz(3, "fizz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(7, "7");
  testFizzBuzz(18, "fizz");
  testFizzBuzz(25, "buzz");
}

main();
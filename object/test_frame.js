import { add, sub, dbg } from "./arithmetic.js";

const testsOfAdd = {
  name: "Test Cases of Add",
  ref: add,
  cases: [
    { desc: "addition of 2 positives", args: [1, 2], expected: 3 },
    { desc: "addition of 2 negatives", args: [-1, -2], expected: -3 }
  ]
};

const testsOfSub = {
  name: "Test Cases of Sub",
  ref: sub,
  cases: [
    { desc: "subtraction of 2 positives", args: [1, 2], expected: -1 },
    { desc: "subtraction of 2 negatives", args: [-1, -2], expected: 1 }
  ]
};

const allTestcases = [testsOfAdd, testsOfSub];

const viewDetails = (input, actualValue, expectedValue) => {
  console.log(`
    Input : ${input}
    Actual : ${actualValue}
    Expected : ${expectedValue}
  `);
};

const isEqual = (value1, value2) => value1 === value2;

const test = (fn, testcase) => {
  const actualValue = fn(...testcase.args);
  const expectedValue = testcase.expected;
  const isPassed = isEqual(actualValue, expectedValue);
  const symbol = isPassed ? "✅" : "❌";
  const heading = `${symbol}${testcase.desc}`;
  console.log(heading);

  if (!isPassed) {
    return viewDetails(testcase.args, actualValue, expectedValue);
  }
};

const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;


const performTest = (testcase) => {
  console.log(heading(testcase.name));
  
  for (const each of testcase.cases) {
    test(testcase.ref, each);
  }
};

const main = () => allTestcases.map(performTest);

main();

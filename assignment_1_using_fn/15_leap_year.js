function isLeapYear(year) {
  const isDivisibleBy100 = year % 100 === 0;
  const isDivisibleBy400 = year % 400 === 0;
  const isDivisibleBy4 = year % 4 === 0;
  return isDivisibleBy100 ? isDivisibleBy400 : isDivisibleBy4;
}

function showResult(year, expectedResult, actualResult, isPassed) {
  const firstLine = isPassed + "Year : " + year + "\n";
  const secondLine = "Expected Result : " + expectedResult + "\n";
  const thirdLine = "Actual Result : " + actualResult + "\n";
  console.log(firstLine, secondLine, thirdLine);
}

function testLeapYear(year, expectedResult) {
  const actualResult = isLeapYear(year);
  const isPassed =  actualResult === expectedResult ?  "✅" : "❌";
  showResult(year, expectedResult, actualResult, isPassed);
}

function main() {
  testLeapYear(2000, true);
  testLeapYear(1900, false);
  testLeapYear(2024, true);
  testLeapYear(2011, false);
  testLeapYear(1600, true);
  testLeapYear(2005, false);
  testLeapYear(2004, true);
  testLeapYear(2025, false);
}

main();
function convertToBinary(decimalValue) {
  let dividend = decimalValue;
  let binaryCode = "";
  
  if (dividend === 0) {
    binaryCode = "0 ";
    return binaryCode;
  }
  
  const binaryBaseNumber = 2;
  
  while (dividend > 0) {
    const binaryBit = dividend % binaryBaseNumber;
    dividend = (dividend - binaryBit) / binaryBaseNumber;
    binaryCode = binaryCode + binaryBit + " ";
  }
  
  return binaryCode;
}

function showResult(decimalValue, expectedBinaryCode, actualBinaryCode, isPassed) {
  const firstLine = isPassed + "Decimal Number : " + decimalValue + "\n";
  const secondLine = "Expected Binary value : " + expectedBinaryCode + "\n";
  const thirdLine = "Actual Binary value : " + actualBinaryCode + "\n";
  console.log(firstLine, secondLine, thirdLine);
}


function testBinaryConverter(decimalValue, expectedBinaryCode) {
  const actualBinaryCode = convertToBinary(decimalValue);
  const isPassed = expectedBinaryCode === actualBinaryCode ?  "✅" : "❌";
  showResult(decimalValue, expectedBinaryCode, actualBinaryCode, isPassed);
}

function main() {
  testBinaryConverter(0, "0 ");
  testBinaryConverter(1, "1 ");
  testBinaryConverter(2, "0 1 ");
  testBinaryConverter(4, "0 0 1 ");
  testBinaryConverter(13, "1 0 1 1 ");
  testBinaryConverter(6, "0 1 1 ");
}

main();
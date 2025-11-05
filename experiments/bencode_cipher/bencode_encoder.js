function formatEncodedData(start, middle, end) {
  return `${start}${middle}${end}`;
}

function encodeList(data) {
  const encodedArray = [];

  for (let index = 0; index < data.length; index++) {
    const encodedElement = bencodeEncoder(data[index]);
    encodedArray.push(encodedElement);
  }

  const encodedString = encodedArray.join("");
  return formatEncodedData("l", encodedString, "e");
}

function encodeData(dataType, data) {
  switch (dataType) {
    case "number": return formatEncodedData("i", data, "e");
    case "string": return formatEncodedData(data.length, ":", data);
    case "object": return encodeList(data);
  }
}

function bencodeEncoder(data) {
  const dataType = typeof data;
  return encodeData(dataType, data);
}

function formatText(input, expectedValue, actualValue) {
  return `
  Inputs   : ${input}
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------\n`;
}

function composeMessage(header, input, expectedValue, actualValue) {
  console.log(header);

  if (expectedValue !== actualValue) {
    console.log(formatText(input, expectedValue, actualValue));
  }
}

function testBencodeEncoder(description, data, expectedValue) {
  const actualValue = bencodeEncoder(data);
  const input = `${data}`;
  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return composeMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testIntegers() {
  console.log(dashes("\nIntegers"));
  testBencodeEncoder("positive number", 123, "i123e");
  testBencodeEncoder("negative number", -123, "i-123e");
  testBencodeEncoder("zero", 0, "i0e");
}

function testStrings() {
  console.log(dashes("\nStrings"));
  testBencodeEncoder("normal string", "hi", "2:hi");
  testBencodeEncoder("empty string", "", "0:");
}

function testLists() {
  console.log(dashes("\nLists"));
  testBencodeEncoder("normal list", [1, "hi"], "li1e2:hie");
  testBencodeEncoder("empty list", [], "le");
  testBencodeEncoder("nested list", [1, "hi", ["the", 123]], "li1e2:hil3:thei123eee");
  testBencodeEncoder("nested list in mid", [1, "hi", ["the", 123], 56], "li1e2:hil3:thei123eei56ee");
  testBencodeEncoder("nested list at beg", [["the", 123], 1, "hi", 56], "ll3:thei123eei1e2:hii56ee");
}

function testAllBencodeEncoder() {
  console.log(dashes("Bencode Encoder"));
  testIntegers();
  testStrings();
  testLists();
}

testAllBencodeEncoder();
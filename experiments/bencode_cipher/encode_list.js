function encodeNumber(data) {
  return "i".concat(data).concat("e");
}

function encodeString(data) {
  return "".concat(data.length).concat(":").concat(data);
}

function encodeElements(index, data) {
  if (index === data.length - 1) {
    return bencodeEncoder(data[index]);
  }
  return bencodeEncoder(data[index]) + encodeElements(index + 1, data);
}

function encodeList(data) {
  if (data.length < 1) {
    return "le";
  }

  return "l".concat(encodeElements(0, data)).concat("e");
}

function encodeData(dataType, data) {
  switch (dataType) {
    case "number": return encodeNumber(data);
    case "string": return encodeString(data);
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

function testEncodeList(description, data, expectedValue) {
  const actualValue = encodeList(data);
  const input = `${data}`;
  const isPassed = actualValue === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return composeMessage(header, input, expectedValue, actualValue);
}

function testLists() {
  //console.log(dashes("\nLists"));
  testEncodeList("normal list", [1, "hi"], "li1e2:hie");
  testEncodeList("empty list", [], "le");
  testEncodeList("nested list", [1, "hi", ["the", 123]], "li1e2:hil3:thei123eee");
  testEncodeList("nested list in mid", [1, "hi", ["the", 123], 56], "li1e2:hil3:thei123eei56ee");
  testEncodeList("nested list at beg", [["the", 123], 1, "hi", 56], "ll3:thei123eei1e2:hii56ee");
}

testLists();
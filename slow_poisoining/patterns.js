function join(element1, element2, seperator = "\n") {
  return element1 + seperator + element2;
}

function rightAlignedTrianglePattern(dimensions) {
  let rightAlignedTriangle = " ".repeat(dimensions[0] - 1) + "*".repeat(1);;

  for (let index = 2; index <= dimensions[0]; index++) {
    const eachRow = " ".repeat(dimensions[0] - index) + "*".repeat(index);
    rightAlignedTriangle = join(rightAlignedTriangle, eachRow);
  }

  return rightAlignedTriangle;
}

function trianglePattern(dimensions) {
  let triangle = fillRectanglePattern([1, 1]);

  for (let colIndex = 2; colIndex <= dimensions[0]; colIndex++) {
    const eachRow = fillRectanglePattern([colIndex, 1]);
    triangle = join(triangle, eachRow);
  }

  return triangle;
}

function spaceAlternatingRectangle(dimensions) {
  const charArray = ["*", "-", " "];
  let spaceAlteredPattern = charArray[0 % 3].repeat(dimensions[0]);

  for (let rowIndex = 1; rowIndex < dimensions[1]; rowIndex++) {
    const eachRow = charArray[rowIndex % 3].repeat(dimensions[0]);
    spaceAlteredPattern = join(spaceAlteredPattern, eachRow);
  }
  return spaceAlteredPattern;
}

function alternatingRectanglePattern(dimensions) {
  const charArray = ["*", "-"];
  let alteredPattern = charArray[0 % 2].repeat(dimensions[0]);

  for (let rowIndex = 1; rowIndex < dimensions[1]; rowIndex++) {
    const eachRow = charArray[rowIndex % 2].repeat(dimensions[0]);
    alteredPattern = join(alteredPattern, eachRow);
  }
  return alteredPattern;
}

function hollowRectanglePattern(dimensions) {
  const filledRow = "*".repeat(dimensions[0]);
  let hollowPattern = filledRow;

  if (dimensions[1] > 1) {
    hollowPattern = join(hollowPattern, filledRow);
  }

  return hollowPattern;
}

function fillRectanglePattern(dimensions) {
  const eachRow = "*".repeat(dimensions[0]);
  let filledPattern = eachRow;

  for (let rowIndex = 1; rowIndex < dimensions[1]; rowIndex++) {
    filledPattern = join(filledPattern, eachRow);
  }

  return filledPattern;
}

function generatePattern(style, dimensions) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return "";
  }

  switch (style) {
    case "filled-rectangle": return fillRectanglePattern(dimensions);
    case "hollow-rectangle": return hollowRectanglePattern(dimensions);
    case "alternating-rectangle": return alternatingRectanglePattern(dimensions);
    case "spaced-alternating-rectangle": return spaceAlternatingRectangle(dimensions);
    case "triangle": return trianglePattern(dimensions);
    case "right-aligned-triangle": return rightAlignedTrianglePattern(dimensions);
  }
}

function formatMessage(input, expectedValue, actualValue) {
  const outputFragment = `
  Inputs   : [${input}]
  Expected : ${expectedValue}
  Actual   : ${actualValue}
  ------`;
  console.log(outputFragment);
}

function displayMessage(header, input, expectedValue, actualValue) {
  console.log(header);

  if (expectedValue !== actualValue) {
    return formatMessage(input, expectedValue, actualValue);
  }
}

function testGeneratePattern(description, style, dimensions, expectedValue) {
  const actualValue = generatePattern(style, dimensions);
  const input = `${style} | ${dimensions}`;
  const isPassed = expectedValue === actualValue;
  const symbol = isPassed ? "✅" : "❌";
  const header = `${symbol}${description}`;

  return displayMessage(header, input, expectedValue, actualValue);
}

function dashes(text) {
  return `${text}\n${"-".repeat(text.length)}\n`;
}

function testAllGeneratePattern() {
  console.log(dashes("Generate Pattern"));
  testGeneratePattern("filled: col = 1, row = 1", "filled-rectangle", [1, 1], "*");
  testGeneratePattern("filled: col = 2, row = 3", "filled-rectangle", [2, 3], "**\n**\n**");
  testGeneratePattern("filled: col = 4, row = 0", "filled-rectangle", [4, 0], "");
  testGeneratePattern("filled: col = 0, row = 5", "filled-rectangle", [0, 5], "");
  testGeneratePattern("hollow: col = 0, row = 5", "hollow-rectangle", [0, 5], "");
  testGeneratePattern("hollow: col = 4, row = 0", "hollow-rectangle", [4, 0], "");
  testGeneratePattern("hollow: col = 1, row = 1", "hollow-rectangle", [1, 1], "*");
  testGeneratePattern("hollow: col = 3, row = 2", "hollow-rectangle", [3, 2], "***\n***");
  testGeneratePattern("alternating: col = 0, row = 5", "alternating-rectangle", [0, 5], "");
  testGeneratePattern("alternating: col = 4, row = 0", "alternating-rectangle", [4, 0], "");
  testGeneratePattern("alternating: col = 3, row = 2", "alternating-rectangle", [3, 2], "***\n---");
  testGeneratePattern("alternating: col = 3, row = 3", "alternating-rectangle", [3, 3], "***\n---\n***");
  testGeneratePattern("spaced-alternating-rectangle: col = 0, row = 5", "spaced-alternating-rectangle", [0, 5], "");
  testGeneratePattern("spaced-alternating-rectangle: col = 4, row = 0", "spaced-alternating-rectangle", [4, 0], "");
  testGeneratePattern("spaced-alternating-rectangle: col = 2, row = 3", "spaced-alternating-rectangle", [2, 3], "**\n--\n  ");
  testGeneratePattern("spaced-alternating-rectangle: col = 2, row = 4", "spaced-alternating-rectangle", [2, 4], "**\n--\n  \n**");
  testGeneratePattern("triangle: size = 1", "triangle", [1], "*");
  testGeneratePattern("triangle: size = 0", "triangle", [0], "");
  testGeneratePattern("triangle: size = 3", "triangle", [3], "*\n**\n***");
  testGeneratePattern("right-aligned-triangle: size = 1", "right-aligned-triangle", [1], "*");
  testGeneratePattern("right-aligned-triangle: size = 0", "right-aligned-triangle", [0], "");
  testGeneratePattern("right-aligned-triangle: size = 2", "right-aligned-triangle", [2], " *\n**");
}

testAllGeneratePattern();
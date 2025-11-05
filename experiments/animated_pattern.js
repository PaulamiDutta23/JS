function delay() {
  for (let i = 0; i < 600000000; i++) { }
}

function generateChar(r, c, size, pattern, char = "*-") {
  const patternType = ["left diagonal", "right diagonal", "both diagonals"];
  const isEqualRowCol = r === c;
  const rightDiagonal = r + c === size - 1;
  switch (pattern) {
    case patternType[0]:
      return isEqualRowCol ? char[0] : char[1];
    case patternType[1]:
      return rightDiagonal ? char[0] : char[1];
    case patternType[2]:
      return isEqualRowCol || rightDiagonal ? char[0] : char[1];
  }
}

function generateRow(r, size, pattern) {
  let row = "";
  for (let c = 0; c < size; c++) {
    row += generateChar(r, c, size, pattern);
  }
  return row;
}

function generatePattern(size, pattern) {
  for (let r = 0; r < size; r++) {
    const line = generateRow(r, size, pattern);
    console.log(line);
    delay();
    console.clear();
  }
  return;
}

function createDifferentPatterns() {
  console.log(`You have options for pattern type :
    -> left diagonal
    -> right diagonal
    -> both diagonals`);
  const size = +prompt("Enter the size :");
  const pattern = prompt("Enter the type of pattern you want :")
  generatePattern(size, pattern);
}

createDifferentPatterns();
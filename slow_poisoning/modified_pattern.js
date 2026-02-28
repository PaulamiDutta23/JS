const generateLine = (char, noOfTimes) => char.repeat(noOfTimes);

const generateHollowLine = (char, noOfTimes) =>
  char + " ".repeat(noOfTimes - 2) + char;

const filledRectangle = (row, cols) => {
  const pattern = [];
  const line = generateLine("*", cols);

  for (let r = 0; r < row; r++) {
    pattern.push(line);
  }
  return pattern.join("\n");
};

const hollowRectangle = (row, cols) => {
  const pattern = [];
  const line = generateLine("*", cols);
  const hollowLine = generateHollowLine("*", cols);
  pattern.push(line);

  for (let r = 1; r < row - 1; r++) {
    pattern.push(hollowLine);
  }

  pattern.push(line);
  return pattern.join("\n");
};

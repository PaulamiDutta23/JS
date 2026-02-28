const maxLength = 20;

const createScreen = (x) => [
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
];

const strings = [
  { str: "!NEWS!", x: 0, y: 0 },
  { str: "hi", x: 2, y: 2 },
];

const drawOnScreen = (screen, strDetails) => {
  let col = strDetails.y;
  const chars = strDetails.str.split("");

  for (const char of chars) {
    screen[strDetails.x][col++ % maxLength] = char;
  }
  strDetails.y++;
  return screen;
};

const drawScreen = (screen) => {
  console.log(screen.map((x) => x.join("")).join("\n"));
};

setInterval(() => {
  console.clear();
  const screen = createScreen(maxLength);
  for (const string of strings) {
    drawOnScreen(screen, string);
  }
  drawScreen(screen);
}, 500);

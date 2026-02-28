const createScreen = (width) => [
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
  " ".repeat(width).split(""),
];

const drawScreen = (screen) => {
  console.log(screen.map((x) => x.join("")).join("\n"));
};

const drawOnScreen = (x, y, char, screen) => {
  console.clear();
  screen[x][x] = char;
  screen[x][y] = char;
  screen[y][x] = char;
  screen[y][y] = char;
  drawScreen(screen);
};

const maxLength = 20;
let x = 0;
let y = maxLength - 1;

setInterval(() => {
  x = x % maxLength;
  y = (maxLength + y) % maxLength;
  const screen = createScreen(maxLength);
  drawOnScreen(x++, y--, "*", screen);
}, 400);

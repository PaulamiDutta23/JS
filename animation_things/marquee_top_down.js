const strings = [
  { str: "hi", x: 0, y: 3 },
  { str: "hello", x: 6, y: 0 },
];

const createScreen = () => {
  const row = +prompt("Enter the screen height : ");
  const col = +prompt("Enter the screen width : ");
  const screen = [];
  for (let r = 0; r < row; r++) {
    screen.push(" ".repeat(col).split(""));
  }
  return screen;
};

const clearScreen = (screen) => {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = " ";
    }
  }
  return screen;
};

const insertCharacter = (screen, x, y, chars) => {
  for (const char of chars) {
    screen[x++ % screen.length][y] = char;
  }
};

const drawOnScreen = (screen, strDetails) => {
  console.clear();
  const x = strDetails.x;
  const chars = strDetails.str.split("");
  insertCharacter(screen, x, strDetails.y, chars);
  strDetails.x++;
  return screen;
};

const drawScreen = (screen) => {
  console.log(screen.map((x) => x.join("")).join("\n"));
};

const screen = createScreen();

setInterval(() => {
  console.clear();
  clearScreen(screen);
  for (const string of strings) {
    drawOnScreen(screen, string);
  }
  drawScreen(screen);
}, 500);

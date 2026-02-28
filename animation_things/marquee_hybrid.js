const createScreen = () => {
  const row = +prompt("Enter the screen height : ");
  const col = +prompt("Enter the screen width : ");
  const screen = [];
  for (let r = 0; r < row; r++) {
    screen.push(" ".repeat(col).split(""));
  }
  return screen;
};

const screen = createScreen();

const horizontalStrings = [
  { str: "Paulami", x: 13, y: 0, dx: 0, dy: 1 },
  { str: "Jeniffer", x: 8, y: 4, dx: 0, dy: 1 },
  { str: "Rashmika", x: 4, y: 6, dx: 0, dy: -1 },
  { str: "Oiendrila", x: 0, y: 3, dx: 0, dy: -1 },
];

const verticalStrings = [
  { str: "Rafiya", x: 5, y: 5, dx: 1, dy: 0 },
  { str: "Mohanthi", x: 15, y: 10, dx: -1, dy: 0 },
  { str: "Sirisha", x: 10, y: 15, dx: 1, dy: 0 },
];

const strings = { horizontalStrings, verticalStrings };

const clearScreen = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

const insertCharacterHorizontal = (screen, x, y, chars) => {
  for (const char of chars) {
    screen[x][y++ % screen[x].length] = char;
  }
};

const insertCharacterVertically = (screen, x, y, chars) => {
  for (const char of chars) {
    screen[x++ % screen.length][y] = char;
  }
};

const drawCharacterHorizontal = (screen, strDetails) => {
  const x = strDetails.x;
  const y = strDetails.y;
  const chars = strDetails.str.split("");
  insertCharacterHorizontal(screen, x, y, chars);
  strDetails.x += strDetails.dx;
  strDetails.y += strDetails.dy;

  if (strDetails.y < 0) {
    strDetails.y = screen[strDetails.x].length - 1;
  }
};

const marqueeHorizontal = (screen, strings) => {
  for (const string of strings) {
    drawCharacterHorizontal(screen, string);
  }
};

const drawCharacterVertical = (screen, strDetails) => {
  const x = strDetails.x;
  const y = strDetails.y;
  const chars = strDetails.str.split("");
  insertCharacterVertically(screen, x, y, chars);
  strDetails.x += strDetails.dx;
  strDetails.y += strDetails.dy;

  if (strDetails.x < 0) {
    strDetails.x = screen.length - 1;
  }
};

const marqueeVertical = (screen, strings) => {
  for (const string of strings) {
    drawCharacterVertical(screen, string);
  }
};

const drawOnScreen = (screen, key, strings) => {
  const marquee = {
    horizontalStrings: marqueeHorizontal,
    verticalStrings: marqueeVertical,
  };

  marquee[key](screen, strings[key]);
};

const drawScreen = (screen) => {
  console.log(screen.map((x) => x.join("")).join("\n"));
};

setInterval(() => {
  console.clear();
  clearScreen(screen);

  for (const key in strings) {
    drawOnScreen(screen, key, strings);
  }

  drawScreen(screen);
}, 700);

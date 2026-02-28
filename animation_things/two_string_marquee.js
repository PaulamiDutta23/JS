const maxLength = 20;
const str1 = "!NEWS!";
const str2 = "hi";

const createScreen = (x) => [
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
];

let x = 0;
let y = 0;

const leftToRight = (screen, string) => {
  const chars = string.split("").reverse().concat(
    " ".repeat(maxLength - string.length).split(""),
  );
  screen.unshift(chars[x++ % maxLength]);
  screen.pop();
};

const rightToLeft = (screen, string) => {
  const chars = string.split("").concat(" ".repeat(maxLength - 2).split(""));
  screen.shift();
  screen.push(chars[y++ % maxLength]);
};

const drawOnScreen = (screen) => {
  leftToRight(screen[0], str1);
  rightToLeft(screen[2], str2);
  return screen;
};

const drawScreen = (screen) => {
  console.log(screen.map((x) => x.join("")).join("\n"));
};

const screen = createScreen(maxLength);

setInterval(() => {
  console.clear();
  drawOnScreen(screen);
  drawScreen(screen);
}, 500);

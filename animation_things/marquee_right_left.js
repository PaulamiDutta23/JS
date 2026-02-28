const createScreen = (x) => " ".repeat(x).split("");
const string = "Hello";
const maxLength = 20;
let col = maxLength - 1;

const insertChar = (screen, col, string) => {
  let i = col;
  const str = string.split("");
  for (const char of str) {
    screen[i++ % maxLength] = char;
  }
  return screen;
};

const displayOnScreen = (screen, col, string) => {
  console.clear();
  const board = insertChar(screen, col, string);
  console.log(board.join(""));
};

setInterval(() => {
  console.clear();
  if (col < 0) {
    col = maxLength - 1;
  }
  
  const screen = createScreen(maxLength);
  displayOnScreen(screen, col--, string);
}, 200);

//using shift and push

// const string = "Hello";
// const maxLength = 30;
// const createScreen = (x) => " ".repeat(x).split("");
// const screen = createScreen(maxLength);
// let i = 0;

// setInterval(() => {
//   console.clear();
//   const chars = string.split("").concat(" ".repeat(maxLength - 2).split(''));
//   screen.shift();
//   screen.push(chars[i++ % maxLength]);
//   console.log(screen.join(""));
// }, 200);

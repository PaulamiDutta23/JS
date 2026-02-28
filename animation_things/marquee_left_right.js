const createScreen = (x) => " ".repeat(x).split("");
const string = "Hello";
const maxLength = 20;
let col = 0;

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
  const screen = createScreen(maxLength);
  displayOnScreen(screen, col++, string);
}, 200);

//using unshift and pop

// let i = 0;
// const screen = createScreen(maxLength);
// setInterval(() => {
//   console.clear();
//   const chars = string.split("").reverse().concat(" ".repeat(maxLength - string.length).split(''));
//   screen.unshift(chars[i++ % maxLength]);
//   screen.pop();
//   console.log(screen.join(""));
// }, 100); 
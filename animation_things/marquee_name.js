const screen = [" ".repeat(50).split("")];
const char = "Paulami";
const index = 0;
let col = 0;

const displayOnScreen = (index, col) => {
  console.clear();
  screen[index][col] = char;
  console.log(screen.map(x => x.join("")).join("\n"));
  screen[index][col] = " ";
};

const intervalId = setInterval(() => {
  console.clear();
  if (col === 50) {
    col = 0;
  }
  displayOnScreen(index, col++);
}, 200);


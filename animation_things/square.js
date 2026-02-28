const maxLength = 6;

const createScreen = (x) => [
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
  " ".repeat(x).split(""),
];

const screen = createScreen(maxLength);

const drawScreen = (screen) => {
  console.log(screen.map((x) => x.join("")).join("\n"));
};

const drawOnScreen = (x, y, char, screen) => {
  screen[x][y] = char;
  return screen;
};

let x = 0;
let y = 0;

const firstID = setInterval(() => {
  console.clear();
  drawOnScreen(x++, y, "*", screen);
  drawScreen(screen);

  if (x === maxLength - 1) {
    clearInterval(firstID);
    x = maxLength - 1;
    y = 0;
    const secondID = setInterval(() => {
      console.clear();
      drawOnScreen(x, y++, "*", screen);
      drawScreen(screen);

      if (y === maxLength) {
        clearInterval(secondID);
        x = maxLength - 1;
        y = maxLength - 1;
        const thirdID = setInterval(() => {
          console.clear();
          drawOnScreen(x--, y, "*", screen);
          drawScreen(screen);

          if (x === 0) {
            clearInterval(thirdID);
            x = 0;
            y = maxLength - 1;
            const fourthID = setInterval(() => {
              console.clear();
              drawOnScreen(x, y--, "*", screen);
              drawScreen(screen);

              if (y === 0) {
                clearInterval(fourthID);
              }
            }, 500);
          }
        }, 500);
      }
    }, 500);
  }
}, 500);

import { createScreen } from "./screen.js";
const putObjectOnScreen = (screen, {text, x, y}) => {
  screen.pixels[x][y] = text;
  console.log(screen.pixels.map(line => line.join("")).join("\n"));
};

const drawObjects = (screen, object) => {
  putObjectOnScreen(screen, object);
};

const updateObjects = (object) => [...object.text].reverse().join("");

const main = () => {
  const objects = {text : "hello", x : 3, y : 3};
  const screen = createScreen(5, 5);
  updateObjects(objects);
  drawObjects(screen, objects);
  // setInterval(() => {
  //   updateObjects(objects);
  //   drawObjects(screen, objects);
  // }, 1000);
};

main();
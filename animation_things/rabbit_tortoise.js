const trackLength = 50;

const createScreen = (x) => "_".repeat(x - 1).concat("🏁").split("");

const drawOnScreen = (screen, y, char) => {
  screen[y] = char;
  console.log(screen.join(""));
};

let i = 0;
let j = 0;

const intervalID = setInterval(() => {
console.clear();
let rY = i+=3 % trackLength;
const rabbitTrack = createScreen(trackLength);
const tortoiseTrack = createScreen(trackLength);

if (rY >= trackLength / 2) {
  rY = Math.floor(trackLength / 2);
}

if (j === trackLength) {
  clearInterval(intervalID);
}

drawOnScreen(rabbitTrack, rY, "R");
drawOnScreen(tortoiseTrack, j++, "T");
}, 400);
function distanceBetweenTwoPoints(x1, y1, x2, y2) {
  return squareRoot(square(x2-x1) + square(y2-y1));
}

function square(y) {
  return y * y;
}

function squareRoot(z) {
  return z ** 0.5;
}

const distance = distanceBetweenTwoPoints(-2, 4, 10, 28);
console.log(distance);
export const createScreen = (height, width) => (
  {
    height,
    width,
    pixels: Array.from(
      { length: height },
      () => Array.from({ length: width }, () => " "),
    ),
  }
);

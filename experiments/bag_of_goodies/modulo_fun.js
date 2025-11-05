function checkerboard(r, c, tiles) {
  const index = (r + c) % 2;
  return tiles[index];
}

function cycled(r, c, tiles) {
  const index = (r + c) % tiles.length;
  return tiles[index];
}

function staggered(r, c, tiles) {
  const index = ((r + c) % 7) % tiles.length;
  return tiles[index];
}

function product(r, c, tiles) {
  const index = (r * c) % tiles.length;
  return tiles[index];
}

function sineOfTheTimes(r, c, tiles) {
  const index =
    Math.floor((Math.sin(Math.PI / tiles.length) + 1) * (r + c)) % tiles.length;
  return tiles[index];
}

function diagonal(r, c, tiles) {
  const index = r > c ? 0 : 1;
  return tiles[index];
}

function chooseTile(pattern, r, c, tiles) {
  const CHECKERBOARD = 'checkerboard';
  const SINE_OF_THE_TIMES = 'sine-of-the-times';
  const CYCLED = 'cycled';
  const PRODUCT = 'product';
  const STAGGERED = 'staggered';
  const DIAGONAL = 'diagonal';

  switch (pattern) {
    case SINE_OF_THE_TIMES:
      return sineOfTheTimes(r, c, tiles);
    case CYCLED:
      return cycled(r, c, tiles);
    case PRODUCT:
      return product(r, c, tiles);
    case STAGGERED:
      return staggered(r, c, tiles);
    case DIAGONAL:
      return diagonal(r, c, tiles);
  }
  return checkerboard(r, c, tiles);
}

function generateRow(pattern, r, cols, tiles) {
  let line = '';
  for (let c = 0; c < cols; c++) {
    const tile = chooseTile(pattern, r, c, tiles);
    line += tile;
  }
  return line;
}

function generateTiles(pattern, rows, cols, tiles) {
  const lines = [];
  for (let row = 0; row < rows; row++) {
    const line = generateRow(pattern, row, cols, tiles);
    lines.push(line);
  }
  return lines.join('\n');
}

function chooseTiles(tileSet) {
  const ROUND_TILES = ['🔴', '🟡', '🔵', '🟢'];
  const SQUARE_TILES = ['⬜️', '⬛️', '🟨', '🟩', '🟦'];
  const DIAMOND_TILES = ['🔷', '🔶', '◆', '🔹'];

  switch (tileSet) {
    case 'round':
      return ROUND_TILES;
    case 'diamond':
      return DIAMOND_TILES;
  }
  return SQUARE_TILES;
}

function main(args) {
  const pattern = args[0];
  const rows = +args[1] || 10;
  const cols = +args[2] || 10;
  const tileSet = args[3];
  const tiles = chooseTiles(tileSet);
  console.log(generateTiles(pattern, rows, cols, tiles));
}

main(Deno.args);
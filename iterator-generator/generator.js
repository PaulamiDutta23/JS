function* sequenceOfConsecutivePairs(array) {
  for (let index = 0; index < array.length - 1; index++) {
    yield [array[index], array[index + 1]];
  }
}

function* allPairPermutation(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      yield [array[i], array[j]];
    }
  }
}

function* cycler(array) {
  let index = 0;
  while (true) {
    yield array[index++ % array.length];
  }
}

function* customLineSeperator(string) {
  let startIndex = 0;
  while (startIndex <= string.length) {
    let endIndex = string.indexOf("\n", startIndex);
    if (endIndex < 0) {
      endIndex = string.length;
    }
    yield string.slice(startIndex, endIndex);
    startIndex = endIndex + 1;
  }
}

const isIdentical = (element) => element;

const isEven = (element) => element % 2 === 0;

function* partitionBy(array, predicate) {
  let prevResult = predicate(array[0]);
  let result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    let currentResult = predicate(array[i]);
    if (prevResult !== currentResult) {
      yield result;
      result = [];
    }
    result.push(array[i]);
    prevResult = currentResult;
  }
  yield result;
}

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let factor = 2; factor <= num / 2; factor++) {
    if (num % factor === 0) {
      return false;
    }
  }
  return true;
};

function* primeSeries(start = 2) {
  let candidate = start;
  while (true) {
    if (isPrime(candidate)) {
      yield candidate;
    }
    candidate++;
  }
}

function* flipConsecutives(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    yield array[i * 2 + 1];
    yield array[i * 2];
  }

  if (array.length & 1) {
    yield array[array.length - 1];
  }
}

function* chunk(array, number, overlap = 0) {
  let start = 0;
  while (start < array.length - overlap) {
    yield array.slice(start, start + number);
    start = start + number - overlap;
  }
}

const add = (val) => val + 1;

function* iterate(fn, number) {
  let prev = fn(number);
  while (true) {
    yield prev;
    prev = fn(prev);
  }
}

const main = () => {
  const array = Array.from({ length: 5 }, (_, i) => i + 1);
  console.log("Sequence Of Consecutive Pairs : ", [
    ...sequenceOfConsecutivePairs(array),
  ]);
  console.log("All Pairs of Permutation : ", [...allPairPermutation(array)]);
  console.log("Cycler of Numbers : ", cycler(array).next().value);
  console.log("Line Seperator : ", [...customLineSeperator("This\nis\ngood")]);
  console.log("Partition By Identity : ", [
    ...partitionBy([1, 1, 1, 2, 2, 1, 1, 3, 3, 2], isIdentical),
  ]);
  console.log("Partition By Odd-Even : ", [
    ...partitionBy([1, 3, 1, 2, 2, 1, 1, 3, 5, 2], isEven),
  ]);
  console.log("Prime series : ", primeSeries(0).next().value);
  console.log("Flipped Consecutives : ", [...flipConsecutives([1, 2, 3, 4])]);
  console.log("Chunk by 2: ", [...chunk([1, 2, 3, 4, 5, 6], 2)]);
  console.log("Chunk by 3, overlap 1: ", [...chunk([1, 2, 3, 4, 5, 6], 3, 1)]);
  console.log("Chunk by 3, overlap 2: ", [...chunk([1, 2, 3, 4, 5, 6], 3, 2)]);
  console.log("Iterate: ", iterate((x) => x + 5, 0).next().value);
};

main();

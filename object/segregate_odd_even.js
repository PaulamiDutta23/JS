const isOdd = (element) => element % 2 === 1;

const segregate = (segregated, candidate) => {
  isOdd(candidate)
    ? segregated.odd.push(candidate)
    : segregated.even.push(candidate);
  return segregated;
};

const segregateOf = (data) => data.reduce(segregate, { odd: [], even: [] });

const obj1 = { odd: [], even: [] };
const obj2 = { odd: [], even: [] };

const isArray = (element) => typeof element === "object";

const areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
};

const areDeepEqual = (array1, array2) => {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
};

const areObjectsEqual = (obj1, obj2) =>
  areDeepEqual(Object.entries(obj1), Object.entries(obj2));

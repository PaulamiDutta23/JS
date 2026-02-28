//PRACTISE SET - 1//
// 1. Write a function that sorts numbers in DESCENDING order\
//    Ex: [5,1,7,2] => [7,5,2,1]

const desecendingSort = (data) => data.sort((a, b) => b - a);

// 2. Write a function that returns all even numbers in ASC order, followed by all
//    odd numbers in ASC order. Ex: [5,2,7,1,4] => [2,4,1,5,7]

const isEven = (num) => num % 2 === 0;

const customOrder = (a, b) => {
  if (isEven(a) && isEven(b)) return a - b;
  if (!isEven(a) && !isEven(b)) return a - b;
  return -1;
};

const evenOddAscSort = (data) => data.toSorted(customOrder);

// 3. Write a function that returns only the numbers whose squares are perfect. Ex:
//    [4,8,9,10,16] => [4,9,16]

const sqrt = (num) => Math.sqrt(num);

const hasPerfectSqrt = (num) => Math.floor(sqrt(num)) - sqrt(num) === 0;

const numWithPerfectSqrt = (data) =>
  data.filter((candidate) => hasPerfectSqrt(candidate));

// 4. Write a function to find common strings between two arrays. Ex:
//    ["a","b","c"], ["b","c","d"] => ["b","c"]

const commonElements = (array1, array2) =>
  array1.filter((elem) => array2.includes(elem));

// 5. Write a function to find all elements of the first array that do NOT appear
//    in the second. Ex: [1,2,3], [2,3,4] => [1]

const diffElements = (array1, array2) =>
  array1.filter((elem) => !array2.includes(elem));

// 6. Write a function that inserts "-" between EVERY character. Ex: "abcd" =>
//    "a-b-c-d"

const insertSpcChar = (String) => String.split("").join("-");

// 7. Given points in 2D, return the pair with MINIMUM distance. Ex:
//    [[0,0],[3,4],[1,1]] => [[0,0],[1,1]]

const sqr = (num) => num * num;

const distanceBw = ([x1, y1], [x2, y2]) =>
  Math.sqrt(sqr(x1 - x2) + sqr(y1 - y2));

const isSamePoint = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;

const closerPair = ([p0, p1], [p2, p3]) =>
  distanceBw(p0, p1) <= distanceBw(p2, p3) ? [p0, p1] : [p2, p3];

const closestPoint = (points, point) =>
  points.reduce((closest, p) => {
    if (isSamePoint(p, point)) {
      return closest;
    }

    return closerPair([closest, point], [p, point])[0];
  }, [Infinity, Infinity]);

const minDistPointPair = (points) =>
  points.map((p) => [p, closestPoint(points, p)])
    .reduce(closerPair);
// 8. Extract ALL consonants from sentences. Ex: ["hi","cat"] => ['h','c','t']
const consonantString = "bcdfghjklmnpqrstvwxyz";

const extractConsonants = (data) =>
  data.flatMap((str) => str.split(""))
    .filter((char) => consonantString.includes(char.toLowerCase()));

// 9. Group elements by whether they INCREASE from previous. Ex: [1,2,3,2,5,6] =>
//    [[1,2,3],[2,5,6]]

const group = (data) =>
  data.reduce((grouped, elem) => {
    const g = grouped[grouped.length - 1];

    g && g[g.length - 1] < elem ? g.push(elem) : grouped.push([elem]);

    return grouped;
  }, []);

// 10. Return sum of indices of FIRST and LAST odd numbers. Ex: [2,3,4,7,6] => 1 +
//     3 => 4

const sumOfIndicesOfFirstLastOdd = (data) =>
  data.findIndex((elem) => !isEven(elem)) +
  data.findLastIndex((elem) => !isEven(elem));

// 11. Return sum of cubes of all even numbers. Ex: [1,2,3,4] => 8 + 64 = 72

const cubeOf = (num) => num * num * num;

const sumOfEvenCubed = (data) =>
  data.filter((elem) => isEven(elem))
    .reduce((sum, elem) => sum + cubeOf(elem), 0);

// <!-- Evaluation part -->

// 12. const f = x => x + 1; const g = x => x * 2; [1,2,3].map(f).map(g)

[4, 6, 8];

// 13. const a = [1]; const b = a.slice(); b[0] = 5; console.log(a, b);

[1][5] // 14. const x = {a:1}; const y = x; y.a = 9; Object.keys(x)
  ["a"] // 15. const arr = [1,2,3]; arr.filter((x,i)=> i%2).map(x=>x*x)
  [4];

// 16. const s = "abc"; console.log(s.split('').reverse().join(''), s);

"cba abc";

//PRACTISE SET - 2//
// 1. Sort numbers in ASCENDING order using a comparator.

const ascendingSort = (data) => data.sort((a, b) => a - b);

// 2. Return array with all odd numbers first (DESC) then even numbers (ASC).

const isOdd = (num) => num % 2 === 1;

const customOrder = (a, b) => {
  if (isOdd(a) && isOdd(b)) return b - a;
  if (!isOdd(a) && !isOdd(b)) return a - b;
  return isOdd(a) ? -1 : 1;
};

const oddEvenDescAscSort = (data) => data.toSorted(customOrder);

// 3. From an array, return ONLY perfect cubes. Ex: [1,8,9,27,10] => [1,8,27]

const cbrt = (num) => Math.cbrt(num);

const hasPerfectCbrt = (num) => Math.floor(cbrt(num)) - cbrt(num) === 0;

const numWithPerfectCbrt = (data) =>
  data.filter((candidate) => hasPerfectCbrt(candidate));

// 4. Find intersection of two arrays of numbers.

const intersectionSet = (array1, array2) =>
  array1.filter((elem) => array2.includes(elem));

// 5. Find all elements of array A not present in array B.

const diffElements = (array1, array2) =>
  array1.filter((elem) => !array2.includes(elem));

// 6. Insert the index before each vowel. Ex: "hello" => "1e4o"

const vowelString = "aeiou";
const insertIndexBeforeVowel = (str) =>
  str.split("").reduce(
    (res, char, index) =>
      vowelString.includes(char.toLowerCase()) ? res.concat(index, char) : res,
    "",
  );

// 7. For 2D points, return the pair with MAXIMUM distance.

const sqr = (num) => num * num;

const distanceBw = ([x1, y1], [x2, y2]) =>
  Math.sqrt(sqr(x1 - x2) + sqr(y1 - y2));

const isSamePoint = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;

const furtherPair = ([p0, p1], [p2, p3]) =>
  distanceBw(p0, p1) >= distanceBw(p2, p3) && distanceBw(p0, p1) !== Infinity
    ? [p0, p1]
    : [p2, p3];

const furthestPoint = (points, point) =>
  points.reduce((furthest, p) => {
    if (isSamePoint(p, point)) {
      return furthest;
    }

    return furtherPair([furthest, point], [p, point])[0];
  }, [-Infinity, -Infinity]);

const maxDistPointPair = (points) =>
  points.map((p) => [p, furthestPoint(points, p)])
    .reduce(furtherPair);

// 8. Extract vowels BUT return them sorted alphabetically.

const extractVowelsAlphabetically = (data) =>
  data.flatMap((word) => word.split("")).reduce(
    (res, char) =>
      vowelString.includes(char) ? res.push(char) && res.sort() : res.sort(),
    [],
  );

// 9. Break array when current number is SMALLER than previous. Ex: [3,4,5,2,7] =>
//    [[3,4,5],[2,7]]

// 10. Sum of indices of FIRST and LAST prime numbers.
const isPrime = (num) => {
  let divisor = 2;

  if(num <= 1) return false;

  while (divisor <= Math.sqrt(num)) {
    if (num % divisor === 0) return false;

    divisor++;
  }
  return true;
};

const sumOfIndicesOfFirstLastPrime = (data) =>
  data.findIndex((elem) => isPrime(elem)) +
  data.findLastIndex((elem) => isPrime(elem));

// 11. Product of all odd numbers (use reduce).

const productOfAllOdds = (data) =>
  data.reduce((res, elem) => isOdd(elem) ? res * elem : res, 1);

// <!-- Evaluation part -->

// 12.

// ```
// const x=[1,2];const y=x;console.log(x===y);
// ```
true;

// 13.

// ```
// const a=[1,2];const b=[1,2]; console.log(a==b);
// ```
false;

// 14.

// ```
// const f=(x,y)=>x>y?x:y; [1,5,2].reduce(f)
// ```
(5)// 15.

// ```
// const obj={a:1,b:2}; Object.entries(obj).map(([k,v])=>k+v)
// ```
["a1", "b2"];
// 16.

// ```
// const z=[1,2,3]; console.log(z.reverse(), z);
[3, 2, 1][3, 2, 1];

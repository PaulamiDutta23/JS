// let dividend = 7;
// const divisor = 3;

// let count = 0;

// while (dividend >= divisor) {
//   count++;
//   dividend -= divisor;
// }

// console.log(count);

function isSubstringAt(string, substring, startIndex) {
  for (let index = 0; index < substring.length; index++) {
    if (string[startIndex + index] !== substring[index]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  for (let index = 0; index < string.length; index++) {
    if (isSubstringAt(string, subString, index) && subString !== "") {
      return true;
    }
  }

  return false;
}
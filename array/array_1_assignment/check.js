function checkEquality(array1, array2, index) {
  if (array1[index] !== array2[index]) {
    return false;
  }

  if(index === array1.length) {
    return true;
  }
  return checkEquality(array1, array2, index + 1);
}
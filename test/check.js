function isWhiteSpace(character) {
  const spaceString = " \n\t";
  console.log(spaceString[1]);

  for (let index = 0; index < spaceString.length; index++) {
    if (character !== spaceString[index]) {
      return true;
    }
  }

  return false;
}

isWhiteSpace("\n");
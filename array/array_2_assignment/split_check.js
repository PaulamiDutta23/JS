function split(sentence, delimiter) {
  const arrayOfChunks = [];
  let chunkStartIndex = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === delimiter) {
      chunk = sentence.slice(chunkStartIndex, index);
      chunkStartIndex = index + 1;
      arrayOfChunks.push(chunk);
    }
  } 

  return arrayOfChunks;
}
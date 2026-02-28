const data = [1, 3, 2, 1, 3, 2, 4, 5];

//frquency table using object
const frequency = (frequencyTable, key) => {
  if (!(key in frequencyTable)) {
    frequencyTable[key] = 0;
  }

  frequencyTable[key]++;
  return frequencyTable;
};

const frequencyOf = data => data.reduce(frequency, {});

console.log(frequencyOf(data));
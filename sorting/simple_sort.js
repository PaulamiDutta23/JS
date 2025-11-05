let noOfTimes = 0;

function maxOf(data, threshold) {
  let max = -Infinity;
  for (let index = 0; index < data.length; index++) {
    noOfTimes++;
    if(data[index] > max && data[index] < threshold) {
      max = data[index];
    }
  }
  return max;
}

function sort(data) {
  const sortedData = [];
  let max = Infinity;
  for (let index = 0; index < data.length; index++) {
    max = maxOf(data, max);
    sortedData.push(max);
  }

  console.log(sortedData);
  return noOfTimes;
}

function benchmark() {
  const data = [130, 211, 322, 300, 250];
  const noOfData = data.length;
  const timeTook = sort(data);
  console.log(`${noOfData} | ${timeTook}`);
}

benchmark();
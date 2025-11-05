function generateNumberBetween(lower, upper) {
  return lower + Math.round(Math.random() * (upper - lower));
}

function randomData(noOfElemnts) {
  const data = [];
  
  for (let count = 0; count < noOfElemnts; count++) {
    const element = generateNumberBetween(0, 100);
    data.push(element);
  }
  return data;
}

function sort(data) {
  const sortedData = data.slice();
  
  for(let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {

      if (sortedData[j] > sortedData[i]) {
        const temp  = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  
  return sortedData;
}

function calculateMedian(data) {
  const sortedData = sort(data);
  const midIndex = Math.floor(data.length / 2);
  const median = sortedData[midIndex];
  
  console.log(data, sortedData, "\t\t", median);
}

function main() {
  const noOfElemnts = prompt("Enter the no of elements : ");
  const data = randomData(noOfElemnts);
  calculateMedian(data);
}

main();
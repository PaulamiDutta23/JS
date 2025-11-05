let noOfIteration = 0;

function sort(data) {
  const sortedData = data.slice();
  
  for(let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
     noOfIteration++;

      if (sortedData[j] > sortedData[i]) {
        const temp  = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  
  console.log(sortedData);
  return noOfIteration;
}

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

function benchmark(noOfElemnts) {
  const data = randomData(noOfElemnts);
  const timeTook = sort(data);
  console.log(`${noOfElemnts} | ${timeTook}`);
}

function main() {
  const noOfElemnts = prompt("Enter the no of elements : ");
  benchmark(noOfElemnts);
}

main();
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

function calculateMean(data) {
  let sumOfElements = 0;
  for(let index = 0; index < data.length; index++) {
    sumOfElements = sumOfElements + data[index];
  }
  return sumOfElements / data.length;
}

function calculateSD(data) {
  const mean = calculateMean(data);
  let sumOfSquaredDistances = 0;

  for (let index = 0; index < data.length; index++) {
    const distance = data[index] - mean;
    sumOfSquaredDistances = sumOfSquaredDistances + Math.pow(distance, 2);   
  }
  const sd = Math.sqrt(sumOfSquaredDistances / data.length);

  console.log(`${data} | ${mean} | ${sd}`);
}

function main() {
  const noOfElemnts = prompt("Enter the no of elements : ");
  const data = randomData(noOfElemnts);
  calculateSD(data);
}

main();
const add = function(a, b) {
  return a + b;
}

const increment = function(value, incrementer) {
  return add(value, incrementer);
}

console.log("Increment by 2 ", increment(5, 2));
console.log("Increment by 3 ", increment(5, 3));
const a = function(x) {
  return x;
};

const b = function(a, n) {
  return a(n);
};

console.log(b(a, 2));
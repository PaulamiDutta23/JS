import { resolve } from "node:path";

const p = Deno.readTextFile("./files")
  .then((x) => x.split("\n"))
  .then(files => files.map(file => Deno.readTextFile(`./${file}`)))
  .then(x => Promise.all(x))
  .then(x => console.log(x));

setTimeout(() => console.log(p), 0);

// console.log(p);

// setTimeout(() => {
//   console.log("inside set time out, before then");
//   p.then(x => console.log("inside then",x.split("\n")));
// },0);

console.log("Global scope : before any promises");

const p1 = new Promise((resolve,reject) => {
  console.log("Inside first promise");
  resolve(1);
});

const p2 = new Promise((resolve,reject) => {
  console.log("Inside second promise");
  resolve(2);
});

p1.then(x => {
  console.log("Inside then of first promise");
  return 2;
});

setTimeout(() => console.log(p), 8000);
console.log("Global scope : after all promises and then");

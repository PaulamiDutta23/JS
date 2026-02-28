const delayed = (value, time) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(value), time)
  );
};

const p1 = delayed(1, 1000);
const p2 = delayed(2, 10000);
const p3 = delayed(3, 3000);

Promise.all([p1,p2,p3]).then(value => console.log(value));
// setTimeout(() => {
//   const promises = [];
//   promises.push(p1, p2, p3);
//   console.log(promises);
// },6000);

const performTask = (desc, time) => {
  const startTime = Date.now();
   return new Promise((resolve) => {
    setTimeout(() => {
      const endTime = Date.now();
      // console.log("done");
      // resolve({
      //   name: desc,
      //   start: startTime,
      //   end: endTime,
      //   duration: endTime - startTime,
      // });
      console.log({
        name: desc,
        start: startTime,
        end: endTime,
        duration: endTime - startTime,
      });
    }, time);
  });
};

//USING THEN CHAIN
Promise.resolve().then(performTask("task1",20000)).then(performTask("task2",10000));
// const tasks = {
//   task1: () => performTask("task1", 1000),
//   task2: () => performTask("task2", 1000),
// };

// let p = Promise.resolve("");

// //USING THEN CHAIN IN A LOOP
// // for (const task in tasks) {
// //   p = p.then(tasks[task]).then(console.log);
// // }

// //USING ASYNC-AWAIT
// const result = [];

// const perform = async () => {
//   for (const task in tasks) {
//     result.push(await p.then(tasks[task]));
//   }
//   return result;
// };

// console.log(await perform());

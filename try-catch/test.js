import { distinctBy } from "jsr:@std/collections";
const a = 10;
// try {
//   a++;
//   throw "incremet to constant";
// } catch (e) {
//   let a = 0;
//   a = a + 1;
//   console.log(e);
//   console.log("caught");
//   console.log(a);
// }

// console.log(a);

// try {
//   a = 78;
//   try {
//     throw "error";
//   } catch {
//   }
// } catch (e) {
//   console.log(e);
//   console.log("caught");
//   throw 'error 2';
// }

const f3 = () => {
  try {
    f4();
  } catch (error) {
    throw "error1";
  }
};
const f2 = () => {
  try {
    f3();
  } catch (error) {
    console.log("error in f2");
    console.log(error);
  }
};
const f1 = () => {
  try {
    f4();
    distinctBy([{ x: 2, y: 1 }, { x: 1, y: 1 }]);
  } catch (error) {
    console.log("error in f1");
  }
  console.log("after error");
};
f1();

try {
  setTimeout(() => {
    try {
      throw "error in time out";
    } catch (error) {
      console.log(error, "2");
    }
  }, 100);
} catch (error) {
  console.log(error);
}

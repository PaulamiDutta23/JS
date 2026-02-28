/* MULTIPLE REJECTION / RESOLVE
const p = new Promise((resolve, reject) => {
  console.log("before resolution");
  reject(4);
  console.log("rejection happened");
  console.log("after first rejection");
  reject();
  console.log("after second rejection");
  resolve(6);
  console.log("after resolution");
  const p1 = new Promise((resolve, reject) => {
    console.log("inside nested promise");
    resolve(2);
  })
    .then((x) => {
      console.log("inside then");
      return x;
    });

  setTimeout(() => console.log("inside second set timeout",p1), 0);
  console.log("after the nested promise and set timeout",p1);
});

setTimeout(() => console.log("inside first set timeout",p), 0);
*/

/* REJECTION USING CATCH
const p = Promise.resolve(1);
const rejected = Promise.reject(2);
setTimeout(() => console.log( rejected),0);
setTimeout(() => console.log(p),0);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
*/

/* RETURNING DIFFERENT VALUE FROM THEN
const p1 = new Promise((resolve, reject)=> resolve(undefined)).then(x => {return 1});
setTimeout(() => console.log(p1),0);
*/

Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("inside first set timeout");
          string += "bar";
          resolve(string);
        }, 1);
      }),
  )
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then((string) => {
    setTimeout(() => {
      console.log("inside second set timeout");
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then((string) => {
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
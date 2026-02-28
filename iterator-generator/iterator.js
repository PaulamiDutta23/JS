// const iterator = () => {
//   let i = 0;
//   return {
//     next() {
//       return i < 5
//         ? { value: i++, done: false }
//         : { value: undefined, done: true };
//     },
//   };
// }; // fake iterator

const iterator = () => {
  return {
    next() {
      return true
        ? { value: this, done: false }
        : { value: undefined, done: true };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
};

const customIterator = (string) => {
  return {
    next() {
      const indexOfSeperator = string.indexOf("\n") === -1 ? string.length : string.indexOf("\n");
      if (indexOfSeperator <= string.length) {
        const curString = string.slice(0, indexOfSeperator);
        string = string.slice(indexOfSeperator + 1);
        return { value: curString, done: false };
      }
      return { value: undefined, done: true };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
};

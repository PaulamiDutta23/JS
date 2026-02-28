const delayed = (value, time) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(value), time)
  );
};

Promise.resolve(2).then(() => delayed(1,30000)).then(() => delayed(2,30000));
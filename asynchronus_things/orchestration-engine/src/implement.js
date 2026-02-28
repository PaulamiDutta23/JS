const RESULT = [];
const dbg = (msg = "", ...x) => {
  console.log(msg, "\t", ...x);
  return [...x];
};

const createLog = (mode, task, start, end) => ({
  mode,
  log: { desc: task, start, end, duration: end - start },
});

const performTask = (task, time, mode) => {
  const start = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      const end = Date.now();
      RESULT.push(createLog(mode, task, start, end));
      resolve();
    }, time);
  });
};

const perform = async () => {
  const data = await Deno.readTextFile("./data/recipe1.txt").then((content) =>
    content.split("\n")
  );

  for (const line of data) {
    const tasks = line.split(",");
    let mode = "serial";

    if (tasks.length > 1) {
      mode = "parallel";
    }
    tasks.length > 1
      ? await Promise.all(
        tasks.map((t) => performTask(t, 1000, mode)),
      )
      : await Promise.resolve().then((_) => performTask(line, 1000, mode));
  }
};

const main = async () => {
  await perform();
  console.log(RESULT);
};

main();
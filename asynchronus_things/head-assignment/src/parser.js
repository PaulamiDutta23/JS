const OPTIONS = ["-n", "-c", "-q"];
class Scanner {
  constructor(args) {
    this.args = args;
  }
  peek() {
    const token = this.args[0];
    return token;
  }
  consume() {
    const token = this.args.shift();
    return token;
  }
  flush() {
    return this.args.splice(0);
  }
  isDone() {
    return this.args.length === 0;
  }
}

const setQuietMode = (obj, s) => {
  obj.quietMode = true;
  s.consume();
};

const setOptionCount = (obj, s) => {
  obj.option = s.consume();
  const nextToken = s.peek();
  const tokenValue = parseInt(nextToken);

  if (isNaN(tokenValue) || tokenValue < 0) {
    throw new Error(`head: illegal line count -- ${nextToken}`);
  }
  s.consume();
  obj.count = tokenValue;
};

const TOKENS = {
  "-q": setQuietMode,
  "-c": setOptionCount,
  "-n": setOptionCount,
};

export const parse = (args) => {
  const validArgs = { option: "-n", count: 10, quietMode: false, files: [] };
  const s = new Scanner(args);
  while (!s.isDone()) {
    const token = s.peek();
    if (!OPTIONS.includes(token)) {
      validArgs.files = s.flush();
    } else {
      TOKENS[token](validArgs, s);
    }
  }
  return validArgs;
};

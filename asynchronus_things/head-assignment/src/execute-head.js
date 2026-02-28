import { parse } from "./parser.js";
import { OPTIONS } from "./transformer.js";

const customReadableStreams = (files) => {
  return files.map((file) =>
    Deno.open(file)
      .then((content) => ({ content, isFilePresent: true }))
      .catch(() => ({ content: ``, isFilePresent: false }))
  );
};

export const executeHead = (args, writableStream) => {
  const { quietMode, option, count, files } = parse(args);
  const transformer = OPTIONS[option];
  if (files.length < 1) {
    const content = head(Deno.stdin.readable, transformer, count, quietMode);
    return writableStream.write(content);
  }

  const readableStreams = customReadableStreams(files);
  readableStreams.map((readableStream) =>
    head(readableStream, transformer, count, quietMode)
  );
};

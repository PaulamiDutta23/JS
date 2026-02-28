import { assertEquals } from "@std/assert/equals";
import { transformByLine } from "../last-n-lines.js";

Deno.test("file contains more than 10 lines", async () => {
  const encoder = new TextEncoder();
  const mockData = encoder.encode(
    `1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12`,
  );
  const mockReadable = new ReadableStream({
    start(controller) {
      controller.enqueue(mockData);
      controller.close();
    },
  });

  let actual = new Uint8Array();

  const mockWritable = new WritableStream({
    write(chunk) {
      actual = chunk;
    },
  });

  await mockReadable.pipeThrough(transformByLine(3)).pipeTo(mockWritable);
  assertEquals(actual, encoder.encode(`10\n11\n12`));
});

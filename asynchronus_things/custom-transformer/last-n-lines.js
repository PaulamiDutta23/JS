export function transformByLine(count) {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let bufferData = "";
  return new TransformStream({
    transform(chunk) {
      const decoded = decoder.decode(chunk);
      bufferData += decoded;
    },

    flush(controller) {
      const lines = bufferData.split("\n");
      const lastNLines = encoder.encode(lines.slice(-count).join("\n"));
      controller.enqueue(lastNLines);
    }
  });
}
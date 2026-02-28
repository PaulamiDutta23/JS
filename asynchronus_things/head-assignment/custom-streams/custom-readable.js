const customReader = (text) => {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(text));
      controller.close();
    },
  });
};

const reader = customReader("hello world").getReader();
const bytesRead = await reader.read();
console.log(bytesRead)
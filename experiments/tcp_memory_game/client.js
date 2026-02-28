const createConnection = async (port) => {
  const connection = await Deno.connect({
    hostname: "127.0.0.1",
    port,
    transport: "tcp",
  });
  return connection;
};

const readResponse = async (connection) => {
  const decoder = new TextDecoder();
  const buffer = new Uint8Array(1024);
  const n = await connection.read(buffer);
  const response = decoder.decode(buffer.slice(0, n));
  return response;
};

const handleRequest = async (connection) => {
  const request = prompt(">");
  const encoder = new TextEncoder();
  await connection.write(encoder.encode(request));
  const response = await readResponse(connection);
  console.clear();
  console.log(response);
};

const client = async (port) => {
  const connection = await createConnection(port);
  handleRequest(connection)
};

client(8000);

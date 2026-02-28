const createListener = (port) => {
  const listener = Deno.listen({ port, transport: "tcp" });
  return listener;
};

const readRequest = async (connection) => {
  const decoder = new TextDecoder();
  const buffer = new Uint8Array(1024);
  const n = await connection.read(buffer);
  const request = decoder.decode(buffer.slice(0, n));
  return request.trim();
};

const areNotEqual = (allWords, userStrings) => {
  return allWords !== userStrings;
};

const respondToClients = async (connections, response) => {
  const encoder = new TextEncoder();
  for await (const connection of connections) {
    await connection.write(encoder.encode(`> ${response}\n`));
  }
};

const startGame = async (connections) => {
  const words = [];
  let i = 0;
  const encoder = new TextEncoder();
  while (true) {
    const currentConnection = connections[i++ % connections.length];
    const request = await readRequest(currentConnection);
    const userWords = request.split(" ");
    const newWord = userWords[userWords.length - 1];
    words.push(newWord);
    const allWords = words.join(" ");

    if (areNotEqual(allWords, request)) {
      currentConnection.close();
      connections.splice(connections.indexOf(currentConnection), 1);
      await connections[0].write(encoder.encode(">>> YOU WON!!!"));
      connections[0].close();
      break;
    }
    respondToClients(connections, newWord);
  }
};

const launchServer = async (port) => {
  const listener = createListener(port);
  const connections = [];

  for await (const connection of listener) {
    connections.push(connection);
    if (connections.length === 2) {
      break;
    }
  }
  startGame(connections);
};

const main = (args) => {
  const [port = "8000"] = args;
  launchServer(+port);
};

main(Deno.args);

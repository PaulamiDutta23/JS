const FRUIT_WORDS = [
  "fig",
  "melon",
  "nut",
  "kiwi",
  "plum",
  "pear",
  "date",
  "lime",
  "litchi",
  "apple",
  "mango",
  "grape",
  "guava",
  "lemon",
  "berry",
  "olive",
  "papaya",
  "banana",
  "raisin",
  "peach",
];

const createResponse = (body) => {
  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application-json" },
  });
};

const generateWord = () => {
  return FRUIT_WORDS[Math.floor(Math.random() * FRUIT_WORDS.length)];
};

const generateGame = (games, id) => {
  const word = generateWord();
  games[id] = { wordsStack: [word], score: 0 };

  const body = { id, word, isEnd: false };
  return createResponse(body);
};

const validate = (wordsStack, words) => wordsStack === words;

const updateGames = (games, id, word) => {
  games[id].wordsStack.push(word);
  games[id].score++;
};

const createBodyOnSuccess = (games, id, word) => {
  updateGames(games, id, word);
  const body = {
    id,
    isEnd: false,
    score: games[id].score,
    word,
  };

  return body;
};

const createBodyOnFailure = (games, id, userResponse) => {
  const body = {
    id,
    isEnd: true,
    score: games[id].score,
    userResponse,
    wordsStack: games[id].wordsStack,
  };
  delete games[id];
  return body;
};

const validateMove = (games, id, userResponse) => {
  const wordsStack = games[id].wordsStack.join(" ");
  const isCorrect = validate(wordsStack, userResponse);
  const nextWord = generateWord();
  const body = isCorrect
    ? createBodyOnSuccess(games, id, nextWord)
    : createBodyOnFailure(games, id, userResponse);

  return createResponse(body);
};

const handleRequest = async (request, games) => {
  const method = request.method;
  const pathname = new URL(request.url).pathname;
  console.log(`Method: ${method}, Pathname: ${pathname}`);
  if (pathname === "/games" && method === "POST") {
    games.id++;
    return generateGame(games, games.id);
  }

  if (pathname.includes("/games/") && method === "POST") {
    const gameId = pathname.split("/").pop();
    const requestBody = await request.json();
    const userResponse = requestBody.words;
    return validateMove(games, gameId, userResponse);
  }
};

const createRequestHandler = (games) => {
  return async (request) => await handleRequest(request, games);
};

const main = async () => {
  const games = { id: 0 };
  const requestHandler = await createRequestHandler(games);
  Deno.serve({ port: 8000 }, requestHandler);
};

await main();

const MESSAGES = {
  404: "Invalid game id",
  500: "Server error",
};

const generateGame = (games, id) => {
  const secretNumber = Math.floor(Math.random() * 50);
  games[id] = { gameId: id, secretNumber, attempts: 0 };
  console.log(`Id: ${id}, Secret Number: ${secretNumber}`);
  const body = { gameId: id };
  return createResponse(body);
};

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    throw new Error("Invalid guess");
  }
};

const createErrorResponse = (status, message) => {
  const body = { message: message || MESSAGES[status] };
  return new Response(
    JSON.stringify(body),
    {
      status,
      headers: { "content-type": "application/json" },
    },
  );
};

const generateMessage = (guess, secretNumber) => {
  if (guess > secretNumber) {
    return "Too high!!!";
  }
  if (guess < secretNumber) {
    return "Too low!!!";
  }
  return "Matched";
};

const createResponse = (body) =>
  new Response(JSON.stringify(body), {
    headers: { "content-type": "application/json" },
  });

const generateActionResponse = (games, guess, gameId) => {
  if (!(gameId in games)) return createErrorResponse(404);

  const attempts = ++games[gameId].attempts;
  const secretNumber = games[gameId].secretNumber;
  const message = generateMessage(guess, secretNumber);
  let body = { attempts, message };

  if (attempts === 5 || guess === secretNumber) {
    body = { attempts, secretNumber, message };
    delete games[gameId];
  }
  return createResponse(body);
};

const handleRequest = async (request, games) => {
  const pathname = new URL(request.url).pathname;
  console.log(`Method: ${request.method}, Path: ${pathname}`);
  try {
    if (pathname === "/games" && request.method === "POST") {
      games.id++;
      return generateGame(games, id);
    }

    if (pathname.includes("/games/") && request.method === "POST") {
      const gameId = pathname.split("/").pop();
      const requestBody = await request.json();
      const guess = Number(requestBody.guess);
      validateGuess(guess);
      console.log(`Guess : ${guess}, Id :${gameId}`);

      return generateActionResponse(games, guess, gameId);
    }
    return createErrorResponse(500);
  } catch (error) {
    return createErrorResponse(400, error.message);
  }
};

const createRequestHandler = (games) => {
  return (request) => handleRequest(request, games);
};

const main = () => {
  const games = { id: 0 };
  const requestHandler = createRequestHandler(games);
  Deno.serve({ port: 8000 }, requestHandler);
};

main();

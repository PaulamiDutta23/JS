const getResponseFor = async (method, path, requestBody) => {
  const response = await fetch(`http://localhost:8000${path}`, {
    method,
    body: JSON.stringify(requestBody),
  });
  const body = await response.json();
  return { response, body };
};

const showResult = (responseBody) => {
  const wordsStack = responseBody.wordsStack.join(" ");
  const userResponse = responseBody.userResponse;
  const score = responseBody.score;
  console.log(
    `\n\nGAME OVER!!!\n\nScore: ${score}\nWords: ${wordsStack}\nYou typed: ${userResponse}`,
  );
};

const playGame = async (id, body) => {
  let responseBody = body;
  while (!responseBody.isEnd) {
    const nextWord = responseBody.word;
    console.log(nextWord);
    const words = prompt("Enter the words: ");
    const requestBody = { words };
    const { _response, body } = await getResponseFor(
      "POST",
      `/games/${id}`,
      requestBody,
    );
    console.clear();
    responseBody = body;
  }
  return showResult(responseBody);
};

const startClient = async () => {
  const { _response, body } = await getResponseFor("POST", "/games");
  const id = body.id;
  console.log(`Your game id is ${id}`);
  return await playGame(id, body);
};

await startClient();

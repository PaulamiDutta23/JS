const getUserGuess = () => {
  const guess = +prompt("Guess the number : ");
  if (isNaN(guess)) {
    console.log("Enter a valid integer!!!");
    return getUserGuess();
  }
  return guess;
};

const getResponseFor = async (path, method, requestBody) => {
  const response = await fetch(`http://localhost:8000/${path}`, {
    "method": method,
    "Content-Type": "application/json",
    "body": JSON.stringify(requestBody),
  });
  const body = await response.json();
  return { response, body };
};

const playGame = async (id) => {
  for (let i = 0; i < 5; i++) {
    const guess = getUserGuess();
    const requestBody = { guess };
    const { response, body } = await getResponseFor(
      `games/${id}`,
      "POST",
      requestBody,
    );

    if (response.status !== 200) {
      console.log(body.message);
      return;
    }

    if (body.message.includes("Matched")) {
      console.log(`You won in ${body.attempts} attempts`);
      return;
    }

    console.log(
      `${body.message}\nYou have just ${5 - body.attempts} chances`,
    );

    if (body.attempts === 5) {
      console.log(`The secret number was ${body.secretNumber}`);
    }
  }
};

const startClient = async () => {
  const { response, body } = await getResponseFor("games", "POST");

  if (response.status !== 200) {
    console.log(body.message);
    return;
  }

  const id = body.gameId;
  console.log(`Your game id : ${id}`);
  return playGame(id);
};

await startClient();

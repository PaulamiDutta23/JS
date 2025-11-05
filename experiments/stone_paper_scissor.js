const ELEMENTS = ["🪨", "📜", "✂️"];

function hasSystemWon(moveCombination) {
  switch (moveCombination) {
    case "13":
    case "21":
    case "32":
      return true;
    default:
      return false;
  }
}

function hasUserWon(moveCombination) {
  switch (moveCombination) {
    case "12":
    case "23":
    case "31":
      return true;
    default:
      return false;
  }
}

function displayFinalResult(points) {
  console.log("!!! Game Over !!!");

  if (points[0] > points[1]) {
    return console.log("\n\n🏆 You rocked it !!!");
  }
  return console.log("\n\n😔 Better Luck Next Time !!!");
}

function displayResult(systemMoveNumber, userMoveNumber, userPoint, systemPoint) {
  const message = `User's point :${userPoint}\nSystem's point :${systemPoint}
  \nUser's move :${ELEMENTS[userMoveNumber - 1]}\t\tSystem's move :${ELEMENTS[systemMoveNumber - 1]}\n`;

  console.log(message);
}

function playGame(systemMoveNumber, userMoveNumber, points) {
  let userPoint = points[0];
  let systemPoint = points[1];
  const moveCombination = "" + systemMoveNumber + userMoveNumber;

  if (hasUserWon(moveCombination)) {
    userPoint++;
  } else if (hasSystemWon(moveCombination)) {
    systemPoint++;
  } else {
    console.log("TIE !!!");
  }

  displayResult(systemMoveNumber, userMoveNumber, userPoint, systemPoint);
  return [userPoint, systemPoint];
}

function isInvalid(move) {
  return move < 1 || move > 3;
}

function startGame(points) {
  if (points[0] === 3 || points[1] === 3) {
    return displayFinalResult(points);
  }
  
  const systemMoveNumber = Math.floor(ELEMENTS.length * Math.random()) + 1;
  const userMoveNumber = +prompt("\nEnter your move :");
  
  if (isInvalid(userMoveNumber)) {
    console.log("Enter a valid move number !!!");
    return startGame(points);
  }

  points = playGame(systemMoveNumber, userMoveNumber, points);
  return startGame(points);
}

function showDisclaimer() {
  const introductionMessage = `
  😁 GAME : STONE-PAPER-SCISSOR 😁\n
  🤗 Read the instructions 🤗\n\n
  👉 This game is against System
  👉 There are 3 elements : Rock, Paper, Scissor\n
     Enter your move as follows ->
     1 : Rock
     2 : Paper
     3 : Scissor
  👉 Your goal is to get 3 points
  👉 If system gets 3 points it will win, otherwise you will win`;
  console.log(introductionMessage);
}

function playAgain() {
  const decision = confirm("\nDo you want to play again?");
  return decision;
}

function main() {
  showDisclaimer();
  const points = [0, 0];
  startGame(points);

  while (playAgain()) {
    startGame(points);
  }
}

main();
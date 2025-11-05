const ELEMENTS = ["🗿", "📜", "✄"];
let userPoint = 0;
let systemPoint = 0;

function hasUserWon(moveCombination) {
  switch(moveCombination) {
    case "01" :
    case "12" :
    case "20" :  
      return true;
    default :
      return false;
  } 
}

function hasSystemWon(moveCombination) {
  switch(moveCombination) {
    case "10" :
    case "21" :
    case "02" :  
      return true;
    default :
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

function displayResult(systemMoveNumber, userMoveNumber, points) {
  const message = `User's point :${points[0]}\nSystem's point :${points[1]}
  \nUser's move :${ELEMENTS[userMoveNumber]}\t\tSystem's move :${ELEMENTS[systemMoveNumber]}\n`;
  
  console.log(message);
}

function calculatePoint(moveCombination) {
  if (hasUserWon(moveCombination)) {
    userPoint++;
  } else if (hasSystemWon(moveCombination)) {
    systemPoint++;
  } else {
    console.log("TIE !!!");
  }

  return [userPoint, systemPoint];
}

function playGame(systemMoveNumber, userMoveNumber) {
  const moveCombination = "" + systemMoveNumber + userMoveNumber;

  const points = calculatePoint(moveCombination);

  displayResult(systemMoveNumber, userMoveNumber, points);

  if (points[0] < 3 || points[1] < 3) {
    return startGame();
  }
  return displayFinalResult(points);
}


function startGame() {
  const systemMoveNumber = Math.floor(ELEMENTS.length * Math.random());
  const userMoveNumber = +prompt("Enter your move :");
  playGame(systemMoveNumber, userMoveNumber);
}

function main() {
  startGame();
}

main();
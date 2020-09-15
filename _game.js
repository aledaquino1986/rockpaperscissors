const computerPlay = function () {
  let randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
};

const askPlayerOption = function () {
  let playersChoice = prompt("Please select 'rock', 'paper' or 'scissors'");

  if(playersChoice) {
    playersChoice = playersChoice.toLowerCase().trim();
  }

  if (playersChoice === null) {
    alert("Sad you don't want to play");
    return;
  } else if (!playersChoice || playersChoice === "0") {
    alert("Wrong input. Please choose 'rock', 'paper' or 'scissors'.")
  } else {
    return playersChoice;
  }
};

const userPlay = function () {
  let playersChoice = askPlayerOption();
  switch (playersChoice) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissors":
      return "scissors";
      break;
  }
};

const cpuWins = "The CPU has won.";
const userWins = "The player has won.";
const drawGame = "It's a tie!";

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return drawGame;
  } else {
    if (playerSelection === "rock") {
      switch (computerSelection) {
        case "paper":
          return cpuWins;
          break;
        case "scissors":
          return userWins;
          break;
      }
    } else if (playerSelection === "paper") {
      switch (computerSelection) {
        case "rock":
          return "The player has won. ";
          break;
        case "scissors":
          return cpuWins;
          break;
      }
    } else if (playerSelection === "scissors") {
      switch (computerSelection) {
        case "rock":
          return cpuWins;
          break;
        case "paper":
          return userWins;
          break;
      }
    }
  }
};

const logResults = function(playerCount, cpuCount, tieGame, score) {
  console.log(
    `${score}: Player Count: ${playerCount}, CPU count: ${cpuCount}, tie games: ${tieGame}`)
}

const game = function () {
  let playerCount = 0;
  let cpuCount = 0;
  let tieGame = 0;
  let score = "Score: "
  let finalScore = "Final score: "

  for (let i = 0; i < 5; i++) {
    let match = playRound(userPlay(), computerPlay());
    
    if (!match) {
      return;
    } else if (match === cpuWins) {
      console.log(cpuWins);
      cpuCount++;
      logResults(playerCount, cpuCount, tieGame, score);
    } else if (match === userWins) {
      console.log(userWins);
      playerCount++;
      logResults(playerCount, cpuCount, tieGame, score);;
    } else if (match === drawGame) {
      console.log(drawGame);
      tieGame++;
      logResults(playerCount, cpuCount, tieGame, score);;
    }
  }
  
  if (playerCount > cpuCount) {
    console.log("The player is victorious!");
  } else if (cpuCount > playerCount) {
    console.log("The CPU is victorious!");
  } else {
    console.log("It's a draw!");
  }
  logResults(playerCount, cpuCount, tieGame, finalScore);
};

game();

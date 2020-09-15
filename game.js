const rockButton = document.querySelector(".fa-hand-rock-o");
const scissorsButton = document.querySelector(".fa-hand-scissors-o");
const paperButton = document.querySelector(".fa-hand-paper-o");
const playerChoiceImage = document.querySelector(".player-choice img");
const CPUChoiceImage = document.querySelector(".cpu-choice img");
const victoryText = document.querySelector(".winner-section p");
const gameTitle = document.querySelector(".title");
const sections = document.querySelectorAll("section");
const mainContainer = document.querySelector("main");
const winnerSection = document.querySelector(".winner-section")
const body = document.body;
const startGameButtonSection = document.querySelector(".initial-button")
const startGameButton = document.querySelector("button");
const inputRounds = document.querySelector("#input-rounds");
let numberOfRounds = 0;




const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const cpuWins = "The CPU has won.";
const userWins = "The player has won.";
const drawGame = "It's a tie!";

let round = 0;
let playerCount = 0;
let cpuCount = 0;
let tieGame = 0;

const computerPlay = function () {
  let randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      CPUChoiceImage.src = "images/rock.png";
      return ROCK;
    case 2:
      CPUChoiceImage.src = "images/paper.png";
      return PAPER;
    case 3:
      CPUChoiceImage.src = "images/scissors.png";
      return SCISSORS;
  }
};

const askPlayerOption = function () {};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return drawGame;
  } else {
    if (playerSelection === ROCK) {
      switch (computerSelection) {
        case PAPER:
          return cpuWins;

        case SCISSORS:
          return userWins;
      }
    } else if (playerSelection === PAPER) {
      switch (computerSelection) {
        case ROCK:
          return userWins;

        case SCISSORS:
          return cpuWins;
      }
    } else if (playerSelection === SCISSORS) {
      switch (computerSelection) {
        case ROCK:
          return cpuWins;

        case PAPER:
          return userWins;
      }
    }
  }
};


const removeInvisibleSection = (section) => {
  if (section.classList.contains("invisible")) {
    section.classList.remove("invisible");
  }
}

const makeVisibleGame = (sections) => {
  
  sections.forEach(section => {
    if (!(section.classList.contains("invisible"))) {
      section.classList.add("invisible");
    } else {
      section.classList.remove("invisible");
    }
    
  })
}



const changeRoundNumber = () => {
  const roundTitle = document.querySelector(".round-number");
  roundTitle.innerText = round;
  return roundTitle;
};

const changePlayerVictoryNumber = () => {
  const victoryNumber = document.querySelector(".win-player p");
  victoryNumber.innerText = playerCount;
  return victoryNumber;
};

const changeCPUVictoryNumber = () => {
  const victoryNumber = document.querySelector(".win-cpu p");
  victoryNumber.innerText = cpuCount;
  return victoryNumber;
};

const changeTieNumber = () => {
  const victoryNumber = document.querySelector(".ties p");
  victoryNumber.innerText = tieGame;
  return victoryNumber;
};

const changeVictoryText = (message) => {
  victoryText.innerText = "";
  victoryText.innerText = message;
  return victoryText;
};

const logResults = function (playerCount, cpuCount, tieGame) {
  mainContainer.classList.remove("container"); 
  mainContainer.classList.add("center-title");
  sections.forEach((section) => {
    if(!(section.classList.contains("title") && !(section.classList.contains("initial-button") ))) {
      section.classList.add("invisible")
    } else {
      section.classList.toggle("center-title")
    }
    
  })
  const resultParagraph = document.createElement("p");
  const span = document.createElement("p");
  resultParagraph.innerText = `Player victories: ${playerCount}. CPU victories: ${cpuCount}. Tie matches: ${tieGame}.`;
  if (playerCount > cpuCount) {
    span.innerText = "The player is victorious!";
    
  } else if (cpuCount > playerCount) {
    span.innerText = "The CPU is victorious!";
  } else {
    span.innerText = "Tie game!";
  }
  span.classList.add("winner")
  gameTitle.appendChild(span);
  gameTitle.appendChild(resultParagraph);
};


const createReloadButton = () => {
  const reloadButton = document.createElement("button");
  reloadButton.innerText = "Reload Page";
  reloadButton.classList.add("reload");
  gameTitle.appendChild(reloadButton);
  reloadButton.addEventListener("click", () => {
    location.reload()
  })
}

const checkIfRoundIs5 = () => {
  console.log("round is", round);
  console.log("la partida es de", numberOfRounds);
  console.log(round === numberOfRounds);
  if (round === numberOfRounds) {
   
    gameTitle.innerText = "";
    logResults(playerCount, cpuCount, tieGame);
    createReloadButton();
   
  }
}



const game = function (match) {

  
   
  if (match === cpuWins) {
    cpuCount++;
    round = round + 1;
    changeVictoryText(cpuWins);
  } else if (match === userWins) {
    playerCount++;
    round = round + 1;
    changeVictoryText(userWins);
  } else if (match === drawGame) {
    tieGame++;
    round = round + 1;
    changeVictoryText(drawGame);
  }

  changeRoundNumber(round);
  changePlayerVictoryNumber();
  changeCPUVictoryNumber();
  changeTieNumber();
  
  checkIfRoundIs5();
  
};

// Game in itself

let match;
let playersChoice;

rockButton.addEventListener("click", () => {
  
  playersChoice = ROCK;
  playerChoiceImage.src = "images/rock.png";
  match = playRound(playersChoice, computerPlay());
  game(match);
});

scissorsButton.addEventListener("click", () => {
  
  playersChoice = SCISSORS;
  playerChoiceImage.src = "images/scissors.png";
  match = playRound(playersChoice, computerPlay());
  game(match);
});

paperButton.addEventListener("click", () => {
  
  playersChoice = PAPER;
  playerChoiceImage.src = "images/paper.png";
  match = playRound(playersChoice, computerPlay());
  game(match);
});

startGameButton.addEventListener("click", ()=> {
  numberOfRounds = Number(inputRounds.value);
  
  makeVisibleGame(sections);
  startGameButtonSection.classList.add("invisible");
  
})


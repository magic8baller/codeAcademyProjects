const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log(`ERROR! ${userInput} is not a valid option`);
  }
};


const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return "You beat the machine!"
  }
  if (userChoice === computerChoice) {
    return "It\'s a tie!";
  }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "You lost to a computer!";
      } else {
        return "You beat the machine!";
      }
    }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return "You beat the machine!";
    } else {
      return "You lost to a computer!";
    } 
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "You lost to a computer!";
    } else {
      return "You beat the machine!";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}`);
  console.log(`The machine threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

function getComputerChoice() {
    rand = Math.random()
    if (rand < 0.33333) {
        return "r";
    }
    else if (rand >= 0.33333 && rand <= 0.66666){
        return "p";
    }
    else {
        return "s";
    };
};

function getUserChoice() {
    return prompt("R? P? S?").toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "r" && computerChoice === "s") || (humanChoice === "s" && computerChoice === "p") || (humanChoice === "p" && computerChoice === "r")){
        humanScore++;
        console.log(`Human won! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === computerChoice) {
        console.log(`It's a tie! ${humanChoice} is equal to ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`Computer won! ${computerChoice} beats ${humanChoice}`);
    };
};

for (let i = 0; i < 5; i++){
    playRound(getUserChoice(), getComputerChoice());
};

if (humanScore > computerScore) {
    console.log('Human won GAME!')
}
else if (humanScore === computerScore) {
    console.log("IT'S A TIE!")
}
else {
    console.log('Computer won GAME!')
};

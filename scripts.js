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

let humanScore = 0;
let computerScore = 0;

const winnerText = document.createElement("div");

const mybuttons = document.querySelector(".buttontext");
const body = document.querySelector("body");

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "r" && computerChoice === "s") || (humanChoice === "s" && computerChoice === "p") || (humanChoice === "p" && computerChoice === "r")){
        humanScore++;
        winnerText.textContent = `Human won! ${humanChoice} beats ${computerChoice}
        the score is: ${humanScore} vs ${computerScore}`;
    }
    else if (humanChoice === computerChoice) {
        winnerText.textContent = `It's a tie! ${humanChoice} is equal to ${computerChoice}
        the score is: ${humanScore} vs ${computerScore}`;
    }
    else {
        computerScore++;
        winnerText.textContent = `Computer won! ${computerChoice} beats ${humanChoice}
        the score is: ${humanScore} vs ${computerScore}`;
    };

    if (humanScore === 5) {
        alert('Human won GAME! REFRESH TO PLAY AGAIN');
        mybuttons.remove();
        const refr = document.createElement("h1");
        refr.textContent = "REFRESH TO PLAY AGAIN"
        body.appendChild(refr);
    }
    
    else if (computerScore === 5) {
        alert('Computer won GAME! REFRESH TO PLAY AGAIN');
        mybuttons.remove();
        const refr = document.createElement("h1");
        refr.textContent = "REFRESH TO PLAY AGAIN"
        body.appendChild(refr);
    };
};

const rbtn = document.querySelector(".rock");
rbtn.addEventListener("click", () => {playRound("r", getComputerChoice());});

const pbtn = document.querySelector(".paper");
pbtn.addEventListener("click", () => {playRound("p", getComputerChoice());});

const sbtn = document.querySelector(".scissors");
sbtn.addEventListener("click", () => {playRound("s", getComputerChoice());});

const buttontext = document.querySelector(".buttontext");
winnerText.style.textAlign = "center";
winnerText.style.fontSize = "30px";
winnerText.style.fontWeight = "500";
buttontext.appendChild(winnerText);

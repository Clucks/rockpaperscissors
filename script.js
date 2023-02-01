const choices = ["rock", "paper", "scissors"];
let cResult = 0;
let pResult = 0;

function main()
{
    playRound();
}

function buttonChoices()
{
    let pChoice = "";
    let cChoice = computerChoice();
    document.getElementById("rock").addEventListener("click", function()
    {
        pChoice = "rock";
        console.log(verifyGameState(pChoice,cChoice));
        cChoice = computerChoice();
    })
    document.getElementById("paper").addEventListener("click", function()
    {
        pChoice = "paper";
        console.log(verifyGameState(pChoice,cChoice));
        cChoice = computerChoice();
    })
    document.getElementById("scissors").addEventListener("click", function()
    {
        pChoice = "scissors";
        console.log(verifyGameState(pChoice,cChoice));
        cChoice = computerChoice();
    })
}

function playRound()
{
    buttonChoices();
}

function verifyGameState(pChoice, cChoice)
{
    let winConditions = cChoice === "rock" && pChoice === "paper" || 
                        cChoice === "paper" && pChoice === "scissors" || 
                        cChoice === "scissors" && pChoice === "rock";
    if(cChoice === pChoice)
    {   
        return "It's a tie!" + " You chose the same throw as the computer.";
    }
    else if (winConditions)
    {
        pResult++;
        document.getElementById("playerresults").innerHTML = "Player Score: " + pResult;
        const winResult = pChoice;
        const capitalizedWinResult = winResult.charAt(0).toUpperCase() + winResult.slice(1);
        return "You win! " + capitalizedWinResult + " beats " + cChoice + ".";
    }
    const lostResult = cChoice;
    const capitalizedLostResult = lostResult.charAt(0).toUpperCase() + lostResult.slice(1);
    cResult++;
    document.getElementById("computerresults").innerHTML = "Computer Score: " + cResult;
    return "You lost! " + capitalizedLostResult + " beats " + pChoice + ".";
}

function playerChoice()
{
    let input = prompt("Choose between Rock, Paper, Scissors?");
    console.log("This is the players choice: " + input);
    if(choices.includes(input))
    {
        return input.toLowerCase();
    }
    return null;
}

function computerChoice()
    {
        let input = choices[Math.floor((Math.random() * choices.length))];
        console.log("This is the computers choice: " + input);
        return input;   
    }

document.getElementById("playerresults").innerHTML = "Player Score: " + pResult;
document.getElementById("computerresults").innerHTML = "Computer Score: " + cResult;


main();

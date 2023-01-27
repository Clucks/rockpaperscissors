const choices = ["rock", "paper", "scissors"];
const pChoice = playerChoice();
const cChoice = computerChoice();

function game()
{
    verifyGameState(pChoice, cChoice);
}



function verifyGameState(pChoice, cChoice)
{
    let winConditions =cChoice === "rock" && pChoice === "paper" || cChoice === "paper" && pChoice === "scissors" || cChoice === "scissors" && pChoice === "rock";
    if(cChoice === pChoice)
    {
        return console.log("It's a tie!" + " You chose the same throw as the computer.");
    }
    else if (winConditions)
    {
        const winResult = pChoice;
        const capitalizedWinResult = winResult.charAt(0).toUpperCase() + winResult.slice(1);
        return console.log("You win! " + capitalizedWinResult + " beats " + cChoice + ".");
    }
    const lostResult = cChoice;
    const capitalizedLostResult = lostResult.charAt(0).toUpperCase() + lostResult.slice(1);
    return console.log("You lost! " + capitalizedLostResult + " beats " + pChoice + ".");
}

function computerChoice()
{
    let input = choices[Math.floor((Math.random() * choices.length))];
    console.log("This is the computers choice: " + input);
    return input;   
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

game();
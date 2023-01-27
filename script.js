const choices = ["rock", "paper", "scissors"];

function game()
{
    console.log("This is the players choice: " + playerChoice());
    console.log("This is the computers choice: " + computerChoice());
    verifyGameState();


}

function verifyGameState()
{
    if(computerChoice() === playerChoice())
    {
        return console.log("It's a tie!");
    }
    else if (computerChoice() === "rock" && playerChoice() === "scissors" ||
                 computerChoice() === "paper" && playerChoice() === "rock" ||
             computerChoice() === "scissors" && playerChoice() === "paper")
    {
        return console.log("You win!");
    }
    return console.log("You lost!");
}

function computerChoice()
{
    let input = choices[Math.floor((Math.random() * choices.length))];
    
    return input;   
}

function playerChoice()
{
    let input = prompt("Choose between Rock, Paper, Scissors?");
    if(choices.includes(input))
    {
        return input.toLowerCase();
    }
    return null;
}

game();
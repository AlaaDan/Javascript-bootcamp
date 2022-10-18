const choicesList  = ["rock", "paper", "scissor"]
let userScore = 0
let computerScore = 0
let gameOn = true
alert(`Welcome to the Rock, Paper and Scissros game!
Let's play, shall we! `)

while (gameOn) {
    if (userScore === 3 || computerScore === 3){
        gameOn = false
    }else{
        let computerChoice = Math.floor(Math.random() * choicesList.length)
        let userChoice = prompt(`Type Rock , Paper or Scissor`).toLowerCase()
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissor"){
            gameEngin(userChoice, computerChoice)
        }else{
            alert("You have entered an invalid input")
        }
    }
}

function gameEngin(userChoice, computerChoice){
    let user = userChoice 
    let computer = choicesList[computerChoice]
    if(userChoice ===  computer){
        alert(`You choose ${user} and computer choose ${computer}
It's a tie`);
    }else if (user === "rock" && computer === "paper"){
        computerScore ++
        alert(`You choose ${user} and computer choose ${computer}
You lose`);
    }else if (user === "rock" && computer === "scissor"){
        userScore ++
        alert(`You choose ${user} and computer choose ${computer}
You win`)
    }else if (user === "paper" && computer === "rock"){
        userScore ++
        alert(`You choose ${user} and computer choose ${computer}
You win`)
    }else if (userChoice === "scissor" && computer === "rock"){
        computerScore ++
        alert(`You choose ${user} and computer choose ${computer}
You lose`)
    }else if (userChoice === "sicssor" && computer === "paper"){
        userScore ++
        alert(`You choose ${user} and computer choose ${computer}
You win`)
    }else if (userChoice === "paper" && computer === "scissor"){
        computerScore ++
        alert(`You choose ${user} and computer choose ${computer}
You lose`)
    }
}

if (userScore === computerScore){
    alert(`Your score was ${userScore} and the computer score was ${computerScore} It's Tie`)
}else if (userScore>computerScore){
    alert(`Your score was ${userScore} and the computer score was ${computerScore} You win`)
}else{
    alert(`Your score was ${userScore} and the computer score was ${computerScore} You lost`)
}
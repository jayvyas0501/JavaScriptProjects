let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Draw Play Again?"
    msg.style.backgroundColor="#081b31";
}

const genComputerChoice = () => {
    const options =["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}
const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice)
    const compschoice = genComputerChoice();
    console.log("comp choice = ",compschoice)
    if(userChoice===compschoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compschoice === "paper" ? false : true;
            
        }
        else if(userChoice === "paper"){
            userwin = compschoice === "rock" ? true : false; 
        }
        else{
            userwin = compschoice === "rock" ? false : true;
        }
        showWinner(userwin,compschoice,userChoice);
    }
}

const showWinner = (userwin,compschoice,userChoice) =>{
    if(userwin){
        console.log("You Win");
        document.getElementById("user-score").innerText = ++userScore;
        //console.log(`You choose ${userChoice} and Computer choose ${compschoice} so you won`);
        msg.innerText = `You choose ${userChoice} and Computer choose ${compschoice} so You Won.\nGo Next?`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You Lose");
        document.getElementById("comp-score").innerText = ++compScore;
        msg.innerText = `You choose ${userChoice} and Computer choose ${compschoice} so You Lose.\nGo Next?`;
        msg.style.backgroundColor="red";
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    })
})
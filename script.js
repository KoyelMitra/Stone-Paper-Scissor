let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#u-score");
const compScorePara = document.querySelector("#comp-score");


const genComp=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const showWinner = (userWin, uChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${uChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${uChoice}`;
      msg.style.backgroundColor = "red";
    }
  };

const playGame=(uChoice)=>{
    //comp choice
    const compChoice=genComp();  
    if(uChoice===compChoice){
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    }
    else {
        let userWin = true;
        if (uChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (uChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, uChoice, compChoice);
      }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const uChoice=choice.getAttribute("id");
        playGame(uChoice);
    })
})


function getComputerChoice(){
num=Math.floor(Math.random()*3);
if(num===0){
    return "Paper"; 
}
else if(num===1){
    return "Rock";
}
else{
    return "Scissors"
}
}
function game(){
     for(let i=0; i<5; i++){
      playRound(i);
     if(i===4){
        keepScore();
     }
     }
    }
function playRound(playerSelection, computerSelection){
playerSelection=prompt("Enter Paper, Rock, or Scissors");
let playerSelection2=playerSelection.toLowerCase();
computerSelection=getComputerChoice();
 if(playerSelection2==="paper" && computerSelection==="Paper"){
                       alert("Its a tie!  Paper is equal to Paper");
                    }
                    else if(playerSelection2==="paper" && computerSelection==="Rock"){
                        alert("You win! Paper beats Rock "), user++;
                        } 
                    else if(playerSelection2==="paper" && computerSelection==="Scissors"){
                        alert("You lose! Scissors beats Paper"), computer++;  
                     }
                     else if(playerSelection2==="rock" && computerSelection==="Rock"){
                        alert("Its a tie! Rock is equal to Rock"); 
                    }
                     else if(playerSelection2==="rock" && computerSelection==="Paper"){
                        alert("You lose!  Paper beats Rock"), computer++;
                    }
                    else if(playerSelection2==="rock" && computerSelection==="Scissors"){
                        alert("You win! Rock beats Scissors"), user++;
                    }
                    else if(playerSelection2==="scissors" && computerSelection==="Scissors"){
                        alert("Its a tie! Scissors is equal to Scissors");
                    }
                    else if(playerSelection2==="scissors" && computerSelection==="Paper"){
                        alert("You win! Scissors beats Paper"), user++;
                    }
                    else if(playerSelection2==="scissors" && computerSelection==="Rock"){
                        alert("You lose!  Rock beats Scissors"), computer++;
                    }
                    else{
                        alert("You did not enter Paper, Rock, or Scissors");
                    
                    }
                    }
let user=0;
let computer=0;

function keepScore(){
    if(user>computer){
        alert("Congratulations!  You win!");
    }
    else if(user<computer){
        alert("Computer Wins, better luck next time");
    }
    else{
            alert("its a tie?");
    }
}
                game();           

                       
                    
                    

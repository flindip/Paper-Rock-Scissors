
document.body.style="min-height:100vh; display:flex; flex-wrap:wrap; justify-content: center; align-content:center; flex-direction:column";
const buttons=document.createElement('div');
document.body.appendChild(buttons);
buttons.style='width:1000px; display:flex; flex-wrap:wrap; flex:1; align-content:center; justify-content:space-evenly;';

const selectOne=document.createElement('button');
buttons.appendChild(selectOne);
selectOne.style="width:100px; height:50px";
selectOne.textContent="Paper";
selectOne.addEventListener('click', (e)=>playRound('paper'));

const selectTwo=document.createElement('button');
buttons.appendChild(selectTwo);
selectTwo.style="width:100px; height:50px";
selectTwo.textContent="Rock";
selectTwo.addEventListener('click', (e)=>playRound('rock'));

const selectThree=document.createElement('button');
buttons.appendChild(selectThree);
selectThree.style="width:100px; height:50px";
selectThree.textContent="Scissors";
selectThree.addEventListener('click', (e)=>playRound('scissors') );

const display=document.createElement('div');
document.body.appendChild(display);
display.style="display:flex; flex-wrap:wrap; flex-direction: column; align-items: center; border:solid black; text-align:center; flex:1; justify-content:space-evenly;";

const resultText=document.createElement('p');
display.appendChild(resultText);
resultText.style="font-size:40px"
resultText.textContent="Choose your Weapon";


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
}}

function playRound(playerSelection, computerSelection){
computerSelection=getComputerChoice();
if(playerSelection==="paper" && computerSelection==="Paper"){
              resultText.textContent="Its a tie!  Paper is equal to Paper"
                    }
                    else if(playerSelection==="paper" && computerSelection==="Rock"){
                       resultText.textContent= "You win! Paper beats Rock ";
                        user++; getScore();
                        }
                    else if(playerSelection==="paper" && computerSelection==="Scissors"){
                         resultText.textContent="You lose! Scissors beats Paper";
                        computer++; getScore();
                        }
                     else if(playerSelection==="rock" && computerSelection==="Rock"){
                      resultText.textContent="Its a tie! Rock is equal to Rock"; 
                     }
                     else if(playerSelection==="rock" && computerSelection==="Paper"){
                        resultText.textContent="You lose!  Paper beats Rock";  
                       computer++; getScore();
                        }
                    else if(playerSelection==="rock" && computerSelection==="Scissors"){
                        resultText.textContent="You win! Rock beats Scissors"; 
                        user++; getScore();
                         }
                    else if(playerSelection==="scissors" && computerSelection==="Scissors"){
                        resultText.textContent="Its a tie! Scissors is equal to Scissors";
                    }
                    else if(playerSelection==="scissors" && computerSelection==="Paper"){
                         resultText.textContent="You win! Scissors beats Paper"; 
                        user++; getScore();
                        }
                    else if(playerSelection==="scissors" && computerSelection==="Rock"){
                        resultText.textContent="You lose!  Rock beats Scissors";
                         computer++; getScore(); 
                        }
}
                    
let user=0;
let computer=0;
const score=document.createElement('h2')
display.appendChild(score);
score.textContent=`Player:${user} Computer:${computer}`;

function getScore(){
score.textContent=`Player:${user} Computer:${computer}`;
       if(user===5){
        resultText.textContent="Congratulations!  You win!";
        restart();
    }
    else if(computer===5){
        resultText.textContent="Computer Wins, better luck next time";
        restart();
    }}
        
        function restart(){
        selectOne.disabled=true;
        selectTwo.disabled=true;
        selectThree.disabled=true;
        const restartButton=document.createElement('button');
        display.appendChild(restartButton);
        restartButton.style="width:100px; height:50px";
        restartButton.textContent="Again?";
        restartButton.addEventListener('click', (e)=>{
           user=0; computer=0;
           score.textContent=`Player:${user} Computer:${computer}`;
           resultText.textContent="Choose your Weapon";
           display.removeChild(restartButton);
           selectOne.disabled=false;
           selectTwo.disabled=false;
           selectThree.disabled=false;
         })};




                    

                       
                    
                    

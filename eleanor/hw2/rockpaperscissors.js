alert("js works");

var userScore = 0; 
var computerScore = 0;
var playing = confirm("Do you want to play rock, paper, scissors?");

while(playing){
	var userMove = prompt("What is your move? (pick rock, paper, or scissors)");
	var plays = ["rock", "paper", "scissors"];
	console.log(plays.length);
	var computerMove = Math.floor(Math.random()*3);
	document.write(computerMove);
	computerMove = plays[computerMove];
	document.write(computerMove);
	//comparing computer move with player move 
	if (userMove == "rock") {
		if(computerMove=="paper"){
			computerScore++;
		}else if(computerMove=="scissors"){
			userScore++;
		}
	};
	if (userMove == "paper") {
		if(computerMove=="scissors"){
			computerScore++;
		}else if(computerMove=="rock"){
			userScore++;
		}
	};
	if (userMove == "scissors") {
		if(computerMove=="rock"){
			computerScore++;
		}else if(computerMove=="paper"){
			userScore++;
		}
	};
	playing = confirm("Do you want to keep playing?");	
}
document.write("Your score is " + userScore + " and the computer's score is " + computerScore);
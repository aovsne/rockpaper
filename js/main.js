var userChoice = prompt('Do you choose Rock, paper or scissor?')
var compChoice = Math.random()
if(compChoice <= 0.33){
	compChoice = 'rock'
}else if(0.34 <= compChoice <= 0.66){
	compChoice = 'paper'
}else{
	compChoice = 'scissors'
}

choice1 = userChoice
choice2 = compChoice


function compare(choice1, choice2){
	if(choice1 === choice2){
		return 'its a tie game'
	}
	if(choice1 === 'paper'){
		if(choice2 === 'scissors'){
			return ' you lose!'
		}else{
			return 'you win'
		}
	}
	if(choice1 === 'rock'){
		if(choice2 === 'paper'){
			return 'you lose!'
		}else{
			return 'you win'
		}
	}
	if(choice1 === 'scissors'){
		if(choice2 === 'rock'){
			return 'you lose!'
		}
		else{
			return 'you win'
		}
	}

}
document.getElementById('answer').innerHTML = ('computer chose: ' + choice2)
document.getElementById('answer2').innerHTML = compare(choice1,choice2)
document.getElementById('replay').innerHTML = "Refresh page to play again"

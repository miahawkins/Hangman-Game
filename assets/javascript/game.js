
//Variables
var wins = 0;
var currentWord = "";
var guessRemaining = 13;
var usedLetters = "";
var wordLength = 0;

//words array
var words = ["tosser", "bloody", "blimey", "bespoke", "chuffed", "fortnight", "hoover", "kip", "dodgy", "wonky", "wanker", "wicked", "whinge", "quid", "loo", "knackered", "gobsmacked", "chap", "bugger", "skive", "nosh", "shag", "ponce", "telly", "bangers", "chips", "rubbish", "kerfuffle", "miffed", "cheerio", "gutted", "daft", "prat", "barmy"];
//to pick a random word from the "words" array.
var word = words[Math.floor(Math.random()*words.length)];
//empty array that is the blank underlines during guessing then fills in with correct guesses!
var answerArray = [];
//create looping variable i that starts with 0 that goes up but doesn't include to word.length. Making the answer array have as many underlines as there are letters in the word.
for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_ ";

	////////////word.charAt(words.length - 1)????
}
//to track how many letters are left to guess
var remainingLetters = word.length;







//Game loop where keep updating remainingLetters until player guesses word
while (remainingLetters > 0) {
	//game code
	//show player progress
	console.log(answerArray.join(""));
	//document.getElementByClass("announce").innerHTML = answerArray.join("");
	//take input from player and saves it to the variable guess
	var guess = prompt("Guess a letter");
		console.log(guess);
	//if player hits cancel
	if (guess === null) {
		break;}
		//if player hits more than one letter
		else if (guess.length !==1) {
			alert ("Please enter a single letter.");}
		else {
			//update game status with guess
			//This loop is for going through each letter of the word
			for (var j = 0; j < word.length; j++) {

				if (word[j] === guess) {
					answerArray[j] = guess;
					remainingLetters--;}

			}//for loop end
		}//else  end
} //while loop end

alert(answerArray.join(""));
alert("You Win!");
wins++;

////////////////////////////////////////////////////////////////////////////////
//Psuedocode/Plan//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



//Take players guess
function Letter () {
	var letter = document.getElementById("letter").value;
	document.onkeyup = function(event) {
		usedLetters.textContent = event.key;
	}
	if (letter.length > 0) {
		for (var i = 0; i < word.length; i++) {
			if (word[i] === letter) {
				answerArray[i] = letter;
			}	
		}
		guessRemaining--;
		document.getElementByClass("guessRemaining").innerHTML = "Remaining Guesses " + guessRemaining;
	}
}

//or
document.onkeyup = function(event) {
	console.log(event.key); };

//Check players guess is valid

//Keep track of letters guessed

//Show player in their progress

//update answerArray and remainingLetters for every correct guess

//finished when player finished word and wins

//finished when players loses
if (guessRemaining === 0) {
	document.getElementByClass("announce").innerHTML = "You Lose";
}

//reset the game
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




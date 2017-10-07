//Promt user to press a key!
prompt("Press a key to start playing!")

//List of words to choose from
var words = ["tosser", "bloody", "blimey", "bespoke", "chuffed", "fortnight", "hoover", "kip", "dodgy", "wonky", "wanker", "wicked", "whinge", "quid", "loo", "knackered", "gobsmacked", "chap", "bugger", "skive", "nosh", "shag", "ponce", "telly", "bangers", "chips", "rubbish", "kerfuffle", "miffed", "cheerio", "gutted", "daft", "prat", "barmy"];
//to pick a random word from the "words" array.
var word = words[Math.floor(Math.random()*words.length)];
//pick variables
var answerArray = []; 
var guessRemaining = 13;
var string;
var wins = 0;

//add underscores to answerArray
//number of underscores matchs number of letters in word
function start() {
	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_ ";
	}

	//put in a string
	string = answerArray.join(" ");
	document.getElementByClass("currentWord").innerHTML = string;
}

function letter() {
	var letter = document.getElementById("letter").value;

	if (letter.length > 0) {
		for (var i = 0; i < word.length; i++) {
			if (word[i] === letter) {
				answerArray[i] = letter;
			}
		}
		remainingAttemps--;
		document.getElementByClass("remainingAttemps").innerHTML = "Remaining Attemps: " + remainingAttemps;
		document.getElementByClass("currentWord").innerHTML = answerArray.join(" ");
	}
	if (remainingAttemps === 0) {
		document.getElementByClass("announce").innerHTML = "You Lose!"
	}
}

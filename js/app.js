
$(document).ready(function(){
	console.log("Hello World");
	//--Declares variable for randNum globally so it can be used outside of newGame
	var currentRand; 
	console.log(currentRand);
	//--Assigns variable to #count html
	var guessCount = 0; 

	var newGame = function() {
		console.log("Running game");
		//--Clears past game data to make new slate
		$('#feedback').html("Make your Guess!");
		$('#userGuess').val("");
		$('#count').html(0);
		guessCount = 0;
		$('#guessList').children().remove();
		//--This random number is declared once per new game, hence it is declared locally within newGame
		var randomNum = Math.floor(Math.random() * 100 + 1); 
		console.log(randomNum);
		currentRand = randomNum; 
		//--Or can we just do 'return randomNum'? This might result in a conflict since newGame() would produce ANY random number, not the specific number selected per game?
		// return randomNum
	};

	var guessCheck = function () {
		//--Checks guessed number against random number
		console.log("Checking number guessed against random number");
		var guessDiff = Math.abs($('#userGuess').val()-currentRand);
		console.log(guessDiff);
		//--Gives feedback
		if(guessDiff === 0) {
			$('#feedback').html("You Win! Click '+New Game' to start a new game!");
		} else if(guessDiff <= 10 && guessDiff >= 1) {
			$('#feedback').html("Very Hot!");
		} else if(guessDiff > 10 && guessDiff <= 20){
			$('#feedback').html("Warm!");
		} else if(guessDiff >20 && guessDiff <= 30){
			$('#feedback').html("Cool");
		} else if(guessDiff >30 && guessDiff <= 40){
			$('#feedback').html("Cold!");
		} else if(guessDiff > 40){
			$('#feedback').html("Icy!");
		}
		//--Adds chosen number to #guessList
		$('#guessList').append("<li>" + $('#userGuess').val() + "</li>");
	};

	//--Running new game on page load
	newGame();
	console.log(currentRand);


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//--Submits guessed number, 
  	$('.button').on('click', function(e) {
  		console.log(e.isDefaultPrevented());
  		//--Prevents link behavior (reloading page)
  		e.preventDefault();
		console.log("Submits guess");
		console.log($('#userGuess').val());
		console.log(e.isDefaultPrevented());
		//--Makes sure guessed number is a whole number from 1 to 100
		if($('#userGuess').val() <= 100 && $('#userGuess').val() > 0 && $('#userGuess').val() % 1 === 0) {
			console.log("Good number");
			//--Runs guessCheck()
			guessCheck();
			//--Increases guessCount by 1, updates Guess # html
			guessCount += 1
			$('#count').html(guessCount);
		} else {
			alert("Must be a number from 1 to 100, and a whole number!");
		}
		
	});
  	//--Button clicked to start a new game
  	$('.new').on('click', function() {
  		console.log("Clicks New Game button");
  			newGame();
  	});


});



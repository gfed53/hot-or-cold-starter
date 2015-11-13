
$(document).ready(function(){
	console.log("Hello World");
	//--Declares variable for randNum globally so it can be used outside of newGame
	var currentRand;
	
	console.log(currentRand);
	//--Assigns variables
	var limit = 100;
	var guessCount = 0; 
	var winsCount = 0;
	var levelCount = 1;

	//Creating a function that checks if number guessed was already previously guessed
	// var checkRepeat = function() { 
	// 	console.log("runs");
	// 	$('#guessList li').each(function(index){
	// 		console.log("One guess.");
	// 			if($('#userGuess').val() === index){
	// 				alert("You already picked that number.");
	// 			} else {
	// 				return false;
	// 			}
	// 		}
	// 	);	
	// };



	var startGame = function() {
		console.log("Running game");
		//--Clears past game data to make new slate
		$('#feedback').html("Make your Guess!");
		$('#userGuess').val("");
		$('#count').html(0);
		guessCount = 0;
		$('#guessList').children().remove();
		$('#continueButton').hide();
		$('#guessButton').show();
		//--This random number is declared once per new game, hence it is declared locally within newGame
		var randomNum = Math.floor(Math.random() * limit + 1); 
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
			$('#feedback').html("You Win!");
			winsCount += 1;
			$('#wins').html(winsCount);
			$('#guessButton').hide();
			$('#continueButton').show();
			
			if (winsCount === 5 || guessCount <= 10) {
				levelCount += 1;
				$('#level').html(levelCount);
				limit += 50;
				winsCount = 0;
				$('#wins').html(0);
			} else if(guessCount > 20 && levelCount >= 2) {
				levelCount -= 1;
				$('#level').html(levelCount);
				limit -= 50;
				winsCount = 0;
				$('#wins').html(0);
			}

			$('#continueButton').on('click', function(e){
				e.preventDefault();
				startGame();
			});
		} else if(guessDiff <= 5 && guessDiff >= 1) {
			$('#feedback').html("Very Hot!");
		} else if(guessDiff > 6 && guessDiff <= 10){
			$('#feedback').html("Hot!");
		} else if(guessDiff >11 && guessDiff <= 20){
			$('#feedback').html("Warm");
		} else if(guessDiff >21 && guessDiff <= 40){
			$('#feedback').html("Cold!");
		} else if(guessDiff > 40){
			$('#feedback').html("Icy!");
		}
		//--Adds chosen number to #guessList
		$('#guessList').prepend("<li>" + $('#userGuess').val() + "</li>"); //Try prepend?
	};


  	$('#guessButton').val("Guess").on('click', function(e) {
  		console.log(e.isDefaultPrevented());
  		//--Prevents link behavior (reloading page)
  		e.preventDefault();
		console.log("Submits guess");
		console.log($('#userGuess').val());
		console.log(e.isDefaultPrevented());
		//--Makes sure guessed number is a whole number from 1 to 100
		if($('#userGuess').val() <= limit && $('#userGuess').val() > 0 && $('#userGuess').val() % 1 === 0) {
			// checkRepeat();
			guessCheck();
			//--Increases guessCount by 1, updates Guess # html
			guessCount += 1
			$('#count').html(guessCount);
		} else {
			alert("Must be a number from 1 to " + limit + ", and a whole number!");
		}
		$('#userGuess').val("");
	});



	//--Running new game on page load
	startGame();
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
  	

  	//--Button clicked to start a new game
  	$('.new').on('click', function() {
  		console.log("Clicks New Game button");
  		limit = 100;
		guessCount = 0; 
		winsCount = 0;
		levelCount = 1;
  		startGame();
  	});

//Create new levels
});



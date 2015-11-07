
$(document).ready(function(){
	console.log("Hello World");
	var currentRand;
	console.log(currentRand);
	var guessCount = $('#count').html();

	var newGame = function() {
		console.log("Running game");
		$('#feedback').html("Make your Guess!");
		var randomNum = Math.floor(Math.random() * 100 + 1);
		console.log(randomNum);
		currentRand = randomNum; //Or we can do 'return randomNum'?

	};

	var guessCheck = function () {
		console.log("Checking number guessed against random number");
		var guessDiff = Math.abs($('#userGuess').val()-currentRand);
		console.log(guessDiff);
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
	};

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

  	$('.button').on('click', function(e) {
  		console.log(e.isDefaultPrevented());
  		e.preventDefault();
		console.log("Submits guess");
		console.log($('#userGuess').val());
		console.log(e.isDefaultPrevented());
		if((100 >= $('#userGuess').val() > 0) && $('#userGuess').val() % 1 === 0) {
			console.log("Good number");
			guessCheck();
			guessCount += 1
		}
		else {
			alert("Must be a number from 1 to 100, and a whole number!");

		}
		
	});

	/*$(document).on('click', '#guessButton', function() {
		console.log(this);
	});*/

  	$('.new').on('click', function() {
  		console.log("Clicks New Game button");
  			newGame();
  	});


});



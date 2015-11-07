
$(document).ready(function(){
	console.log("Hello World");

	var newGame = function() {
		console.log("Running game");
		var randomNum = Math.floor(Math.random() * 100 + 1);
		console.log(randomNum);

	};

	var guessCheck = function () {
		console.log("Checking number guessed against random number");
		var guessDiff = abs($('#userGuess').val()-randomNum);
		if (guessDiff <= 10) {
			$('#feedback').html("Very Hot!");
		}
	};

	newGame();


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('.button').on('click', function() {
		console.log("Starts game");
		console.log($('#userGuess').val());
	});

  	$('.new').on('click', function() {
  		console.log("Clicks New Game button");
  		newGame();
  	});


});



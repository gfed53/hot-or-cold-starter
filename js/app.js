
$(document).ready(function(){
	console.log("Hello World");

	var newGame = function() {
		console.log("Running game");
		var randomNum = Math.floor(Math.random() * 100 + 1);
		console.log(randomNum);

	}

	newGame();


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('.new').on('click', function() {
  		console.log("Clicks button");
  		newGame();
  	});

  	$('#guessButton').on('click', function() {
		console.log("Starts game");
		console.log($('#userGuess').val());
	});

  	

});



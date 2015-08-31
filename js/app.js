$(document).ready(function() {
var userGuess = +prompt("Welcome !, please enter number");

function fizzBuzz(input) {

		for (var i = 1; i <=input; i++) {

		if (i % 3 === 0 && i % 5 === 0) {
			$("body").append("<li>" +"FizzBuzz"+ "</li>");
		}

		else if (i % 3 === 0) {
			$("body").append("<li>" +"fizz"+ "</li>");
	}

		else if (i % 5 === 0) {
			$("body").append("<li>" +"buzz"+ "</li>");
	}
		else {
			$("body").append("<li>" +i+ "</li>");
		}

	}
}

		fizzBuzz(userGuess);

		});

		

	

	


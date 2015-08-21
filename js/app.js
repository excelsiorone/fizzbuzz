$(document).ready(function() {
	$("form").on("submit", function(e) {
		e.preventDefault();

		var $userInput = $(".numbers").val();
        console.log($userInput);


	for (var i = 1; i<=100; i++) {

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
		})

	})

	


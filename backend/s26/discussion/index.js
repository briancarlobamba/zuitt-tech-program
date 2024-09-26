console.log("Hello, World!");

// [SECTION] if, else if, and else statement

	/*
		- Most of the times we would like to use if, else if and else statements with functions to control the flow of our application.

	    - By including them inside functions, we can decide when certain conditions will be checked instead of executing statements when the JavaScript loads.

	    - The "return" statement can be utilized with conditional statements in combination with functions to change values to be used for other features of our application
	*/

		let numG = -1;

		if (numG < 0) {
			console.log("Hello");
		}

		if (numG > 0) {
			console.log("Hello");
		}

		let numH = 1;

		if (numG > 0) {
			console.log("Hello");
		}
		else if (numH > 0) {
			console.log("World");
		}

		if (numG > 0) {
			console.log("Hello");
		} 
		else if (numH = 0) {
			console.log("World");
		} 
		else {
			console.log("Again");
		}

		let message = "No message";
		console.log(message);

		function determineTyphoonIntensity(windSpeed) {

			if (windSpeed < 30) {
				return "Not a typhoon yet";
			} 
			else if (windSpeed <= 61) {
				return "Tropical depression detected";
			} 
			else if (windSpeed >= 62 && windSpeed <= 88) {
				return "Tropical storm detected";
			} 
			else if (windSpeed >= 89 && windSpeed <= 117) {
				return "Sever tropical storm detected";
			} 
			else {
				return "Typhoon detected";
			}
		}
		message = determineTyphoonIntensity(85);
		console.log(message);

		if (message == "Tropical storm detected") {
			console.warn(message);
		}

// [SECTION] Truthy and Falsy

	/* 
	    - In JavaScript a "truthy" value is a value that is considered true when encountered in a Boolean context

	    - Values are considered true unless defined otherwise

	    - Falsy values/exceptions for truthy:
	        1. false
	        2. 0
	        3. -0
	        4. ""
	        5. null
	        6. undefined
	        7. NaN
	*/

	// Truthy Examples

	/* 
	    - If the result of an expression in a condition results to a truthy value, the condition returns true and the corresponding statements are executed

	    - Expressions are any unit of code that can be evaluated to a value
	*/

		if (true) {
			console.log("Truthy");
		}

		if (1) {
		console.log("Truthy");
		}

		if ([]) {
		console.log("Truthy");
		}

	// Falsy Examples

		if (false){
			console.log("Falsy");
		}

		if (0) {
			console.log("Falsy");
		}

		if (undefined) {
			console.log("Falsy");
		}

// [SECTION] Conditional Ternary Operator

	/*
		- The Conditional (Ternary) Operator takes in three operands:
	        1. condition
	        2. expression to execute if the condition is truthy
	        3. expression to execute if the condition is falsy

	    - Can be used as an alternative to an "if else" statement

	    - Ternary operators have an implicit "return" statement meaning that without the "return" keyword, the resulting expressions can be stored in a variable

	    - Commonly used for single statement execution where the result consists of only one line of code

	    - For multiple lines of code/code blocks, a function may be defined then used in a ternary operator

			Syntax:
			(expression) ? ifTrue : ifFalse
	*/

	let ternaryResult = (1 < 18) ? true : false;
	console.log("Result of ternary operator: " + ternaryResult);

	let name;

		function isOfLegalAge () {
			name = "John";
			return "You are of the legal age limit";
		}

		function isOfUnderAge () {
			name = "Jane";
			return "You are under the legal age limit";
		}

	let age = parseInt(prompt("What is your age?"));
	console.log(age);

	let legalAge = (age > 18) ? isOfLegalAge() : isOfUnderAge();
	console.log("Result of ternary operator in functions: " + legalAge + ", " + name);

// [SECTION] Switch Statement

	/*
		- Can be used as an alternative to an if, "else if and else" statement where the data to be used in the condition is of an expected input

	    - The ".toLowerCase()" function/method will change the input received from the prompt into all lowercase letters ensuring a match with the switch case conditions if the user inputs capitalized or uppercased letters

	    - The "expression" is the information used to match the "value" provided in the switch cases

		- Variables are commonly used as expressions to allow varying user input to be used when comparing with switch case values

	    - Switch cases are considered as "loops" meaning it will compare the "expression" with each of the case "values" until a match is found

	    - The "break" statement is used to terminate the current loop once a match has been found

		- Removing the "break" statement will have the switch statement compare the expression with the values of succeeding cases even if a match was found

		Syntax:
		switch (expression) {
			case value:
				statement;
				break;
			default:
				statement;
				break;
		}
	*/

	let day = prompt("What day of the week is it today?").toLowerCase();
	console.log(day);

	switch (day) {
		case "monday":
			console.log("The color of the day is red");
			break;
		case "tuesday":
			console.log("The color of the day is orange");
			break;
		case "wednesday":
			console.log("The color of the day is yellow");
			break;
		case "thursday":
			console.log("The color of the day is green");
			break;
		case "friday":
			console.log("The color of the day is blue");
			break;
		case "saturday":
			console.log("The color of the day is indigo");
			break;
		case "sunday":
			console.log("The color of the day is violet");
			break;
		default:
			console.log("Please input a valid day");
			break;
	}

// [SECTION] Try-Catch-Finally Statement

	/*
		- "try catch" statements are commonly used for error handling

	    - There are instances when the application returns an error/warning that is not necessarily an error in the context of our code

	    - These errors are a result of an attempt of the programming language to help developers in creating efficient code

	    - They are used to specify a response whenever an exception/error is received

	    - It is also useful for debugging code because of the "error" object that can be "caught" when using the try catch statement
	    
	    - In most programming languages, an "error" object is used to provide detailed information about an error and which also provides access to functions that can be used to handle/resolve errors to create "exceptions" within our code
	    
	    - The "finally" block is used to specify a response/action that is used to handle/resolve errors
	*/

	function showIntensityAlert(windSpeed) {
		try {
			alerat(determineTyphoonIntensity(windSpeed));
		}
		catch (error) {
			console.log(typeof error);
			console.warn(error.message);
		}
		finally {
			alert("Intensity updates will show new alert");
		}
	}

	showIntensityAlert(56);
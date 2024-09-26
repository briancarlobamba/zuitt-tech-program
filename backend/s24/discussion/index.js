console.log("August, please be good to me!");

/*
	FUNCTIONS

	-Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked
	- Functions are mostly created to create complicated tasks to run several lines of code in succession
	- They are also used to prevent repeating lines/blocks of codes that perform the same task/function
*/



// [SECTION] Function Declaration

	/*
		Syntax: 
		function functionName() {
			code block (statement)
		}
	*/

	function sayHello() {
		console.log("Hello, World!");
	}

	sayHello();



// [SECTION] Function Naming Convention

	function getCourses() {
		let courses = ["Science 101", "Math 101", "English 101"];
		console.log(courses);
	}

	getCourses();

	function displayCarInfo() {
		console.log("Brand: Toyota");
		console.log("Type: Sedan");
		console.log("Price: 1,500,000");
	}

	displayCarInfo();



// [SECTION] Function Expression

/*
	- We use the function keyword and specify a name for the function declaration.
	- But a function can also be stored in a variable. This is called a function expression.
	- A function expression is a function that is created as part of an expression, typically by being assigned to a variable. It can be either named or anonymous.
*/

	let funcExpression = function funcName() {
		console.log("Happy August!");
	}
	funcExpression();

	let	variableFunction = function() {
		console.log("It's too rainy");
	}
	variableFunction();



// [SECTION] Function Declaration vs. Function Expression 

/*
	Hoisting:
	- a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
*/

	function declaredFunction() {
		console.log("Hello from declaredFunction()");
	}
	declaredFunction();


	// under function expression - does not work
	/*
		variableHoisting();
		let variableHoisting = function() {
			console.log("Hello from variableHoisting()");
		}
	*/

	// under function declaration
		variableHoisting();	
		function variableHoisting() {
			console.log("Hello from variableHoisting()");
		}

	// reassigning is also possible except const
		declaredFunction = function() {
			console.log("Updated declaredFunction()");
		}
		declaredFunction();



// [SECTION] Understanding Scope in JavaScript

/*
	1. Global Scope:

		 - Think of global scope as the entire city of JavaScript. Variables declared outside of any function, using let or const, are in the global scope. They're accessible from anywhere in your code, just like landmarks visible throughout the city. However, it's essential to be cautious with global variables to avoid unintentional conflicts and side effects.
*/

	const globalVariable = "I'm a global variable";

	function globalFunction() {
		console.log(globalVariable);
	}

	globalFunction();
	console.log(globalVariable);

/*
	2. Local Scope:

		a. Function Scope - Within the city, each function creates its own barangay with its rules. Variables declared inside a function using let or const are scoped to that function. They can't be accessed from outside the function, similar to how the contents of a house are private to its residents.

		b. Block Scope -  Imagine each code block ({ }) as a neighborhood park. Variables declared with let or const inside these blocks are scoped to that specific block. They're only accessible within that block, just as activities within a park are limited to those within its boundaries.
*/

	function localFunction() {
		const localVariable = "I'm a local variable";
		console.log(localVariable);
	}
	localFunction();
	// console.log(localVariable);

	{
		const blockVariable = "I'm a block-scoped variable"
		console.log(blockVariable);
	}

	// console.log(blockVariable);



// [SECTION] Return Statements

/*
	- The "return" statement allows us to output a value from a function to be passed to the line/block of code that invoked/called the function.
	- returnUserName() is a function that is able to return a value which can then be saved in a variable.
*/

	function returnFullName() {
		return "Jeffrey" + " " + "Smith" + " " + "Bezos";
		console.log("This message will not be printed");
	}

	let fullName = returnFullName();
	console.log(fullName); //or 
	console.log(returnFullName());

	function returnFullAddress() {
		
		let fullAddress = {
			street: "#44 Maharlika St.",
			city: "Cainta",
			province:"Rizal",
		};
		return fullAddress;
	}

	let myAddress = returnFullAddress();
	console.log(myAddress); // or
	console.log(returnFullAddress());

	function printPlayerInfo() {
		console.log("Username: " + "white_knight");
		console.log("Level: " + 95);
		console.log("Job: " + "Paladin");
	}

	let user1 = printPlayerInfo();
	console.log(user1); // undefined

	function returnSumOf5and10() {	
		return 5 + 10
	}

	let sumOf5and10 = returnSumOf5and10();
	console.log(sumOf5and10);

	let total = 100 + returnSumOf5and10();
	console.log(total);

	function getDemonSlayerHashiras() {
		return ["Uzui", "Rengoku", "Muichiro", "Gyoumei", "Mitsuri", "Obanai", "Giyuu", "Shinobu", "Sanemi"]
	}

	console.log(getDemonSlayerHashiras());
console.log("Hello, World!");

// [SECTION] While Loop

	/*
		- A while loop takes in an expression/condition

		- Expressions are any unit of code that can be evaluated to a value

		 - If the condition evaluates to true, the statements inside the code block will be executed

		 - A statement is a command that the programmer gives to the computer

		 - A loop will iterate a certain number of times until an expression/condition is met

		 - "Iteration" is the term given to the repetition of statements

		Syntax:
		while(expression/condition) {
			statement
		}
	*/

	let count = 5;

	while(count !== 0) {
		console.log("while loop: " + count);
		count--;
	}

// [SECTION] Do While Loop
	
	/*
		- A do-while loop works a lot like the while loop. But unlike while loops, do-while loops guarantee that the code will be executed at least once.

		Syntax:
		do {
			statement
		} while (expression/condition)
	*/

	let number = Number(prompt("Give me a number"));

	do {
		console.log("do while loop: " + number);

		number += 1;
	} while (number < 10);

// [SECTION] For Loop

	/*
		- A for loop is more flexible than while and do-while loops. It consists of three parts:

			1. The "initialization" value that will track the progression of the loop.

		    2.  The "expression/condition" that will be evaluated which will determine whether the loop will run one more time.

		    3. The "finalExpression" indicates how to advance the loop.

		Syntax
		for (initialization; expression/condition; finalExpression) {
		    statement
		}
	*/

	for (let count = 0; count <= 20; count++) {
		console.log("for loop: " + count);
	}

	let myString = "alex";
	console.log(myString.length);

	// Accessing elements using its index number (starting at 0 - n)
	
		console.log(myString[0]);
		console.log(myString[1]);
		console.log(myString[2]);
		console.log(myString[3]);

	for (let x = 0; x < myString.length; x++) {
		console.log(myString[x]);
	}

	let myName = "TENGENE";

	for (let i = 0; i < myName.length; i++) {

		if (
			myName[i].toLowerCase() == "a" ||
			myName[i].toLowerCase() == "e" ||
			myName[i].toLowerCase() == "i" ||
			myName[i].toLowerCase() == "o" ||
			myName[i].toLowerCase() == "u" 
		){
			console.log(3);
		} else {
			console.log(myName[i]);
		}
	}

console.log("ACTIVITY");

	for (let count = 0; count <= 20; count++) {
		if (count % 2 === 0) {
			console.log(count);
		}
		if (count === 0) {
			console.log("n");
		}
	}
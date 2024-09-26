console.log("Hello, World!");

// [SECTION] Arithmetic Operators
	
	let x = 20;
	let y = 15;
	console.log("x = " + x);
	console.log("y = " + y);

	let sum = x + y;
	console.log("sum: " + sum);

	let difference = x - y
	console.log("difference: " + difference);

	let product = x * y
	console.log("product: " + product);

	let quotient = x / y
	console.log("quotient: " + quotient);



// [SECTION] Assignment Operators

	let assignmentNumber = 8;
	assignmentNumber = assignmentNumber + 2;
	console.log(assignmentNumber)

	//Shorthand (+=, -=, *=, /=)
	assignmentNumber += 2;
	console.log(assignmentNumber);

	assignmentNumber -= 2;
	console.log(assignmentNumber);

	console.log(assignmentNumber + y);



// [SECTION] Multiple Operators and Parenthesis

	let mdas = 1 + 2 - 3 * 4 / 5;
	console.log(mdas); // multiplication > division > addition > subtraction

		/*
			- The operations were done in the following order:
	        1. 3 * 4 = 12
	        2. 12 / 5 = 2.4
	        3. 1 + 2 = 3
	        4. 3 - 2.4 = 0.6
		*/

	let pemdas = 1 + (2 - 3) *(4 / 5);
	console.log(pemdas); // parenthesis > exponent > multiplication > division > addition > subtraction

		/*
			- The operations were done in the following order:
	        1. 4 / 5 = 0.8
	        2. 2 - 3 = -1
	        3. -1 * 0.8 = -0.8
	        4. 1 + -.08 = .2
		*/

	pemdas = (1 + (2 - 3)) * (4 / 5);
	console.log(pemdas);

		/*
			- The operations were done in the following order:
	        1. 4 / 5 = 0.8
	        2. 2 - 3 = -1
	        3. 1 + -1 = 0
	        4. 0 * 0.8 = 0
		*/



// [SECTION] Increment or Decrement

	/*
		- pre-increment / post-increment (++)
	 	- pre-decrement / post-decrement (--)
	*/
			
	let z = 1;

	let increment = ++z;
	console.log(increment);
	console.log(z);

	increment = z++;
	console.log(increment);
	console.log(z);

	decrement = --z;
	console.log(decrement);
	console.log(z);

	decrement = z--;
	console.log(z);



// [SECTION] Type Coercion
	
	// automatic conversion of values from one data type to another.

	let numA = "10";
	let numB = 12;

	let coercion = numA + numB;
	console.log(coercion);
	console.log(typeof coercion);

	let numC = 16;
	let numD = 14;
	let nonCoercion = numC + numD;
	console.log(nonCoercion);
	console.log(typeof nonCoercion);

	let numE = true + 1;
	console.log(numE); // Boolean "true" = 1

	let numF = false + 1;
	console.log(numF); // Boolean "false" = 0



// [SECTION] Comparison Operators
	
	// Equality Operator (==)
	// Strictly Equality Operator (===)
	// Inequality Operator (!=)

		let juan = "juan";

	console.log("Equality Operator");

		console.log(1 == 1); 
		console.log(1 == 2);
		console.log(1 == '1');
		console.log(0 == false);
		console.log('juan' == 'juan'); // Compares two strings that are the same 
		console.log('juan' == juan); // Compares a string with the variable "juan" declared above 

	console.log("Inequality Operator");

		console.log(1 != 1); 
		console.log(1 != 2);
		console.log(1 != '1');
		console.log(0 != false);
		console.log('juan' != 'juan');
		console.log('juan' != juan);

	console.log("Strict Equality Operator");

		console.log(1 === 1);
		console.log(1 === 2);
		console.log(1 === '1');
		console.log(0 === false);
		console.log('juan' === 'juan');
		console.log('juan' === juan);

	console.log("Strict Inequality Operator");

		console.log(1 !== 1);
		console.log(1 !== 2);
		console.log(1 !== '1');
		console.log(0 !== false);
		console.log('juan' !== 'juan');
		console.log('juan' !== juan);



// [SECTION] Relational Operators

	// (>, <, >=, <=)

		let a = 50;
		let b = 65;


		let isGT = a > b;

		let isLT = a < b;

		let isGTorE = a >= b;

		let isLTorE = a <= b;

	console.log("Relational Operators");

		console.log(isGT);
		console.log(isLT);
		console.log(isGTorE);
		console.log(isLTorE);

		let numStr = "30";
		console.log(a > numStr);
		console.log(b <= numStr);

	/*	
		let numStr = "30";
		console.log(a > numStr);
		console.log(b <= numStr);
	*/



// [SECTION] Logical Operators

	// "&&"" (and) / "||"" (or) 

		let isLegalAge = true;
		let isRegistered = false;

	console.log("Logical Operators");

		let allRequirementsMet = isLegalAge && isRegistered;
		console.log(allRequirementsMet);

		let someRequirementsMet = isLegalAge || isRegistered;
		console.log(someRequirementsMet);

		let someRequirementsNotMet = !isRegistered;
		console.log(someRequirementsNotMet);
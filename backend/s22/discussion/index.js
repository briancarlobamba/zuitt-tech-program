console.log("Hello, World!");

	// Single-line comment = Ctrl + /

	/*
		Mult-line comment 
		= Ctrl + Shift + /
	*/

// [SECTION] Variables, Declarations, and Initializations

	/*
		- the name of variables are called identifiers
		- used to contain data
		- any information that is used by an application is stored in what we call "memory"
		- when we create variables, certain portions of a device's memory is given a "name" that we call variables
		- variables === names
		- we have to declare it

		3 kinds of variable declarations

			var - optionally initializing to a value
			let - local variable, declares a block-scoped
			const - constant, declares a block-scoped

		Syntax:

			let/const/var variableName
	*/


let myVariable;
console.log(myVariable);

let hello;
console.log(hello);


// Descriptive
// camelCase

	let firstName = "Brian";
	let emailAddress = "brianbamba02@gmail.com";

/*
	Syntax:
	let/const variableName = value;
*/

	let productName = 'desktop computer';
	console.log(productName);

	let productPrice = 18999;
	console.log(productPrice);

	const interest = 3.539;

// Reassigning
	productName = 'Laptop';
	console.log(productName);

	let friend = "Kate";
	friend = "Jane";

	/*let sister = "Mary";
	let sister = "Joan";*/

	// interest = 4.489;

	let supplier;

	supplier = "John Smith Tradings"
	console.log(supplier);

// [SECTION] Data Types

	// 1. Boolean = related to state of certain things (true/false)
	
		let isMarried = false;
		let inGoodShape = true;
		console.log("isMarried: " + isMarried);

	// 2. Null = intentionally expressing the absence of value

		let spouse = null;
		console.log(spouse);

	// 3. Undefined = a variable that has been declared but w/o a value

		let fullName;
		console.log(fullName);

	// 4. Numbers

		let myNumber = 4;
		let headCount = 14;
		console.log(headCount);

		let grade = 82.5;
		console.log(grade);

		let planetDistance = 2e10;
		console.log(planetDistance);

	// 5. BigInt = an integer with arbitrary precision (very large integers)

		const bigInteger = 900102348712903471029487102934n;
		console.log(bigInteger);

	// 6. Strings = series of words or sentences (' ') or (" ")

		let myString = "";
		let country = "Canada";
		let province = "Manitoba";
		console.log(myString);
		console.log(country);
		console.log(province);

	// 7. Arrays = special of object; each value in an array is associated with a numeric index; the indices start with 0. ([])

		let grades = [98.7, 75.6, 82.3, 91];
		console.log(grades);

		let details = ["John", "Smith", 32, true];
		console.log(details);

	// 8. Objects = it mimics real worl objects/items; used to for complex data that contains pieces of information that are relevant to each other; property of object ({})

		/*
			Syntex: 
			let/const objectName = {
				propertyA: value,
				propertyB: value,
			}
		*/

		let person = {

			fullName: "Juan Dela Cruz",
			age: 35,
			isMarried: false,
			contact: ["+63 917 776 5636", "204 441 8162"],
			address: {
				houseNumber: "751",
				city: "San Fernando",
			}
		};
		console.log(person);
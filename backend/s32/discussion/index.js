console.log("Hello World");

// [SECTION] ES6 Updates - ES = EcmaScript

	// Exponent Operator

		const firstNum = 8 ** 2
		console.log(firstNum);

		const secondNum = Math.pow(8, 2);
		console.log(secondNum);

	// Template Literals

		let message = "Hello " + "Everyone!";
		console.log(message);

		let name = "John";
		message = `Hello ${name}! Welcome to programming`;
		console.log(message);

		const anotherMessage = `${name} attended a Math competition. He won it by solving the problem 8 ** 2 with the solution of ${secondNum}`;
		console.log(anotherMessage);

		const interestRate = .1;
		const principal = 1000
		console.log(`The interest on your saving account is ${principal * interestRate}`)

	// Array Destructuring

		/*
			- allows us to unpack elements in arrays into distinct variables

			- allow us to name array elements with variables instead of using index numbers

			Syntax:
				let/const[variableName, variableName, variableName] = array;
		*/

		const fullName = ["Juan", "Dela", "Cruz"];

		console.log(fullName[0]);
		console.log(fullName[1]);
		console.log(fullName[2]);
		console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`);

		const [firstName, middleName, lastName] = fullName;

		console.log(firstName);
		console.log(middleName);
		console.log(lastName);
		console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`);

	// Arrow Function

		/*
			- compact version of traditional functions

			Syntax: 
			const variableName = () => {statement/console.log}
		*/

		const hello = () => {
			console.log("Hello World");
		};

		hello();
		console.log(hello());
		console.log(hello);

		const printFullName = (firstName, middleInitial, lastName) => {
				console.log(`${firstName} ${middleInitial}. ${lastName}`)
			}

		printFullName("John", "D", "Smith");

	// Implicit Return Statement

		/*	const add = (x, y) => {
				return x + y
			};
		*/

		const add = (x, y) => x + y

		let total = add(1, 2)
		console.log(total);

	// Class-Based Object Blueprints
	
		/*
			- allows creation of objects using classes as blueprints

			- "this"

			Syntax:
				class ClassName {
					constructor(objectPropertyA, objectPropertyB) {
						thisoP = PropertyA;
					}
				}
		*/

		class Car {
			constructor(brand, name, year) {
				this.brand = brand;
				this.name = name;
				this.year = year;
			}
		}

		let myCar = new Car();
		console.log(myCar);

		myCar.brand = "Toyota";
		myCar.name = "Yaris";
		myCar.year = 2015;

		console.log(myCar);

// [ES14 Updates]

	// toSorted()

		let array = ["naruto", "sakura", "hinata", "choji", "kakashi"];

		let sortedArray = array.toSorted();

		console.log("Original Array: ", array);
		console.log("Sorted New Array: ", sortedArray);

		array.sort();
		console.log("Original Array: ", array);

	// findLast ()

		let arrayNumbers = [15, 2, 6, 27, 83, 60, 40];

		let lastEvenNumber = arrayNumbers.findLast((number) => {
			console.log(number);

			return number % 2 === 0
		});

	// toSpliced

		// non-mutator

		let songsList = ["Pusong Bato", "Ikaw Na Nga", "Bagyo", "Selos", "Budots"];

		let updatedSongList = songsList.toSpliced(1, 2, "Tigidong", "Butiki");

		console.log("Original Array: ", songsList);
		console.log("Updated Array: ", updatedSongList);



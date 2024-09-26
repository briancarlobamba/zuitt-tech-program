console.log("Hello, World");

// [SECTION] Objects

	/*
		NEW (new) = operator signals creation of a new instance of the Object class that can be stored in a variable

		Syntax:
			let objectName = {
				keyA: valueA,
				keyB: valueB,
			}
	*/

		let myComputer = new Object();
		console.log(myComputer);
		console.log(typeof myComputer);

		let cellphone = {
			name: "Nokie 3210",
			manufactureDate: 1999
		};

		console.log(cellphone);
		console.log(typeof cellphone);

	// Reusability

		/*
			- "Constructor function"

			Syntax:
				function ObjectName(keyA, keyB) {
					this.keyA = keyA;
					this.keyB = keyB;
				}
		*/

		function Laptop(name, manufactureDate) {
			this.name = name;
			this.manufactureDate = manufactureDate;
		}

		let laptop = new Laptop("Lenovo", 2008);
		console.log(laptop);

		let myLaptop = new Laptop("MSI GP75 Leopard", 2020);
		console.log(myLaptop);

	// Accessing array objects

		let array = [laptop, myLaptop];
		console.log(array[0]["name"]);
		console.log(array[0].name); // best practice to lessen confusion

	// Initialize/Add/Delete/Reassign Object Properties

		let car = {};

		car.name = "Honda Civic";
		console.log(car);
		car.yearModel = 2007;
		console.log(car);

		let person = {
			name: "John",
			talk: function() {
				console.log("Hello, my name is " + this.name);
			}
		};

		console.log(person);
		person.talk();

		person.walk = function() {
			console.log(this.name + " walked 25 steps forward.");
		};

		person.walk();
		console.log(person);

		let friend = {
			firstName: "Joe",
			lastName: "Smith",
			address: {
				city: "Austin",
				country: "Texas",
			},
			emails: ["joe@mail.com", "joesmith@mail.com"],
			introduce: function() {
				console.log("Hello my name is " + this.firstName + " " + this.lastName);
			}
		};

		friend.introduce();

		console.log(Pokemon);

		function Pokemon(name, level) {

			// Properties
			this.name = name;
			this.level = level;
			this.health = 2 * level
			this.attack = level;

			// Methods
			this.tackle = function(target) {
				console.log(this.name + " tackled " + target.name);
				console.log("targetPokemon's health is now reduced to _ targetPokemon health");
			};
			this.faint = function() {
				console.log(this.name + " fainted ");
			}
			
		}

		let pikachu = new Pokemon("Pikachu",  16);
		console.log(pikachu);

		let rattata = new Pokemon("Rattata", 8);
		console.log(rattata);

		pikachu.tackle(rattata);
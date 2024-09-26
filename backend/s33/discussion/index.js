console.log("I will master JavaScript eventually");

// JSON

	/*
		- JSON stands for JavaScript Object Notation

		- JSON is also used in other programming languages hence the name JavaScript Object Notation

		- Core JavaScript has a built in JSON object that contains methods for parsing JSON objects and converting strings into JavaScript objects

		- JavaScript objects are not to be confused with JSON

		- JSON is used for serializing different data types into bytes

		- Serialization is the process of converting data into a series of bytes for easier transmission/transfer of information
		
		- A byte is a unit of data that is eight binary digits (1 and 0) that is used to represent a character (letters, numbers or typographic symbols)

		- Bytes are information that a computer processes to perform different tasks

		- Uses double quotes for property names

		Syntax: 
			{ "propertyA": "valueA", "propertyB": "valueB", }
	*/

	// JSON Objects

	/*{
		"city": "Quezon City",
		"province": "Metro Manila";
		"country": "Philippines"
	}
*/
	// JSON Arrays

	/*"cities": [
			{"city": "Quezon City", "province": "Metro Manila", "country": "Philippines"},
			{"city": "Makati City", "province": "Metro Manila", "country": "Philippines"},
			{"city": "Mandaluyong City", "province": "Metro Manila", "country": "Philippines"},
	]
*/

// JSON Methods

	let batchesArr = [{batchName: "Batch X"}, {batchName: "Batch Y"}];

	console.log("Result from stringify method: ");
	console.log(JSON.stringify(batchesArr));

	let data = JSON.stringify({
		name: "John",
		age: 31,
		address: {
			city: "Manila",
			country: "Philippines"
		}
	});

	console.log(data);

	let batchesJSON = `[{"batchName": "Batch X"}, {"batchName": "Batch Y"}]`;
	console.log("Result from parse method: ");
	console.log(JSON.parse(batchesJSON));
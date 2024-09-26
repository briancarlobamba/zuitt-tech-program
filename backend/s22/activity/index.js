/*
1. In the s22 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
 */

// console.log("Hello World");

console.log("Hello World");


/*
4. Research how to concatenate strings using + operator in Javascript. 
    - Create two variables with a street, and a city.
    - Concatenate them to form a full address.
    - Log the full address to the console
    - Example: Timog Ave, Quezon City
*/

    let street = "Elizabeth St.";
    let city = "Neepawa";
    let fullAddress = street + ", " + city;
    console.log(fullAddress);

/*
5. Research how to combine text with Strings in Javascript
    - Create  variable named messageLog to store a message
    - Log the message "I live in" and your full address to the console.
    - Example: Welcome to Manila
*/

    let messageLog = "I live in " + fullAddress;
    console.log(messageLog);

/*
6. Research the use of the escape character in Javascript strings.
    - Create a string with a sentence: I'm learning JavaScript., but use the escape character for the single quote.
    - Create another string with the same sentence that includes a single quote (') without using the escape character.
    - Log both strings to the console and observe the difference.
*/

    let sentenceWithEscape = 'I\'m learning JavaScript.';
    let sentenceWithoutEscape = "I'm learning JavaScript.";
    console.log(sentenceWithEscape);
    console.log(sentenceWithoutEscape);

/*
7. Research the use of the escape character in Javascript strings.
    - Create a paragraph variable and log it like this:
        "JavaScript is a powerful programming language.
        It is used for web development, server-side scripting, and more.
        Learning JavaScript opens up many opportunities for developers."
*/

    let paragraph = "JavaScript is a powerful programming language.\nIt is used for web development, server-side scripting, and more.\nLearning JavaScript opens up many opportunities for developers.";
    console.log(paragraph);

/*

8. Research how to determine the data type of each variable.
    - Add the variables of different primitive data types: 
        - str = "Twice"
        - num = 27
        - bool = true
        - nul = null
        - undf = undefined
        - arr = ["Dahyun", "Chaeyoung", "Mina"]
        - obj = { twice: "Dahyun" }
    - Use the operator to determine the data type of each variable.
    - Log the result to the console.
*/

    let str = "Twice";
    let num = 27;
    let bool = true;
    let nul = null;
    let undf = undefined;
    let arr = ["Dahyun", "Chaeyoung", "Mina"];
    let obj = {
        twice: "Dahyun"
    }
    console.log(typeof str);
    console.log(typeof num);
    console.log(typeof bool);
    console.log(typeof nul);
    console.log(typeof undf);
    console.log(typeof arr);
    console.log(typeof obj);

/*
9. Analyze different scenarios and write Javascript code to declare variables using let or const based on the given requirements.
    - Declare variables to store mathematical constants using the appropriate declaration.
    - Choose let or const considering whether the mathematical constants are fixed or may change.
        - pi = 3.14159
        - euler Number = 2.71828
        - current temperature = 25
        - product quantity in stock = 100
        - email = dahyun@gmail.com
        - user name = bhoxs Chae
    - log the result to the console.
*/

    const pi = 3.14159;
    const eulerNumber = 2.71828;
    let currentTemperature = 25;
    let productQuantityInStock = 100;
    let email = "dahyun@gmail.com";
    let userName = "bhoxs Chae";
    console.log(pi);
    console.log(eulerNumber);
    console.log(currentTemperature);
    console.log(productQuantityInStock);
    console.log(email);
    console.log(userName);

/*
10. Create the following variables to store to the following user details:
    Variable Name - Value Data Type:
    -firstName - String
    -lastName - String
    -age - Number
    -hobbies - Array
    -workAddress - Object

        -The hobbies array should contain at least 3 hobbies as Strings.
        -The work address object should contain the following key-value pairs:

            houseNumber: <value>
            street: <value>
            city: <value>
            state: <value>

    Log the values of each variable to follow/mimic the output.
*/

    //Add your variables and console.log for objective 1 here:

    let firstName = "Brian";
    let lastName = "Bamba";
    let age = 28;
    let hobbies = ["dota 2", "cars", "mechanical keyboards"]
    let workAddress = {
        houseNumber: "427",
        street: "Elizabeth St.",
        city: "Neepawa",
        state: "Manitoba"
    }
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Age: " + age);
    console.log("Hobbies:");
    console.log(hobbies);
    console.log("Work Address:");
    console.log(workAddress);

/*          
11. Debugging Practice - Identify and implement the best practices of creating and using variables 
       by avoiding errors and debugging the following codes:
            
        Note:
        Log the values of each variable to follow/mimic the output.
*/  

    let fullName = "Steve Rogers";
    console.log("My full name is: " + fullName);

    let currentAge = 40;
    console.log("My current age is: " + currentAge);
    
    let friends = ["Tony","Bruce", "Thor", "Natasha", "Clint", "Nick"];
    console.log("My Friends are: ")
    console.log(friends);

    let profile = {

        username: "captain_america",
        fullName: "Steve Rogers",
        age: 40,
        isActive: false,

    };
    console.log("My Full Profile: ")
    console.log(profile);

    let fullName2 = "Bucky Barnes";
    console.log("My bestfriend is: " + fullName2);

    const lastLocation = "Arctic Ocean";
    // lastLocation = "Atlantic Ocean";
    console.log("I was found frozen in: " + lastLocation);


    //Do not modify
    //For exporting to test.js
    try{
        module.exports = {
            street, city, fullAddress, messageLog, sentenceWithEscape, sentenceWithoutEscape, paragraph, str, num, bool, nul, undf, arr, obj, pi, eulerNumber, currentTemperature, productQuantityInStock, email, userName, firstName, lastName, age, hobbies, workAddress, fullName, currentAge, friends, profile, fullName2, lastLocation
        }
    } catch(err){
    }
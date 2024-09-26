console.log("Hello World");

// Create an object using object literals

// Initialize/add the object properties and methods

// Properties


// Methods
trainer.talk = function() {
    
}

// Check if all properties and methods were properly added
console.log(trainer);

// Access object properties using dot notation

// Access object properties using square bracket notation

// Access the trainer "talk" method


// Create a constructor function for creating a pokemon



    // Properties


    // Methods
    // Will accept an object as a target and the skill to be used
    // this.useSkill

    // Method is invoked in the tackle method
    // this.faint



// Create/instantiate a new pokemon

// Create/instantiate a new pokemon

// Create/instantiate a new pokemon

// Create/instantiate a new pokemon

// Invoke the useSkill method and target a different object


// Invoke the useSkill method and target a different object
;

// create catch method to catch pokemon with <= 10 health
trainer.catch 

// add a method inside the Pokemon that will allow the pokemon to add/replace skills array

// add method that will allow a pokemon to evolve. this will change the name of the pokemon as well as the attack value



  function Pokemon(name, level) {
      this.name = name;
      this.level = level;
      this.health = level * 2;
      this.attack = level;
      this.type = [];
      this.skill = [];

      this.evolve = function(evolveName, evolveAttack, evolveType, newSkill) {
          console.warn(this.name + " is about to evolve to " + evolveName + "!");

          this.name = evolveName;
          this.attack = evolveAttack;

          if (!this.type.includes(evolveType)) {
              this.type.push(evolveType);
          }
          this.skill.push(newSkill);

          return this;
      };
  }

  // Create a new Pokémon
  let myPokemon = new Pokemon("Pikachu", 10);
  console.log(myPokemon); 
  // Evolve the Pokémon
  let evolvedPokemon = myPokemon.evolve("Raichu", 20, "Electric", "Thunderbolt");
  console.log(evolvedPokemon); 



// create NPC object using object Literals 
const NPC = {
    name: "Brian",
    pokemon: "JigglyPuff"  
}

Object.freeze(NPC);


NPC.name = 'Carlo'; 
NPC.pokemon = 'Charizard';      
NPC.age = 28
console.log(NPC); 


/* 

    Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.

    - Check syntax of the following code.
    - Check if the correct value is returned.
    - Check the parameters and arguments.
    - Check the if else statements
    - Check the loop statements
    - Check if the array methods used are correct.
    - Check if the objects are being accessed properly.

*/

let books = [
    {
        id: 1,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
    },
    {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
    },
    {
        id: 3,
        title: "Dune",
        author: "Frank Herbert",
    },
    {
        id: 4,
        title: "Harry Potter and The Socerer's Stone",
        author: "J.K. Rowling",
    },
    {
        id: 5,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    }
  ];
  

  function findBookByTitle(title) {

    if(books.length === 0) {
        return "Error: No books in database.";
    }

    if (typeof title !== 'string') {
        return "Error: Title must be a string.";
    }

    if (title.length === 0 || title === '') {
        return "Error: Title cannot be empty.";
    }

    let bookFound = books.filter(book => book.title === title);

    if (bookFound.length > 0) {
      return bookFound;
    } else {
      return "Book not found."
    }

  }

  let ifTitleNotString = findBookByTitle(5);
  console.log("Message if the title given is not a string:");
  console.log(ifTitleNotString);

  let ifTitleIsEmpty = findBookByTitle('');
  console.log("Message if the title given is empty:");
  console.log(ifTitleIsEmpty);

  let book = findBookByTitle("The Lord of the Rings");
  console.log("Book found:");
  console.log(book);
function findBooksByAuthor(author){

    if(books.length === 0) {
        return "Error: No books in database.";
    }

    if (typeof author !== 'string') {
        return "Error: Author must be a string.";
    }

    if (author.length === 0 || author ==='') {
        return "Error: Author cannot be empty.";
    }

    let booksFound = books.filter(book => book.author === author);

    if (booksFound.length > 0) {
      return booksFound;
    } else {
      return "Books not found."
    }

  }

  let ifAuthorNotString = findBooksByAuthor(5);
  console.log("Message if the author given is not a string:");
  console.log(ifAuthorNotString);

  let ifAuthorIsEmpty = findBooksByAuthor('');
  console.log("Message if the author given is empty:");
  console.log(ifAuthorIsEmpty);

  let booksByAuthor = findBooksByAuthor("J.R.R. Tolkien");
  console.log(booksByAuthor);


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null,
        NPC: typeof NPC !== 'undefined' ? NPC : null

    }
} catch(err){

}
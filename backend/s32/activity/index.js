console.log("hello");

//Important Note: Do not change the variable names. 
//All required classes, variables and function names are listed in the exports.

// Exponent Operator


// Template Literals

		function getCube(num) {
		    return num ** 3;
		}

		let cubedNumber = `The cube of 2 is ${getCube(2)}`;

		console.log(cubedNumber);


// Array Destructuring

const address = ["258", "Washington Ave NW", "California", "90011"];

		const [houseNumber, street, state, zipCode] = address;
		console.log(`The full address is: ${houseNumber} ${street}, ${state} ${zipCode}`);


// Object Destructuring

const animal = {
    name: "Lolong",
    species: "saltwater crocodile",
    weight: "1075 kgs",
    measurement: "20 ft 3 in"
}

		const { name, species, weight, measurement } = animal;
		console.log(`The animal's name is ${name}, a ${species} that weighs ${weight} and measures ${measurement}.`);

// Arrow Functions

let numbers = [1, 2, 3, 4, 5];

		numbers.forEach(number => console.log(number));
		const reduceNumber = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		console.log(reduceNumber);

// Javascript Classes


// ES14 Updates

		class Book {
		    constructor(title, author, year, status = "Available") {
		        this.title = title;
		        this.author = author;
		        this.year = year;
		        this.status = status;
		    }
		}

		const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
		const book2 = new Book("1984", "George Orwell", 1949, "Checked Out");
		const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
		const book4 = new Book("Moby-Dick", "Herman Melville", 1851, "Reserved");
		const book5 = new Book("Pride and Prejudice", "Jane Austen", 1813);
		const book6 = new Book("War and Peace", "Leo Tolstoy", 1869, "Lost");

		const books = [book1, book2, book3, book4, book5, book6];

// booksSortedByYear()


	/*	const booksSortedByYear = (books, order = "asc") => {
		    return books.sort((a, b) => {
		        if (order === "asc") {
		            return a.year - b.year;
		        } else {
		            return b.year - a.year;
		        }
		    });
		};

		console.log(booksSortedByYear(books)); 
		console.log(booksSortedByYear(books, "desc")); */
/*
		function bookSortedByYear(books) {
    		const sortedBooks = [...books];
   	 		sortedBooks.sort((a, b) => a.year - b.year);
    		return sortedBooks;
		};

		const sortedBooks = bookSortedByYear(books);
		console.log(sortedBooks);*/

		/*function booksSortedByYear(books) {
    		return books.toSorted((a, b) => a.year - b.year);
		};*/

/*		const booksSortedByYear = (books) => books.toSorted((a, b) => a.year - b.year);
*/

const booksSortedByYear = (books) => {
  return books.toSorted((a, b) => a.year - b.year);
};


// findLastBought()

		/*const findLastBought = (books) => {
		    return books.findLast(book => book.status === "Checked Out");
		};

		const lastCheckedOutBook = findLastBought(books);
		console.log(lastCheckedOutBook);*/

		const findLastBought = (books) => {
		    return books.findLast(book => book.status === "Checked Out");
		};

// booksToReplace()

/*const booksToReplace = (books, newBook) => {
	const index = books.findIndex(book => book.title === newBook.title);

		if (index === -1) {
			return books;
		}

		const updatedBooks = books.toSpliced(index, 1, newBook);
		    	return updatedBooks;
		};*/

/*		const booksToReplace = (books, newBook) => {
		    const index = books.findIndex(book => book.title === newBook.title);

		    if (index === -1) {
		        return books;
		    }

		    const updatedBooks = [...books]; 
		    updatedBooks.splice(index, 1, newBook);

		    return updatedBooks;
		};

		const newBook = new Book("1984", "George Orwell", 1949, "Available");
		const updatedBooks = booksToReplace(books, newBook);
		console.log(updatedBooks);
*/

	/*const booksToReplace = (books, newBook) => {
	    const index = books.findIndex(book => book.title === newBook.title);

	    if (index === -1) {
	        return books;
	    }

	    return books.toSpliced(index, 1, newBook);
	};*/

	const booksToReplace = (books, newBook) => {
	    let index = -1;
	    for (let i = 0; i < books.length; i++) {
	        if (books[i].title === newBook.title) {
	            index = i;
	            break;
	        }
	    }

	    if (index === -1) {
	        return books;
	    }

	    return books.toSpliced(index, 1, newBook);
	};


// reversedBooks()

/*const reversedBooks = (books) => {
    	return books.toReversed();
	};*/

/*		const reversedBooks = (books) => {
		    return [...books].reverse();
		};

		const reversedBooksArray = reversedBooks(books);
		console.log(reversedBooksArray);*/

		const reversedBooks = (books) => {
    		return books.toReversed();
		};

// searchBooksByTitle()

	/*	const searchBookByTitle = (books, title) => {
		    return books.find(book => book.title === title);
		};

		// Example usage:
		const searchedBook = searchBookByTitle(books, "1984");
		console.log(searchedBook);
*/

	/*	function searchBooksByTitle(books, title){
		    const bookFound = books.find(b => b.title === title);
		    return bookFound;
		};
*/

const searchBooksByTitle = (books, title) => {
    return books.find(b => b.title === title);
};

// checkOutBook()

/*const checkOutBook = (book) => {
	return book.with({ status: "Checked Out" });
	};
*/
		const checkOutBook = (book) => {
		    return { ...book, status: "Checked Out" };
		};

	/*	const updatedBook = checkOutBook(book3);
		console.log(updatedBook);
*/


//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        getCube: typeof getCube !== 'undefined' ? getCube : null,
        address: typeof address !== 'undefined' ? address : null,
        houseNumber: typeof houseNumber !== 'undefined' ? houseNumber : null,
        street: typeof street !== 'undefined' ? street : null,
        state: typeof state !== 'undefined' ? state : null,
        zipCode: typeof zipCode !== 'undefined' ? zipCode : null,
        animal: typeof animal !== 'undefined' ? animal : null,
        name: typeof name !== 'undefined' ? name : null,
        species: typeof species !== 'undefined' ? species : null,
        weight: typeof weight !== 'undefined' ? weight : null,
        measurement: typeof measurement !== 'undefined' ? measurement : null,
        numbersForEach: typeof numbersForEach !== 'undefined' ? numbersForEach : null,
        reduceNumber: typeof reduceNumber !== 'undefined' ? reduceNumber : null,
        numbers: typeof numbers !== 'undefined' ? numbers : null,
        greet: typeof greet !== 'undefined' ? greet : null,
        Book: typeof Book !== 'undefined' ? Book : null,
        books: typeof books !== 'undefined' ? books : null,
        sortedBooks: typeof sortedBooks !== 'undefined' ? sortedBooks : null,
        booksSortedByYear: typeof booksSortedByYear !== 'undefined' ? booksSortedByYear : null,
        findLastBought: typeof findLastBought !== 'undefined' ? findLastBought : null,
        booksToReplace: typeof booksToReplace !== 'undefined' ? booksToReplace : null,
        replacementBook: typeof replacementBook !== 'undefined' ? replacementBook : null,
        reversedBooks: typeof reversedBooks !== 'undefined' ? reversedBooks : null,
        booksReversed: typeof booksReversed !== 'undefined' ? booksReversed : null,
        searchBooksByTitle: typeof searchBooksByTitle !== 'undefined' ? searchBooksByTitle : null,
        searchBook: typeof searchBook !== 'undefined' ? searchBook : null,
        checkOutBook: typeof checkOutBook !== 'undefined' ? checkOutBook : null,
        boughtBook: typeof boughtBook !== 'undefined' ? boughtBook : null


    }
} catch(err){

}
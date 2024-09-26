// "require" directive to load HTTP modules of node JS

// "HyperText Transfer Protocol" = data transfer between applications;

/*
	Requests = message sent by the client
	Responses = messages sent by the server
*/

// 1. Create a server
// 2. Define the port number

const http = require("http");

const port = 4000;

let items = ["Laptop", "Desktop", "Tablet"];

const app = http.createServer(function(request, response) {

	// The "url" property refers to the endpoint of the url in the browser

	if (request.url == "/greeting") {

		// 200 means "OK"
		response.writeHead(200, {"Content-Type": "text/plain"});

		response.end("Hello Again");

	} else if (request.url == "/homepage") {

		response.writeHead(200, {"Content-Type": "text/plain"});

		response.end("This is the homepage");

	// the default HTTP method made by the browser is GET
	} else if (request.url == "/items" && request.method === "GET") {

		response.writeHead(200, {"Content-Type": "text/plain"});

		response.end(items.toString());

	} else if (request.url == "/items" && request.method === "POST") {

		console.log(request.method);

		response.writeHead(200, {"Content-Type": "text/plain"});

		response.end("This route will be used to add another item");

// Activity

	} else if (request.url == '/') {
        response.writeHead(200, {'Content-Type': 'text-plain'});

        response.end('Welcome to Booking System');

	} else if (request.url == '/profile') {
        response.writeHead(200, {'Content-Type': 'text-plain'});

        response.end('Welcome to your profile!');

	} else if (request.url == '/courses' && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text-plain'});

        response.end("Here's our courses available");

	} else if (request.url == '/addCourse' && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text-plain'});

        response.end('Add a course to our resources');

	} else if (request.url == "/updateCourse" && request.method === "PUT") {

		response.writeHead(200, {"Content-Type": "text/plain"});

		response.end("Update course to our resources");

	} else if (request.url == "/deleteCourse" && request.method === "DELETE") {

			response.writeHead(200, {"Content-Type": "text/plain"});

			response.end("Delete courses to our resources");

	} else if (request.url == "/updateProfile" && request.method === "PATCH") {

			response.writeHead(200, {"Content-Type": "text/plain"});

			response.end("Update your profile to our resources");
	}

// Activity End

	else {

		// 404 means Not Found
		response.writeHead(404, {"Content-Type": "text/plain"});

		response.end("Page not available");
	}
	
});

app.listen(port)

console.log(`Server now accessible at localhost:${port}.`);

// HTTP Methods:

	/*
		GET - used for getting data from a server

		POST - used for inputting data into a server to creat a new document

		PUT - used for inputting data into a server to update a whole document

		PATCH - updating a smaller part of document

		DELETE - used to delete a document
	*/
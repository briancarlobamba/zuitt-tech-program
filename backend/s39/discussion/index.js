// Discussion:

const express = require("express");

const app = express()

const port = 4000;

// Set up for allowing the server to handle data from requests

// Middleware is a software that provides common services and capabilities to applications outside of what's offered by the operating system

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// [SECTION] Routes

app.get("/", (req, res) => {
	res.send("Hello World");
})

app.get("/hello", (req, res) => {
	res.send("Hello from the /hello endpoint");
})

app.post("/hello", (req, res) => {
	res.send(`Hello there, ${req.body.firstName} ${req.body.lastName}!`);
})

let users = [];
app.post("/register", (req, res) => {
	console.log(req.body);

	if (req.body !== "" && req.body.password !== "") {
		users.push(req.body);
		res.send(`User ${req.body.username} successfully registered!`);
	} else {
		res.send("Please input BOTH username and password")
	}
})

app.delete("/delete-user", (req, res) => {
	if (users.length > 0) {
		users.pop();
		res.send(users);
	} else {
		res.send("Users collection is empty");
	}
})


// ACTIVITY

app.put("/change-password", (req, res) => {
	let message = "User does not exist";

	for (let i = 0; i < users.length; i++) {
		if (users[i].username === req.body.username) {
			users[i].password = req.body.newPassword;
			message = `User ${req.body.username}'s password has been updated`;
			break;
		}
	}

	res.send(message);
});


























// Do not modify


if (require.main === module) {
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = { app };

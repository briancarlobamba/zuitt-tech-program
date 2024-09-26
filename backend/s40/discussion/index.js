
// s40 discussion

// Dependencies

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

// replace <password> with actual password, and add collection/database name between "/" and "?" and delete characters after "majority"

mongoose.connect("mongodb+srv://admin:admin1234@wdc028-course-booking.lvsic.mongodb.net/b460-to-do?retryWrites=true&w=majority")

let db = mongoose.connection;


// database handlers

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to the cloud database"));

// Mongoose Schema

	// Use the Schema() constructor
	// new

const taskSchema = new mongoose.Schema({
	name: String,
	status: {
		type: String,
		// predefined values
		default: "pending"
	}
});

const Task = mongoose.model("Task", taskSchema);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Creating a Task

	app.post("/tasks", (req, res) => {

		// find a duplicate incase before heading to adding task
		Task.findOne({name: req.body.name}).then((result, err) => {

			if (result != null && result.name == req.body.name) {
				return res.send("Duplicate task found");
			} else {
				let newTask = new Task ({
					name: req.body.name
				});

				newTask.save().then((savedTask, saveErr) => {
					if (saveErr) {
						return console.error(saveErr);
					} else {
						return res.send("New task created");
					}
				})
			}
		})
	});



// s40 activity

	app.get('/tasks', (req, res) => {
	    Task.find({}).then((result, err) => {
	        if(err) {
	            return console.log(err);
	        } else {
	            return res.send(result);
	        }
	    })
	})

	app.post('/search-task', (req, res) => {
	    Task.findOne({ name: req.body.name }).then((result) => {
	        if (result) {
	            res.send(result);
	        } else {
	            res.send("Task not found");
	        }
	    }).catch((err) => {
	        console.log(err);
	    });
	});

	

	const userSchema = new mongoose.Schema({
	    firstName: String,
	    lastName: String,
	    email: String,
	    password: String
	});

	const User = mongoose.model("User", userSchema);

	app.post("/register", (req, res) => {
	    const { firstName, lastName, email, password } = req.body;

	    User.findOne({ email }).then((existingUser) => {
	        if (existingUser) {
	            return res.send( "Duplicate username found");
	        } else {
	            if (!firstName || !lastName || !email || !password) {
	                return res.send("All fields must be provided");
	            }

	            const newUser = new User({ firstName, lastName, email, password });

				 newUser.save().then(() => {
	                res.status(201).send("New user registered");
	            });
	        }
	    });
	});


	app.post("/login", (req, res) => {
	    const { email, password } = req.body;

	    User.findOne({ email }).then((user) => {
	        if (user) {
	            if (user.password === password) {
	                return res.send("Thank you for logging in");
	            } else {
	                return res.send("Wrong Password");
	            }
	        } else {
	            return res.send("Email does not exist");
	        }
	    });
	});





































if (require.main === module) {
	app.listen(port, () => console.log(`Server running at port ${port}`));
};

module.exports = {app, mongoose};
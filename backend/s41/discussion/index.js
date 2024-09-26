// Dependencies

	const express = require("express");
	const mongoose = require("mongoose");
	const taskRoute = require("./routes/taskRoutes");

// Server setup

	const app = express();
	const port = 4000;

// Database connection

	mongoose.connect("mongodb+srv://admin:admin1234@wdc028-course-booking.lvsic.mongodb.net/b460-to-do?retryWrites=true&w=majority");
	let db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", () => console.log("Now connected to MongoDB Atlas"));


	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use("/tasks", taskRoute);

// Server listening

	if (require.main === module) {
		app.listen(port, () => console.log(`Server running at port ${port}`));
	};

	module.exports = {app, mongoose};
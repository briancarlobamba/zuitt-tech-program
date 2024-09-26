const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://admin:admin1234@wdc028-course-booking.lvsic.mongodb.net/b460-to-do?retryWrites=true&w=majority");

let db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to the cloud database"));

app.use(express.json());
app.use(express.urlencoded({extended:true})); 

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = app;

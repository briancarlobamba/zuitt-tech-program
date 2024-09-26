//Activity
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const productRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://admin:admin123@cluster0.7iowx.mongodb.net/task-app?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/recipes", productRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };

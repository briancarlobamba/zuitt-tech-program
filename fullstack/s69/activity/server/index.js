const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gameRoutes = require('./routes/game');
const userRoutes = require('./routes/user');

mongoose.connect("mongodb+srv://admin:admin1234@wdc028-course-booking.lvsic.mongodb.net/b460-s69?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/games", gameRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };
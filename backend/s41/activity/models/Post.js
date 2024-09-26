const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({ 
    title : String,
    content: String,
    dateAdded: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model("Post", postSchema); 

module.exports = Post;

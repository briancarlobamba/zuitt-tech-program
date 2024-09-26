const Post = require("../models/Post");

exports.createPost = (req, res) => {
    Post.findOne({title : req.body.title}).then((result) => {
        if(result != null && result.title == req.body.title){
            return res.send("Duplicate Post found");
        } else {
            let newPost = new Post({
                title : req.body.title,
                content: req.body.content
            });

            newPost.save()
            .then((savedPost) => res.send("New Post created"))
            .catch(err => res.send(err));
        }
    }).catch(err => res.send(err));
};

exports.getPosts = (req, res) => {
    Post.find({})
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    Post.findById(id)
        .then(result => {
            if (!result) {
                return res.send("Post not found");
            }

            // Update fields
            result.title = title;
            result.content = content;

            return result.save()
                .then(updatedPost => res.send(updatedPost))
                .catch(err => res.send("Update failed"));
        })
        .catch(err => res.send("Find Failed"));
};

exports.deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(deletedPost => {
            if (deletedPost) {
                res.send(deletedPost);
            } else {
                res.send("Post not found");
            }
        })
        .catch(err => res.send("Delete failed: " + err));
};
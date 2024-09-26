const Movie = require("../models/Movie");

module.exports.addMovie = (req,res) => {

	let newMovie = new Movie({
		title : req.body.title,
		director : req.body.director,
		year: req.body.year,
		description: req.body.description,
		genre: req.body.genre
	});

	newMovie.save()
	.then(savedMovie => res.status(201).send(savedMovie))
	.catch(saveErr => {

		console.error("Error in saving the Movie: ", saveErr)
		return res.status(500).send({ error: 'Failed to save the movie' });
	})

};

module.exports.getMovies = (req, res) => {
    return Movie.find({})
    .then(result => {
        if (result.length > 0) {
            return res.status(200).send({ movies: result });
        } else {
            return res.status(404).send({ message: 'No movies found' });
        }
    })
    .catch(err => {
        console.error("Error in fetching Movies: ", err);
        return res.status(500).send({ error: 'Failed to fetch Movies' });
    });
};

module.exports.getMovieById = (req, res) => {

	Movie.findById(req.params.id)
	.then(foundMovie => {
		if (!foundMovie) {
			return res.status(404).send({ error: 'Movie not found' });
		}
		return res.status(200).send(foundMovie);
	})
	.catch(err => {
		console.error("Error in fetching the Movie: ", err)
		return res.status(500).send({ error: 'Failed to fetch Movie' });
	});

};

module.exports.updateMovie = (req, res) => {

	let movieUpdates = {
        title : req.body.title,
		director : req.body.director,
		year: req.body.year,
		description: req.body.description,
		genre: req.body.genre
    }

    return Movie.findByIdAndUpdate(req.params.id, movieUpdates, {new: true})
    .then(updatedMovie => {

        if (!updatedMovie) {

            return res.status(404).send({ error: 'Movie not found' });

        }

        return res.status(200).send({ 
        	message: 'Movie updated successfully', 
        	updatedMovie: updatedMovie 
        });

    })
    .catch(err => {
		console.error("Error in updating a Movie : ", err)
		return res.status(500).send({ error: 'Error in updating a Movie.' });
	});
};

module.exports.deleteMovie = (req, res) => {

    return Movie.deleteOne({ _id: req.params.id})
    .then(deletedResult => {

        if (deletedResult < 1) {

            return res.status(400).send({ error: 'No Movie deleted' });

        }

        return res.status(200).send({ 
        	message: 'Movie deleted successfully'
        });

    })
    .catch(err => {
		console.error("Error in deleting a Movie : ", err)
		return res.status(500).send({ error: 'Error in deleting a Movie.' });
	});
};


module.exports.addComment = (req, res) => {

    const userId = req.user.id;

    const newComment = {
        userId: userId, 
        comment: req.body.comment
    };

    Movie.findByIdAndUpdate(
        req.params.id,
        { $push: { comments: newComment } },
        { new: true }
    )
    .then(updatedMovie => {
        if (!updatedMovie) {
            return res.status(404).send({ error: 'Movie not found' });
        }

        return res.status(200).send({
            message: 'comment added successfully',
            updatedMovie: updatedMovie
        });
    })
    .catch(err => {
        console.error("Error in adding comments: ", err);
        return res.status(500).send({ error: 'Error in adding comments.' });
    });
};




module.exports.getComments = (req, res) => {

    Movie.findById(req.params.id)
        .populate('comments.userId', '_id')
        .then(movie => {
            if (!movie) {
                return res.status(404).send({ error: 'Movie not found' });
            }

            const commentsResponse = movie.comments.map(comment => ({
                userId: comment.userId ? comment.userId._id : null,
                comment: comment.comment,
                _id: comment._id
            }));

            return res.status(200).send({
                comments: commentsResponse
            });
        })
        .catch(err => {
            console.error("Error in fetching comments: ", err);
            return res.status(500).send({ error: 'Error in fetching comments.' });
        });
};

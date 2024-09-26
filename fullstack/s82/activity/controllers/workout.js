const Workout = require("../models/Workout");


// -----------------------------------------------------------------
// addWorkout:

	// original code:

		/*module.exports.addWorkout = (req,res) => {

			const userId = req.user.id;

			let newWorkout = new Workout({
				userId: userId,
				name : req.body.name,
				duration : req.body.duration
			});

			newWorkout.save()
			.then(savedWorkout => res.status(201).send(savedWorkout))
			.catch(saveErr => {

				console.error("Error in saving the workout: ", saveErr)
				return res.status(500).send({ error: 'Failed to save the workout' });
			})

		};*/
		

	// 09-19-24 debugging:

		module.exports.addWorkout = (req, res) => {
		    
		    const userId = req.user.id;

		    if (!req.body.name || !req.body.duration) {
		        return res.status(400).send({ error: 'Name and duration are required' });
		    }

		    let newWorkout = new Workout({
		        userId: userId,
		        name: req.body.name,
		        duration: req.body.duration
		    });

		    newWorkout.save()
		        .then(savedWorkout => res.status(201).send({
		            userId: userId,
		            _id: savedWorkout._id,
		            name: savedWorkout.name,
		            duration: savedWorkout.duration,
		            status: savedWorkout.status,
		            dateAdded: savedWorkout.dateAdded
		        }))
		        .catch(saveErr => {
		            console.error("Error in saving the workout: ", saveErr);
		            return res.status(500).send({ error: 'Failed to save the workout' });
		        });
		};


// -----------------------------------------------------------------
// getMyWorkouts

	// original code:

		/*module.exports.getMyWorkouts = (req, res) => {

			const userId = req.user.id; 

			Workout.find({ userId: userId })
			.then(workouts => {

			    if (workouts.length > 0){
			        return res.status(200).send({ workouts });
			    }
			    else {

			        return res.status(200).send({ message: 'No workouts found.' })
			    }

			}).catch(err => res.status(500).send({ error: 'Error finding workouts.' }));

		};*/

	// 09-19-24 debugging:

	module.exports.getMyWorkouts = (req, res) => {

    const userId = req.user.id;

    Workout.find({ userId: userId })
        .then(workouts => {

            return res.status(200).send({ workouts: workouts });
        })
        .catch(err => {
            console.error("Error finding workouts: ", err);
            return res.status(500).send({ error: 'Error finding workouts.' });
        });
	};


// -----------------------------------------------------------------
// updateWorkout

	// original code:

		/*module.exports.updateWorkout = (req, res) => {

			let workoutUpdates = {
		        name: req.body.name,
		        duration: req.body.duration
		    }

		    return Workout.findByIdAndUpdate(req.params.id, workoutUpdates, {new: true})
		    .then(updatedWorkout => {

		        if (!updatedWorkout) {

		            return res.status(404).send({ error: 'Workout not found' });

		        }

		        return res.status(200).send({ 
		        	message: 'Workout updated successfully', 
		        	updatedWorkout: updatedWorkout 
		        });

		    })
		    .catch(err => {
				console.error("Error in updating a Workout : ", err)
				return res.status(500).send({ error: 'Error in updating a Workout.' });
			});
		};*/

	// 09-19-24 debugging:

		module.exports.updateWorkout = (req, res) => {

	    let workoutId = req.params.id;
	    let workoutUpdates = {
	        name: req.body.name,
	        duration: req.body.duration
	    };

	    return Workout.findByIdAndUpdate(workoutId, workoutUpdates, { new: true })
	        .then(updatedWorkout => {
	            if (!updatedWorkout) {
	                return res.status(404).send({ error: 'Workout not found' });
	            }

	            return res.status(200).send({ 
	                message: 'Workout updated successfully', 
	                updatedWorkout: updatedWorkout 
	            });
	        })
	        .catch(err => {
	            console.error("Error in updating a Workout: ", err);
	            return res.status(500).send({ error: 'Error in updating a Workout.' });
	        });
	};


// -----------------------------------------------------------------
// deleteWorkout

	// original code:

		/*module.exports.deleteWorkout = (req, res) => {

		    return Workout.deleteOne({ _id: req.params.id})
		    .then(deletedResult => {

		        if (deletedResult < 1) {

		            return res.status(400).send({ error: 'No Workout deleted' });

		        }

		        return res.status(200).send({ 
		        	message: 'Workout deleted successfully'
		        });

		    })
		    .catch(err => {
				console.error("Error in deleting a Workout : ", err)
				return res.status(500).send({ error: 'Error in deleting a Workout.' });
			});
		};*/

	// 09-19-24 debugging:

		module.exports.deleteWorkout = (req, res) => {
	    return Workout.deleteOne({ _id: req.params.id })
	        .then(deletedResult => {
	            // Check if any workout was deleted
	            if (deletedResult.deletedCount === 0) {
	                return res.status(404).send({ error: 'No workout found' });
	            }

	            return res.status(200).send({ 
	                message: 'Workout deleted successfully'
	            });
	        })
	        .catch(err => {
	            console.error("Error in deleting a Workout: ", err);
	            return res.status(500).send({ error: 'Error in deleting a Workout.' });
	        });
		};



// -----------------------------------------------------------------
// completeWorkoutStatus

	// original code:

/*		module.exports.completeWorkoutStatus = (req, res) => {

		    const statusUpdate = { status: req.body.status };


		    Workout.findByIdAndUpdate(req.params.id, statusUpdate, { new: true })
		    .then(updatedWorkout => {
		        if (!updatedWorkout) {
		            return res.status(404).send({ error: 'Workout not found' });
		        }

		        return res.status(200).send({
		            message: 'Workout status updated successfully',
		            updatedWorkout: updatedWorkout
		        });
		    })
		    .catch(err => {
		        console.error("Error in updating workout status: ", err);
		        return res.status(500).send({ error: 'Error in updating workout status.' });
		    });
		};*/


	// 09-19-24 debugging:

		module.exports.completeWorkoutStatus = (req, res) => {
		    const statusUpdate = { status: req.body.status };

		    Workout.findByIdAndUpdate(req.params.id, statusUpdate, { new: true })
		        .then(updatedWorkout => {
		            if (!updatedWorkout) {
		                return res.status(404).send({ error: 'Workout not found' });
		            }

		            return res.status(200).send({
		                message: 'Workout status updated successfully',
		                _id: updatedWorkout._id,
		                updatedWorkout: updatedWorkout
		            });
		        })
		        .catch(err => {
		            console.error("Error in updating workout status: ", err);
		            return res.status(500).send({ error: 'Error in updating workout status.' });
		        });
		};

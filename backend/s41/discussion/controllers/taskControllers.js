const Task = require("../models/Task");

module.exports.getAllTasks = () => {
	return Task.find({}).then(result => {
		return result;
	})
}

module.exports.createTask = (reqBody) => {
	let newTask = new Task ({
		name: reqBody.name
	})

	return newTask.save().then((task, error) => {
		if (error) {
			console.log(error);
			return false;
		} else {
			return task;
		}
	})
}

module.exports.deleteTask = (taskId) => {
	return Task.findByIdAndDelete(taskId)
	.then((removedTask) => removedTask)
	.catch(err => false)
}


// s41 activity

module.exports.updateTask = (taskId, reqBody) => {
    return Task.findById(taskId).then(task => {
        if (!task) {
            return false;
        }
        task.name = reqBody.name;

        return task.save()
        .then((updatedTask) => updatedTask)
        .catch(err => false);
    }).catch(err => false);
}
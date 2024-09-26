const express = require("express");

// middleware
const router = express.Router();
const taskController = require("../controllers/taskControllers")

router.get("/", (req, res) => {
	taskController.getAllTasks().then(resultFromController => res.send(resultFromController));
});

router.post("/", (req, res) => {
	taskController.createTask(req.body).then(resultFromController => res.send(resultFromController));
});

router.delete("/:id", (req, res) => {
	taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));
});

// s41 activity

router.put("/:id", (req, res) => {
    taskController.updateTask(req.params.id, req.body)
    .then(resultFromController => res.send(resultFromController));
});

module.exports = router;
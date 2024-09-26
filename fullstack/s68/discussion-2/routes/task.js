const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");
const { verify } = require("../auth");

console.log("verify", verify);
console.log("taskController", taskController);

router.get("/all", verify, taskController.getAllTasks)
router.post("/", verify, taskController.addTask)
router.patch("/:taskId", verify, taskController.updateTaskStatus)
router.delete("/:taskId", verify, taskController.deleteTask)

module.exports = router;

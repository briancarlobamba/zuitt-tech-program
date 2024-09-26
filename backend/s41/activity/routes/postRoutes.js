const express = require("express");
const postControllers = require("../controllers/postControllers");

const router = express.Router();

router.post("/", postControllers.createPost);
router.get("/", postControllers.getPosts);
router.put("/:id", postControllers.updatePost);
router.delete("/:id", postControllers.deletePost);

module.exports = router;

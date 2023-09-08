const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.get("/users", userController.getUsers);
router.post("/add-user", userController.addUser);

module.exports = router;

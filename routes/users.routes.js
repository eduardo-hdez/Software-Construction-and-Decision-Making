const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

router.get("/", usersController.getUsers);
router.get("/new", usersController.getNewUser);
router.post("/new", usersController.postNewUser);

module.exports = router;
const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/registerController");
router.post("/", RegisterController.handleNewUser);

module.exports = router;

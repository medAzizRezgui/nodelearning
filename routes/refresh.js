const express = require("express");
const router = express.Router();
const refreshTokenController = require("../controllers/refeshTokenController");
router.get("/", refreshTokenController.handleRefreshToken);

module.exports = router;

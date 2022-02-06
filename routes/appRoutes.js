const express = require("express");
const appController = require("../controllers/appController");

const router = express.Router();

router.route("/").get(appController.Metrics);

module.exports = router;

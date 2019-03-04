const express = require("express");
const router = express.Router();
// const timerRoutes = require("./timer_routes");
const TimerController = require("./../controllers/timer_controller");

router.get("/", TimerController.getTimeRemaining);

module.exports = router;

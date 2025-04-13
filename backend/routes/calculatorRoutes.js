const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");
// new route for adding two numbers
router.get("/add", (req, res) => {
	calculatorController.addNumbers(req, res);
});

router.get("/minus", (req, res) => {
	calculatorController.minusNumbers(req, res);
});

router.get("/multiply", (req, res) => {
	calculatorController.multiplyNumbers(req, res);
});

router.get("/divide", (req, res) => {
	calculatorController.divideNumbers(req, res);
});

module.exports = router;

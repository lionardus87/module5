const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.get("/add", (req, res) => {
	const { num1, num2 } = req.query;
	const result = calculatorController.addNumbers(
		parseInt(num1),
		parseInt(num2)
	);
	res.json({ result });
});

router.get("/minus", (req, res) => {
	const { num1, num2 } = req.query;
	const result = calculatorController.minusNumbers(
		parseInt(num1),
		parseInt(num2)
	);
	res.json({ result });
});

router.get("/multiply", (req, res) => {
	const { num1, num2 } = req.query;
	const result = calculatorController.multiplyNumbers(
		parseInt(num1),
		parseInt(num2)
	);
	res.json({ result });
});

router.get("/divide", (req, res) => {
	const { num1, num2 } = req.query;
	try {
		const result = calculatorController.divideNumbers(
			parseInt(num1),
			parseInt(num2)
		);
		res.json({ result });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;

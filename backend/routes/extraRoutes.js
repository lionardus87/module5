const express = require("express");
const router = express.Router();

router.get("/random", (req, res) => {
	let max = parseInt(req.query.max);
	let min = parseInt(req.query.min);
	if (isNaN(max) || isNaN(min) || min > max) {
		return res.status(400);
	}
	let random = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(random);
	res.status(200).json({ result: random });
});

module.exports = router;

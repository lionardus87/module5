// Lab exercise 5
const addNumbers = (req, res) => {
	let number1 = parseInt(req.query.num1);
	let number2 = parseInt(req.query.num2);
	let sum = number1 + number2;
	console.log(sum);
	res.status(200);
	res.json({ result: sum });
};

const minusNumbers = (req, res) => {
	let number1 = parseInt(req.query.num1);
	let number2 = parseInt(req.query.num2);
	let minus = number1 - number2;
	console.log(minus);
	res.status(200);
	res.json({ result: minus });
};

const multiplyNumbers = (req, res) => {
	let number1 = parseInt(req.query.num1);
	let number2 = parseInt(req.query.num2);
	let multiply = number1 * number2;
	console.log(multiply);
	res.status(200);
	res.json({ result: multiply });
};

const divideNumbers = (req, res) => {
	let number1 = parseInt(req.query.num1);
	let number2 = parseInt(req.query.num2);
	if (num2 == 0) {
		console.log(`Divide: Division by zero error!`);
		res.status(400).json({ error: "Cannot divide by zero!" });
	} else {
		let divide = number1 / number2;
		console.log(divide);
		res.status(200);
		res.json({ result: divide });
	}
};
module.exports = {
	addNumbers,
	minusNumbers,
	multiplyNumbers,
	divideNumbers,
};

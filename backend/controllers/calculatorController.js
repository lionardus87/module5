const Calculator = require("../libraries/calculator");

let myCalc = new Calculator();

// Lab exercise 5
const addNumbers = (req, res) => {
	let number1 = parseInt(req.query.num1);
	let number2 = parseInt(req.query.num2);
	let sum = myCalc.add(number1, number2);
	console.log(sum);
	res.status(200);
	res.json({ result: sum });
};

const minusNumbers = (req, res) => {
	let number1 = parseInt(req.query.num1);
	let number2 = parseInt(req.query.num2);
	let minus = myCalc.minus(number1, number2);
	console.log(minus);
	res.status(200);
	res.json({ result: minus });
};

const multiplyNumbers = (req, res) => {
	let number1 = parseInt(req.query.num1);
	let number2 = parseInt(req.query.num2);
	let multiply = myCalc.multiply(number1, number2);
	console.log(multiply);
	res.status(200);
	res.json({ result: multiply });
};

const divideNumbers = (req, res) => {
	let number1 = parseInt(req.query.num1);
	let number2 = parseInt(req.query.num2);
	if (number2 == 0) {
		console.log(`Divide: Division by zero error!`);
		res.status(400).json({ error: "Cannot divide by zero!" });
	} else {
		let divide = myCalc.divide(number1, number2);
		console.log(divide);
		res.status(200);
		res.json({ result: divide });
	}
};

//Lab exercise 7
let myCalc1 = new Calculator();
let myCalc2 = new Calculator();
myCalc1.add(3, 4);
myCalc1.add(4, 2);
myCalc2.add(5, 4);

module.exports = {
	addNumbers,
	minusNumbers,
	multiplyNumbers,
	divideNumbers,
};

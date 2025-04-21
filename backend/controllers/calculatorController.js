const Calculator = require("../libraries/calculator");

let myCalc = new Calculator();

// Lab exercise 5
const addNumbers = (num1, num2) => {
	return myCalc.add(num1, num2);
};

const minusNumbers = (num1, num2) => {
	return myCalc.minus(num1, num2);
};

const multiplyNumbers = (num1, num2) => {
	return myCalc.multiply(num1, num2);
};

const divideNumbers = (num1, num2) => {
	if (num2 === 0) {
		throw new Error("Cannot divide by zero!");
	}
	return myCalc.divide(num1, num2);
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

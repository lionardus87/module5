//Lab exercise 6

function add(a, b) {
	return a + b;
}

function minus(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === 0) throw new Error("Cannot divide by zero");
	return a / b;
}
module.exports = { add, minus, multiply, divide };

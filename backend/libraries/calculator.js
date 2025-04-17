const { randomUUID } = require("crypto");
const { logMsg } = require("./log");
class Calculator {
	constructor() {
		this.id = randomUUID();
	}

	#log = (value) => {
		const time = new Date().toLocaleString();
		console.log(`[Calculator :${this.id}] called at ${time}`);
	};

	add(num1, num2) {
		const value = num1 + num2;
		logMsg(this.id, `add(${num1}, ${num2})=${value}`);
		return value;
	}
	minus(num1, num2) {
		const value = num1 - num2;
		logMsg(this.id, `substract(${num1}, ${num2})=${value}`);
		return value;
	}

	multiply(num1, num2) {
		const value = num1 * num2;
		logMsg(this.id, `multiply(${num1}, ${num2})=${value}`);
		return value;
	}

	divide(num1, num2) {
		if (num2 === 0) {
			throw new Error("Cannot divide by zero");
		}
		const value = num1 / num2;
		logMsg(this.id, `divide(${num1}, ${num2})=${value}`);
		return value;
	}
}

module.exports = Calculator;

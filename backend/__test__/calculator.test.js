const { add, minus, multiply, divide } = require("./calculator");
describe("Calculator Operations", () => {
	test("add 3 + 5 to get 8", () => {
		expect(add(3, 5)).toBe(8);
	});

	test("subtract 10 - 4 to get 6", () => {
		expect(minus(10, 4)).toBe(6);
	});

	test("multiply 6 * 7 to get 42", () => {
		expect(multiply(6, 7)).toBe(42);
	});

	test("divide 20 / 5 to get 4", () => {
		expect(divide(20, 5)).toBe(4);
	});

	test("divide by zero should throw error", () => {
		expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
	});
});

function calculate() {
	let num1 = document.getElementById("num1").value;
	let num2 = document.getElementById("num2").value;
	let operation = document.getElementById("operation").value;

	fetch(
		`http://localhost:3001/calculator/${operation}?num1=${num1}&num2=${num2}`
	)
		.then((response) => response.json())
		.then((data) => {
			if (data.result !== undefined) {
				document.getElementById("result").innerText = data.result;
			} else if (data.error) {
				document.getElementById("result").innerText = data.error;
			}
		})
		.catch((error) => {
			document.getElementById("result").innerText = "Error: " + error;
		});
}

function axiosCalculate() {
	let num1 = document.getElementById("num1").value;
	let num2 = document.getElementById("num2").value;
	let operation = document.getElementById("operation").value;

	axios
		.get(`http://localhost:3001/calculator/${operation}`, {
			params: { num1: num1, num2: num2 },
		})
		.then((response) => {
			const data = response.data;
			if (data.result !== undefined) {
				document.getElementById("axiosResult").innerText = data.result;
			} else if (data.error) {
				document.getElementById("axiosResult").innerText = data.error;
			}
		})
		.catch((error) => {
			document.getElementById("axiosResult").innerText = "Error: " + error;
		});
}

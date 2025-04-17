const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
const extraRoutes = require("./routes/extraRoutes");

const storeRoutes = require("./routes/storeRoutes");

//Lab exercise 8
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.get("/test", (req, res) => {
	res.send("This is a test");
});

//Lab exercise 1
app.listen(port, () => {
	console.log(`Example app listening
at http://localhost:${port}`);
});
// app.listen(3002, () => {
// 	console.log(`Example app listening
// at http://localhost:3002`);
// });

app.use("/mytest", testRoutes);

//Lab exercise 2
app.use("/calculator", calculatorRoutes);

//Labexercise 3
app.use("./extra", extraRoutes);

//eCommerce Store
app.get("/products", storeRoutes);

const express = require("express");
const router = express.Router();

const { getProducts } = require("../controllers/storeControllers");
router.get("/products", async (req, res) => {
	try {
		const products = await getProducts();
		res.json(products);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch products" });
	}
});

module.exports = router;

const axios = require("axios");

const getProducts = async () => {
	try {
		const response = await axios.get("https://fakestoreapi.com/products");
		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw new Error("Unable to fetch products from external API");
	}
};
module.exports = {
	getProducts,
};

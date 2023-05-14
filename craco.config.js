const path = require("path");

module.exports = {
	webpack: {
		baseUrl: "./",
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
	},
};

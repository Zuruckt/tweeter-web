/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				concrete: {
					50: "#f8f8f8",
					100: "#f2f2f2",
					200: "#e4e4e4",
					300: "#d1d1d1",
					400: "#b4b4b4",
					500: "#9a9a9a",
					600: "#818181",
					700: "#6a6a6a",
					800: "#5a5a5a",
					900: "#4e4e4e",
					950: "#282828",
				},
			},
			fontFamily: {
				"noto-sans": ["Noto Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};

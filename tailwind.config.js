const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			purple: {
				50: "#f6e7fe",
				100: "#e3b7fb",
				200: "#d087f8",
				300: "#bd56f5",
				400: "#aa26f2",
				500: "#910dd9",
				600: "#700aa9",
				700: "#500778",
				800: "#300448",
				900: "#100118",
			},
			orange: {
				50: "#feefe6",
				100: "#fdceb4",
				200: "#fcad82",
				300: "#fb8c50",
				400: "#fa6b1e",
				500: "#e15105",
				600: "#af3f04",
				700: "#7d2d03",
				800: "#4b1b02",
				900: "#190901",
			},
			pink: {
				50: "#fee7f0",
				100: "#fcb6d1",
				200: "#f985b2",
				300: "#f75493",
				400: "#f52475",
				500: "#db0a5b",
				600: "#ab0847",
				700: "#7a0633",
				800: "#49031e",
				900: "#18010a",
			},
			yellow: {
				50: "#fff6e5",
				100: "#ffe3b3",
				200: "#ffd180",
				300: "#ffbf4d",
				400: "#ffac1a",
				500: "#e69300",
				600: "#b37200",
				700: "#805200",
				800: "#4d3100",
				900: "#1a1000",
			},
			blue: {
				50: "#e5feff",
				100: "#b3fbff",
				200: "#80f9ff",
				300: "#4df6ff",
				400: "#1af4ff",
				500: "#00dae6",
				600: "#00aab3",
				700: "#007980",
				800: "#00494d",
				900: "#00181a",
			},
			gray: colors.slate,
			white: colors.white,
			black: colors.black,
		},
		fontFamily: {
			sans: ["Source Sans Pro", "calibri", "sans-serif"],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};

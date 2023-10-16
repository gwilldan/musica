/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dimWhite: "rgba(255, 255, 255, 0.25)",
				mainWhite: "rgb(255, 255, 255)",
				mainDark: "rgb(29, 33, 35)",
				mainYellow: "rgb(250, 205, 102)",
				mainGreen: "rgb(96, 158, 175)",
			},
		},
	},
	plugins: [],
};

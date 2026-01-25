/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js,jsx,ts,tsx}",
		"./index.html"
	],
    theme: {
    	extend: {
			colors: {
				primary: "#3B82F6",
				secondary: "#3B82F6",
				surface_light: "#F8FAFC",
				surface_dark: "#0F172A",
				border: "#E2E8F0",
				accent: "#10B981"
			}
		},
  	},
  	plugins: [],
}
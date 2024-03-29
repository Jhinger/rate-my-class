/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#A8C7F5",
				primaryAccent: "#82B3FD",
				secondary: "#242131",
				tertiary: "#F3B044",
				tertiaryComplement: "#0247F9",
				tertiaryLight: "#EFD2F9",
				tertiaryAccent: "#B5C2F5",
				lightGray: "#D9D9D9",
			},
			fontSize: {
				xxxs: "0.62rem",
				xxs: "0.7rem",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
			},
			letterSpacing: {
				tightest: "-.075em",
			},
			animation: {
				fadeDown: "fadeDown 0.2s ease-in-out",
				fadeDownDelay: "fadeDown 0.35s ease-in-out",
				gradient: "gradient 10s ease-in-out infinite",
				scroll: "scroll 40s linear infinite",
			},
			boxShadow: {
				'cardBlue': '0 0 40px 0px rgba(168, 199, 245, 0.25)',
				'searchBlue': '0 0 40px 0px rgba(168, 199, 245, 0.2)',
				'chartBlue': '0 0 20px 0px rgba(168, 199, 245, 0.15)',
				'buttonOrange': '0 0 15px 0px rgba(243, 176, 68, 0.25)',
				'cardOrange': '0 0 25px 0 rgba(243, 176, 68, 0.25)',
				'searchOrange': '0 0 25px 0 rgba(243, 176, 68, 0.25)',
			},
			keyframes: {
				fadeDown: {
					"0%": {
						opacity: 0,
						transform: "translateY(-2px)",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)",
					},
				},
				gradient: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
				},
				scroll: {
					"0%": {
						transform: "translateX(0)",
					},
					"100%": {
						transform: "translateX(calc(-250px * 7))",
					},
				},
			},
		},
	},
	plugins: [],
};

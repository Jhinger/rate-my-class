export const metadata = {
	title: "RateMyClass - About",
	description:
		"Students helping students make informed decisions regarding their class schedule.",
	twitter: {
		card: "summary_large_image",
		title: "RateMyClass",
		description:
			"Students helping students make informed decisions regarding their class schedule.",
		creator: "",
	},
	openGraph: {
		title: "RateMyClass",
		description:
			"Students helping students make informed decisions regarding their class schedule.",
		url: "https://ratemyclass.io",
		locale: "en-US",
		type: "website",
	},
	metadataBase: process.env.NEXTAUTH_URL,
	themeColor: "#242131",
};

const AboutPage = () => {
	return <div className="text-white">About Page.</div>;
};

export default AboutPage;

import Navbar from "@/components/Navbar/";
import Footer from "@/components/Footer";
import { inter } from "./fonts";
import "./globals.css";
import { AlertProvider } from "@/context/AlertContext";
import Alert from "@/components/Alert";

export const metadata = {
	title: "RateMyClass",
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

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} relative flex min-h-screen flex-col`}
			>
				<AlertProvider>
					{/* @ts-expect-error Server Component */}
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
					<Alert />
				</AlertProvider>
			</body>
		</html>
	);
}

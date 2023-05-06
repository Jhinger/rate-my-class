import Navbar from "@/components/Navbar/";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { inter } from "./fonts";
import './globals.css';
import LoadingSpinner from "@/components/LoadingSpinner";

export const metadata = {
    title: "RateMyClass",
    description: "Students helping students make informed decisions regarding their class schedule.",
    twitter: {
        card: "summary_large_image",
        title: "RateMyClass",
        description: "Students helping students make informed decisions regarding their class schedule.",
        creator: ""
    },
    openGraph: {
        title: "RateMyClass",
        description: "Students helping students make informed decisions regarding their class schedule.",
        url: "https://ratemyclass.io",
        locale: "en-US",
        type: 'website'
    },
    metadataBase: process.env.NEXTAUTH_URL,
    themeColor: "#242131"
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className={inter.variable}>
                {/* @ts-expect-error Server Component */}
                <Navbar />
                <main>
                    { children }
                </main>
                <Footer />
            </body>
        </html>
    )
}
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	distDir: "build",
	images: {
		domains: [
			"ratemyclass.io",
			"storage.googleapis.com",
			"lh1.googleusercontent.com",
			"lh2.googleusercontent.com",
			"lh3.googleusercontent.com",
			"lh4.googleusercontent.com",
			"lh5.googleusercontent.com",
			"lh6.googleusercontent.com",
		],
		minimumCacheTTL: 600,
	},
	experimental: {
		serverActions: true,
	},
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);

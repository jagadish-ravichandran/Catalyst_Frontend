/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "r2imghtlak.mmtcdn.com",
				port: "",
				pathname: "/**",
			},

			{
				protocol: "https",
				hostname: "r1imghtlak.mmtcdn.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.marketing91.com",
				port: "",
				pathname: "/**",
			},

			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/**",
			},

			{
				protocol: "https",
				hostname: "santorinidave.com",
				port: "",
				pathname: "/**",
			},

			{
				protocol: "https",
				hostname: "www.kindpng.com",
				port: "",
				pathname: "/**",
			},

			{
				protocol: "https",
				hostname: "imgcld.yatra.com",
				port: "",
				pathname: "/**",
			},

			{
				protocol: "https",
				hostname: "cf.bstatic.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;

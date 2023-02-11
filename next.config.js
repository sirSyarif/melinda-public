/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	webpack: (config) => {
		config.resolve.preferRelative = true;
		return config;
	},
};

module.exports = nextConfig;


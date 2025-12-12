import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			new URL('https://res.cloudinary.com/dmmn0gqaf/image/upload/**'),
		],
	},
};

export default nextConfig;

import {config as dotenv} from 'dotenv';

// @ts-check

/** @type {import("next").NextConfig} */
const config = {
	env: dotenv().parsed,

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.scdn.co',
				pathname: '/image/*',
			},

			{
				protocol: 'https',
				hostname: 'snapshot.apple-mapkit.com',
				pathname: '/api/v1/snapshot',
			},
		],
	},

	async redirects() {
		return [
			{
				source: '/linkedin',
				destination: 'https://www.linkedin.com/in/hanwt/',
				permanent: true,
			},
			{
				source: '/labs/graphics/bouncing',
				destination: '/labs/graphics/bouncing.html',
				permanent: true,
			},
			{
				source: '/labs/graphics/2DTransforms',
				destination: '/labs/graphics/2DTransforms.html',
				permanent: true,
			},
			{
				source: '/labs/graphics/SubroutineHierarchy',
				destination: '/labs/graphics/SubroutineHierarchy.html',
				permanent: true,
			},
			{
				source: '/labs/graphics/3DModels',
				destination: '/labs/graphics/3DModels.html',
				permanent: true,
			},
			{
				source: '/labs/graphics/PolyhedraModels',
				destination: '/labs/graphics/Polyhedra.html',
				permanent: true,
			},
			{
				source: '/labs/graphics/Carousel',
				destination: '/labs/graphics/Carousel/index.html',
				permanent: true,
			}
		];
	},
};

export default config;

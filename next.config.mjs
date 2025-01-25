import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.glimere.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost:4000',
        port: '',
        pathname: '**',
      },
    ],
  },
  swcMinify: true, // Use SWC for minification
  webpack: (config) => {
    // Handle .glb and .gltf files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/models/',
            outputPath: 'static/models/',
            name: '[name].[ext]',
          },
        },
      ],
    });

    // Handle .svg files
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.js$/, // Apply the fix for large SVGs
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    );

    // Safely modify exclude for large files in Babel loader
    config.module.rules.forEach((rule) => {
      if (rule.loader?.includes('babel-loader')) {
        // Ensure exclude is an array
        rule.exclude = Array.isArray(rule.exclude)
          ? rule.exclude
          : rule.exclude
          ? [rule.exclude]
          : [];
        rule.exclude.push(/node_modules\/three\/examples/);
      }
    });

    return config;
  },
  transpilePackages: ['three/examples/jsm'], // Transpile only specific modules
};

export default nextConfig;

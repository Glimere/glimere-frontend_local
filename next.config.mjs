/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.glimere.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.glimere.comundefined",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "glimere-backend-local.onrender.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost:4000",
        port: "",
        pathname: "**",
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
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/models/",
            outputPath: "static/models/",
            name: "[name].[ext]",
          },
        },
      ],
    });

    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    // Handle .svg files
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            compact: false,
          },
        },
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    // Safely modify exclude for large files in Babel loader
    config.module.rules.forEach((rule) => {
      if (rule.loader?.includes("babel-loader")) {
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
  transpilePackages: ["three/examples/jsm"], // Transpile only specific modules
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const oldHost = "mahalaxmi-beauty-parlour.vercel.app";
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: oldHost }],
        destination: "https://mahalaxmi.beauty/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

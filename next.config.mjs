import analyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/",
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "dwrp.github.io",
      },
    ],
  },
  trailingSlash: true,
  output: "export",
};

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withNextIntl(nextConfig));

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/work/rethink-ai-shapes",
        destination: "/tool-properties-panel.html",
        permanent: false,
      },
      {
        source: "/work/rethink-ai-shapes/",
        destination: "/tool-properties-panel.html",
        permanent: false,
      },
      {
        source: "/work/gesture-based-authentication",
        destination: "/gesture-authentication.html",
        permanent: false,
      },
      {
        source: "/work/gesture-based-authentication/",
        destination: "/gesture-authentication.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "*s3.eu-central-1.amazonaws.com"
    }],
    unoptimized: true
  },
  compress: false
}

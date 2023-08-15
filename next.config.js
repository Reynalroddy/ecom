/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb+srv://dbtask_user:Reynalroddy2021--@nodetask.mlz0q.mongodb.net/next-ecom?retryWrites=true&w=majority",
    API_URL:"http://localhost:3000/api",
    NEXTAUTH_SECRET:"reynalnext()",
    CLOUD_NAME:"joerey",
    CLOUDINARY_API_KEY:"659588299342297",
    CLOUDINARY_API_SECRET:"vC6TlrGsyRS4GoLCuR_TRSe-Gns"
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'images.pexels.com',
    //   },
    // ],
    // minimumCacheTTL:1500000
    domains:['images.pexels.com','res.cloudinary.com']
  },
}


module.exports = nextConfig

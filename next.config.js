/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 确保静态输出
  images: {
    unoptimized: true,  // Cloudflare Pages 需要这个设置
    loader: 'custom',
    loaderFile: './image-loader.js',
  }
}

module.exports = nextConfig 
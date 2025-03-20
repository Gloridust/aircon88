/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // 为了静态导出，禁用图片优化
  },
  trailingSlash: true,  // 为每个页面生成 index.html
}

module.exports = nextConfig 
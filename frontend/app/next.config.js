const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')(true)
const withSass = require('@zeit/next-sass')

module.exports = withBundleAnalyzer(withSass({
  cssModules: true,
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src')
    return config
  }
}))

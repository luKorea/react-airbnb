const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = pathName => path.resolve(__dirname, pathName)

module.exports = {
  // less 配置
  plugins: [{
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            '@primary-color': '#1DA57A'
          },
          javascriptEnabled: true,
        },
      },
    },
  }, ],
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils')
    },
    // 配置打包文件夹名称, 静态文件路径
    configure: (webpackConfig, {
      paths
    }) => {
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'),
        // publicPath: process.env.NODE_ENV === 'production' ? '/react-airbnb' : '/'
      }
      return webpackConfig;
    }
  },
  // 配置代理
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       pathRewrite: {
  //          "^/api": ''
  //       }
  //     }
  //   },
  // },
}
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = env => {
  if (!env) env = {}
  return {
    entry: ['./styles/hotcss/hotcss.js', './views/main.js'],
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {  
      contentBase: './dist',
      hot: true,
      compress: true,
      host:'localhost',
      port: 9000,
      clientLogLevel: "none",
      quiet: true
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options:{ // 使用vue中的css module
            modules: true,
            localIdentName: '[local]_[hash:base64:8]'
          }
        },
        {
          test:/\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test:/\.css%$/,
          loader: ['vue-style-loader','css-loader']
        }
      ]
    },
    resolve: {
      //用于查找模块的目录，引用的时候可以省略的后缀名
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new cleanWebpackPlugin(['/dist']),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.UglifyJsPlugin() // 压缩js
    ]
  }

  if(env.production){
    module.exports.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new ExtractTextPlugin("style.css", {ignoreOrder: true})
    )
  }
}
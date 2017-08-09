const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development",
})


module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'whatwg-fetch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: 'app.[hash].js',
  },
  devtool: 'eval',
  module: {
    rules:
    [{
      test: /\.js$/,
      include: path.resolve(process.cwd(), 'src'),
      loader: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })

    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[hash:base64:8]',
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loader: ['style-loader', 'css-loader'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loaders: [
        'file-loader',
        'image-webpack-loader?{progressive:true, pngquant:{quality: "65-90", speed: 4}}',
      ],
    }],
  },


  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "Tether": 'tether',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      debug: true,
      options: {
        postcss: () => [precss, autoprefixer],
        context: path.join(__dirname, 'src'),
        output: {
          path: path.join(__dirname, 'dist'),
        },
      },
    }),
  ],
}

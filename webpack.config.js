const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        // All JavaScript files will be transform with Babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        // Preprocess our own .css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'root': path.resolve(__dirname, './'), // prettier-ignore
      'pages': path.resolve(__dirname, 'src/pages') // prettier-ignore
    },
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/build/',
    hot: true,
    stats: {
      // Handle logs from webpack-dev-server (WDS)
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errorDetails: false,
      publicPath: false,
      entrypoints: false,
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

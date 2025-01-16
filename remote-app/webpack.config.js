const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // Ensure unique filenames for each build
    chunkFilename: '[name].[contenthash].js', // For dynamic imports and code splitting
    publicPath: 'auto', // Ensure this matches the remote app's URL
  },
  devtool: 'source-map', // Useful for debugging and better error handling
  optimization: {
    splitChunks: false,
},
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Resolving file extensions
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    historyApiFallback: true,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for HTML generation
    }),
    new ModuleFederationPlugin({
      name: 'remoteApp', // Unique name for your remote app
      filename: 'remoteEntry.js', // Entry file name for the remote module
      exposes: {
        './Button': './src/Button', // Expose your component(s) here
        './PrimarySearchAppBar':'./src/Header/Navbar',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '^19.0.0',
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^19.0.0',
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

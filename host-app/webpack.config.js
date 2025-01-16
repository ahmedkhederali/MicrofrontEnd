// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container; // Import ModuleFederationPlugin

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3000/", // Host app base URL
  },
  mode: "development",
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "host", // Name of the host app
      filename: "remoteEntry.js", // Entry file name for the host app
      remotes: {
        remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js", // Remote app exposed URL
        remoteAppProduct: "remoteAppProduct@http://localhost:3002/remoteEntry.js", // Remote app exposed URL
      },
      shared: {
        react: {
          singleton: true,
          eager: true, // Allow eager consumption

          requiredVersion: "^19.0.0", // Adjust to match your React version
        },
        "react-dom": {
          singleton: true,
          eager: true, // Allow eager consumption

          requiredVersion: "^19.0.0", // Adjust to match your React-DOM version
        },
      },
    }),

  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ["style-loader", "css-loader"], // Use these loaders
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // Webpack Module Federation Plugin configuration
  experiments: {
    topLevelAwait: true,
    
  },
};

const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "auto"
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true 
  },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/, // Apply babel-loader to .js and .jsx files
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
          // Add other loaders for CSS, images, etc., as needed
        ],
      },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./dist/index.html",
    }),
],
};


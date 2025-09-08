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
  // optimization: {
  //   minimize: false,
  //   runtimeChunk: false,
  //   innerGraph: false,
  // },
  // output: {
  //   publicPath: "auto",
  //   uniqueName: "host"

  // },
  plugins: [
    new ModuleFederationPlugin({
        name: "host",
        remotes: {
            content: "content@http://localhost:8080/remoteEntry.js", // The remote name and URL
        },
        shared: {
            "react": { singleton: true, requiredVersion: deps.react},
            "react-dom": { singleton: true, requiredVersion: deps["react-dom"]},
            // ... other shared dependencies (must match the remote's shared config)
        },
    }),
    new HtmlWebpackPlugin({
        template: "./dist/index.html",
    }),
],
            // externals: {
            //     react: 'React', // Assumes React is available globally as 'React'
            //     'react-dom': 'ReactDOM' // If using ReactDOM as well
            // }
};


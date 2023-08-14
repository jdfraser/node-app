const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(_env, argv) {

  return {
    mode: 'development',
    entry: "./src/index.js",
    cache: false,
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Node Chat',
        template: 'src/index.html'
      }),
    ],
    module: {
        rules: [
            {
              test: /\.(?:js|mjs|cjs)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                  ]
                }
              }
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
            }
        ]
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist")
      },
      compress: true,
      port: 3000,
      proxy: {
        '/api': 'http://localhost:4000',
        '/socket.io': 'http://localhost:4000'
      }
    }
  };
};
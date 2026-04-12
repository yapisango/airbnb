const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
  static: path.resolve(__dirname, "public"),
  port: 3000,
  open: true,
  watchFiles: ["src/**/*"],
},

watchOptions: {
  ignored: /node_modules|dist/,
},

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],

  mode: process.env.NODE_ENV || "development"
};




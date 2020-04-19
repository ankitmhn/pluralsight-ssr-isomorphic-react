import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "babel-regenerator-runtime",
    path.resolve(__dirname, "src/"),
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "development",
        WEBPACK: true,
      },
    }),
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        use: {
          loader: "babel-loader",
        },
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
};

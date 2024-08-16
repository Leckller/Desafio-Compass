const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Regra para imagens
        type: "asset/resource",  // Utiliza o asset modules do Webpack 5
      },
      {
        test: /\.svg$/,
        include: /.*_icons\.svg/,
        use: [
          { loader: 'svg-sprite-loader', options: { publicPath: '' } },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
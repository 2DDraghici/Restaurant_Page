const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    food_listing: "./src/food_listing.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

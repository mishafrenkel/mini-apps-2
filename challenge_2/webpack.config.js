const path = require('path');
const SRC_DIR = path.join(__dirname, "/client");
const DIST_DIR = path.join(__dirname, "/public");

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      }
    ],
  }
};
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html'
});
module.exports = {
  entry: __dirname + '/public/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },

  mode: 'development',
  output: {
    path: __dirname + '/dist/public',
    filename: 'index.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
  },
  plugins: [HTMLWebpackPluginConfig]
};

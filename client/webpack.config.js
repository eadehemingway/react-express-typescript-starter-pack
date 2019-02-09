const HtmlWebpackPlugin = require('html-webpack-plugin');

// we only need to do this config of the HTMLplugin because we have our own template html file.
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html'
});

module.exports = {
  // __dirname refers to the location of the current file, then it says the entry point is the index.tsx file
  // the entry point is this file because this is the one typescript file on the front end where every other file is loaded into
  entry: __dirname + '/public/index.tsx',
  output: {
    path: __dirname + '/dist/public',
    // the filename :'index.bundle.js' will be the name of the file that all the compiled code gets spat into,
    // it will also be the name that the script tag links to in the index.html file in the dist folder
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
  },
  plugins: [HTMLWebpackPluginConfig]
};

const path = require('path')

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre', // check files before modified  by other loaders
        test: /(\.js$) | (\.vue$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: 'css-loader',
          'scss': 'css-loader|sass-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // end result of web page included in distribution folder
    publicPath: '/',
    filename: 'assets/js/[name].js' //  name is going to be app.js here from the entry above on line 8
  }
}

//  dist folder is what will eventuall be deployed
// all files are required for development
module.exports = config

var path = require('path')
var webpack = require('webpack')
var packageJSON = require('./package.json')


module.exports = {
  entry: './src/index.js',
  // Make all peerDependencies external by default. The only reason you would
  // not want to do this is if you were building a library for distribution
  // as a standalone file, rather than a module that will later be built
  // with a build tool like Webpack or Browserify
  //
  // For more information on when to use peerDependencies vs. dependencies,
  // please consult the README.
  externals: packageJSON.peerDependencies ? Object.keys(packageJSON.peerDependencies) : [],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'jql-tools',
    libraryTarget: 'umd',
  },
  module: {
    preLoaders: [{
      test: /\.(js|jql)$/,
      exclude: /node_modules|\.tmp|vendor/,
      loader: 'eslint-loader'
    }],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};

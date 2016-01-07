module.exports = {
  entry: './app/client.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }]
  }
};

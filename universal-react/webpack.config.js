module.exports = {
  entry: './client-render.js',
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

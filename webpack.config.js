var path = require('path');

module.exports = {
  entry: {
    client: 'src/client/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: 'public/bundles',
  },
  resolve: {
    root: [__dirname, path.join(__dirname, 'node_modules')]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react']
        }
      }, {
        test: /\.scss$/,
        loader: "style-loader!css-loader?modules&localIdentName=[local]__[hash:base64:5]!sass-loader?includePaths[]=" +
          encodeURIComponent(path.resolve(__dirname, "client/"))
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.gif$/,
        loader: 'url?limit=10000&mimetype=image/gif'
      }, {
        test: /\.jpg$/,
        loader: 'url?limit=10000&mimetype=image/jpg'
      }, {
        test: /\.png$/,
        loader: 'url?limit=10000&mimetype=image/png'
      }, {
        test: /\.woff$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2$/,
        loader: 'url?limit=10000&mimetype=application/font-woff2'
      }, {
        test: /\.ttf$/,
        loader: 'file?mimetype=application/vnd.ms-fontobject'
      }, {
        test: /\.eot$/,
        loader: 'file?mimetype=application/x-font-ttf'
      }, {
        test: /\.svg$/,
        loader: 'file?mimetype=image/svg+xml'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
};
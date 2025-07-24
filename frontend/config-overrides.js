const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "os": require.resolve("os-browserify"),
    "url": require.resolve("url"),
    "zlib": require.resolve("browserify-zlib"),
    "path": require.resolve("path-browserify"),
    "util": require.resolve("util"),
    "buffer": require.resolve("buffer"),
    "process": require.resolve("process/browser")
  };

  config.resolve.fallback = {
    ...config.resolve.fallback,
    ...fallback
  };

  config.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', '.json'];

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]);

  return config;
}; 
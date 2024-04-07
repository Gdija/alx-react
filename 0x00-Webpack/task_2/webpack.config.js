const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
        // Rule for CSS files
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|png|jp?g|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                bypassOnDebug: true,
                disable: true,
              },
            },
          ],
        },
      ],
    },
  };
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const Dotenv = require('dotenv-webpack');

    module.exports = {
      entry: './src/index.js',
      plugins: [
        new HtmlWebpackPlugin({
          title: 'MyApp',
        }),
        new Dotenv(),
      ],
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
      module: {
        rules: [
          {
            test: /.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: 'defaults',
                    useBuiltIns: "usage",
                    corejs: 3
                  }]
                ]
              }
            }
          }
        ],
      },
    };

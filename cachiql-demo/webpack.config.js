/* eslint-disable no-undef */
/* eslint-disable */
//import webpack from 'webpack';
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8080,
    publicPath: '/',
    inline: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: [/node_modules/, __dirname + './splash'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import ESLintPlugin from 'eslint-webpack-plugin';

// import { Configuration as WebpackConfiguration } from 'webpack';
// import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

// interface Configuration extends WebpackConfiguration {
//   devServer?: WebpackDevServerConfiguration;
// }

// const config: Configuration = {
//   mode: 'development',
//   output: {
//     publicPath: '/'
//   },
//   entry: './src/client/index.tsx',
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/i,
//         exclude: [/node_modules/, __dirname + './splash'],
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//               '@babel/preset-typescript'
//             ]
//           }
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js']
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/client/index.html',
//       favicon: './src/client/img/favicon.svg'
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//     new ForkTsCheckerWebpackPlugin({
//       async: false,
//       typescript: {
//         configFile: './src/client/tsconfig.json'
//       }
//     }),
//     new ESLintPlugin({
//       extensions: ['js', 'jsx', 'ts', 'tsx']
//     })
//   ],
//   devtool: 'inline-source-map',
//   devServer: {
//     proxy: {
//       '/': 'http://localhost:3000'
//     },
//     contentBase: path.join(__dirname, 'build'),
//     historyApiFallback: true,
//     port: 8080,
//     open: false,
//     hot: true
//   }
// };

// export default config;

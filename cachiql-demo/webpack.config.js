const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');


module.exports = {
  entry: ['@babel/polyfill', './src/client/index.tsx'],
  mode: 'production',
  devtool: 'eval-source-map',
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
      },
      '/graphql': {
        target: 'http://localhost:3000'
      },
      '/counter': {
        target: 'http://localhost:3000'
      },
      '/assets': {
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
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(gif|png|jpeg|jpg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
              webp: {
                quality: 75,
              }
            }
          }
        ]
      },
      {
        test: /\.[sac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      inject: true,
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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

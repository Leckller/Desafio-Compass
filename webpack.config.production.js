import { join, resolve as _resolve } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const mode = 'production';
export const entry = './src/app.ts';
export const devServer = {
  static: [
    {
      directory: join(__dirname),
    },
  ],
};
export const output = {
  filename: 'bundle.js',
  path: _resolve(__dirname, 'dist'),
  publicPath: '/dist/',
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i, // Regra para imagens
      type: 'asset/resource', // Utiliza o asset modules do Webpack 5
    },
  ],
};
export const resolve = {
  extensions: ['.ts', '.js'],
};
export const plugins = [new CleanWebpackPlugin()];

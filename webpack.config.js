const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',

  devServer: {
    contentBase: './dist',
    port: 8080,
    liveReload: true,
    historyApiFallback: true,

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/html/", "index.html"),
    }),
  ],
  entry: {
    path: path.join(__dirname, "/src/scripts/", "index.tsx")
  },
  output: {
    filename: '[name].js',
    assetModuleFilename: 'images/.[name][ext]',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(scss|css|sass)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      features: path.resolve(__dirname, 'src/script/features'),
      assets: path.resolve(__dirname, 'src/assets'),
      themes: path.resolve(__dirname, 'src/script/app/styles/themes'),
      src: path.resolve(__dirname, 'src'),
    },
  },

};
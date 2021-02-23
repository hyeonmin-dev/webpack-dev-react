const port = process.env.PORT || 3000;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 현재 환경은 개발 환경 ( != production )
  entry: './src/index.js', // 애플리케이션 진입점
  output: { // 번들된 파일 저장 경로
    filename: 'bundle.[hash].js' // 4
  },  
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { 
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
	historyApiFallback: true,
  },
};
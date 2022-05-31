const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",
  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),      //상대경로가 아닌 절대경로 사용해야함 path: "dist" <- 상대경로
    // filename: "main.js",
    clean: true
  },
  module: {
    rules: [{
        test: /\.s?css$/, //.css로 끝나는 파일을 찾는 정규식   
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader"
        ] 
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [{
        from: "static"
      }]
    })
  ],
  devServer: {
    host: "localhost"
  }
}


// __dirname : 현재 파일이 있는 그 경로를 지칭
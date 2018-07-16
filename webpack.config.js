"use strict"

const {VueLoaderPlugin} = require("vue-loader")

module.exports = {
  mode: "development",
  entry:"./src/app.js",
  output:{
    path: __dirname + "/dist",
    filename:"build.js",
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  devServer:{
    port: 3000,
    noInfo: true,
    historyApiFallback: true,
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.esm.js"
    }
  }
}

const HtmlPlug = require('html-webpack-plugin')
const mode = process.env.NODE_ENV || 'development'
const repositoryName = 'github-pages-example'
const publicPath = mode === 'production' ? '/' + repositoryName + '/' : '/'

module.exports = {
  mode: mode,
  entry: [__dirname + '/src/index.tsx'],
  output: {
    filename: 'index.js',
    path: __dirname + '/docs',
    publicPath: publicPath
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelCore: 'babel-core'
        }
      }
    ]
  },
  plugins: [
    new HtmlPlug({
      template: 'src/index.html'
    })
  ]
}

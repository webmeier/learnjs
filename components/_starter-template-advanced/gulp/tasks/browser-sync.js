const gulp = require('gulp')
const webpack = require('webpack')
const gulpConfig = require('../config')
const config = require('../webpack/webpack.config')
const browserSync = require('browser-sync')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const compiler = webpack(config)
const devMiddlewareOptions = {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}

const hotMiddlewareOptions = {reload: true}

gulp.task('broswerSync', _ => {
  return browserSync({
    open: false,
    server: {
      baseDir: gulpConfig.dest
    },
    middleware: [
      webpackDevMiddleware(compiler, devMiddlewareOptions),
      webpackHotMiddleware(compiler, hotMiddlewareOptions)
    ],
    files: [`${gulpConfig.dest}/**/*.html`]
  })
})

const gulp = require('gulp')
const browserSync = require('browser-sync')
const config = require('../config')

const reload = browserSync.reload

// Watch for file changes
gulp.task('watch', function () {
  // Watch assets
  gulp.watch('src/scss/**/*.scss', ['sass'])
  gulp.watch('src/images/**/*', ['images'])
  gulp.watch('src/**/*.html', ['html'])
})

// Slow watch tasks
gulp.task('site-watch', ['regenerateSite'], reload)

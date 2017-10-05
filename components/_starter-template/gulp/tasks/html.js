const gulp = require('gulp')
const config = require('../config')

gulp.task('html', _ => {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest(config.dest))
})

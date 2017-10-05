const gulp = require('gulp')
const size = require('gulp-size')

gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dev/images'))
    .pipe(size({'title': 'images'}))
})

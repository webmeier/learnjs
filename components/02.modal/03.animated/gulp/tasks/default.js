const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('default', (cb) => {
  runSequence(
    ['clean'],
    ['images', 'html', 'sass'],
    ['watch', 'broswerSync'],
    cb)
})

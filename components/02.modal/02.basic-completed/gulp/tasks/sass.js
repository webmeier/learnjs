const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')
const config = require('../config')
const plumber = require('../custom_modules/plumber')
const sass = require('gulp-sass')
const size = require('gulp-size')
const sourcemaps = require('gulp-sourcemaps')

const src = config.src + '/scss/**/*.{scss,sass}'
const dest = config.dest + '/css'
const sassOpts = { includePaths: ['./node_modules'] }
const autoprefixerOpts = {
  browsers: ['last 2 versions'],
  grid: false
}

gulp.task('sass', () => {
  return gulp.src(src)
    .pipe(plumber('Error Running Sass'))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOpts))
    .pipe(autoprefixer(autoprefixerOpts))
    .pipe(sourcemaps.write())
    .pipe(size({'title': 'styles'}))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({stream: true}))
})

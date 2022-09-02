const connect = require('gulp-connect')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const GulpUglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const gulp = require('gulp')
gulp.task('html', (res) => {
  gulp.src('*.html').pipe(gulp.dest('dist')).pipe(connect.reload())
  res()
})
gulp.task('watch', (res) => {
  gulp.watch('*.html', gulp.parallel('html'))
  res()
})

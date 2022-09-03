const gulp = require('gulp')
const connect = require('gulp-connect')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const GulpUglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))

gulp.task('html', (res) => {
  gulp.src('*.html').pipe(gulp.dest('dist')).pipe(connect.reload())
  res()
})
gulp.task('watch', (res) => {
  gulp.watch('*.html', gulp.series('html'))
  gulp.watch('sass/*.scss', gulp.series('sass'))
  res()
})
gulp.task('sass', (res) => {
  gulp.src('sass/*.scss').pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write('./')).pipe(gulp.dest('dist/css')).pipe(connect.reload())
  res()
})
gulp.task('server', (res) => {
  connect.server({
    root: 'dist',
    livereload: true,
  })
  res()
})
gulp.task('default', gulp.series('server', 'watch'))

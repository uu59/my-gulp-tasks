var gulp = require('gulp');
var gulpif = require('gulp-if');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config');
var plumber = require("gulp-plumber");

gulp.task('stylus', function () {
  gulp.src(config.stylus.src)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(autoprefixer(config.stylus.autoprefixer))
    .pipe(gulp.dest(config.stylus.dest))
  ;
});

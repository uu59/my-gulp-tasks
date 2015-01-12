var gulp = require('gulp');
var jade = require("gulp-jade");
var config = require('../config');
var plumber = require("gulp-plumber");

gulp.task('jade', function () {
  gulp.src(config.jade.src)
    .pipe(plumber())
    .pipe(jade(config.jade))
    .pipe(gulp.dest(config.jade.dest))
  ;
});


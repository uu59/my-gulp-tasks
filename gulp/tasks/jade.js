var gulp = require('gulp');
var jade = require("gulp-jade");
var config = require('../config');

gulp.task('jade', function () {
  gulp.src(config.jade.src)
    .pipe(jade(config.jade))
    .pipe(gulp.dest(config.jade.dest))
  ;
});


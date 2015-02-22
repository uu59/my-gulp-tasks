// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var plumber = require("gulp-plumber");

var config = require('../config').browserify;

gulp.task('browserify', function() {
  var b = browserify(merge(config.bundleConfigs, {debug: false}));
  return bundleShared(b, "production");
});

gulp.task('watchify', function() {
  var opts = merge(config.bundleConfigs, watchify.args, {debug: true});
  console.log(opts);
  var b = watchify(browserify(opts));
  b.on('update', function(){
    bundleShared(b, "development");
  });
  b.on('log', function(msg){
    console.log(msg);
  });

  return bundleShared(b, "development");
});

function bundleShared(bundler, env) {
  bundler
    .transform('brfs')
    .transform(babelify.configure(config.transforms.babelify))
    ;

  var ret = bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(plumber())
    .pipe(source(config.bundleConfigs.outputName))
    .pipe(buffer())
    ;
  if(env === "development") {
    ret
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
      .pipe(sourcemaps.write()) // writes .map file
  }
  return ret
    .pipe(gulp.dest(config.bundleConfigs.destDir));
}


function merge() {
  var opts = {};
  Array.prototype.forEach.call(arguments, function(obj){
    Object.keys(obj).forEach(function(k){
      opts[k] = obj[k];
    });
  });
  return opts;
}

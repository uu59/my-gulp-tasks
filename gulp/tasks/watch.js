// https://github.com/greypants/gulp-starter/blob/master/gulp/tasks/watch.js
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp');
var config= require('../config');

gulp.task('watch', ['watchify'], function() {
  gulp.watch(config.jade.src,   ['jade']);
  gulp.watch(config.stylus.src,   ['stylus']);
  // gulp.watch(config.images.src, ['images']);
  // gulp.watch(config.markup.src, ['markup']);
});

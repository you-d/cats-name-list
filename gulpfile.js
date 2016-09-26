var path = require('path');
var gulp = require('gulp');
var gulpRename = require('gulp-rename');
var gulpWebpack = require('webpack-stream');

gulp.task('task-js', function() {
    // the gulp entry point is a dummy entry point because we're using entry points defined
    // in webpack.config.js.
    return gulp.src(path.join(__dirname, '/src/js/*.js'))
               .pipe( gulpWebpack(require(path.join(__dirname, '/webpack.config.js'))) )
               .pipe( gulpRename({suffix: '.bundle'}) )
               .pipe( gulp.dest(path.join(__dirname, '/public/')) );

});

/* All Set! */
gulp.task('default', ['task-js']);

'use strict';

var gulp        = require('gulp'),
    fs          = require('fs'),
    source      = require('vinyl-source-stream'),
    rename      = require('gulp-rename'),
    es          = require('event-stream'),
    path        = require('path'),
    less = require('gulp-less');
// minifyCss   = require('gulp-minify-css'),
// concat      = require('gulp-concat'),

/* SASS DIRECTORY */
var LESS_SRC = ['assets/less/**/**/*.less', 'app/**/*.less'];

/*
    CONCAT & MINIFY SASS
 */
gulp.task('concatMinify', ['concatMinify:less']);
gulp.task('concatMinify:less', function() {
gulp.src(LESS_SRC)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    // .pipe(minifyCss())
    // .pipe(concat('style.css'))
    // .pipe(rename({
    //     basename : 'style',
    //     extname : '.min.css'
    // }))
    .pipe(gulp.dest('./css/'))
});


/*
    Watchers
*/
gulp.task('watch', ['watch:less']);
gulp.task('watch:less', function () {
    gulp.watch(LESS_SRC, ['concatMinify:less']);
});


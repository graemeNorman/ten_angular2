'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sassGlob    = require('gulp-sass-glob');
    // minifyCss   = require('gulp-minify-css'),
    // concat      = require('gulp-concat'),
    // rename      = require('gulp-rename');

/*
    SASS DIRECTORY
 */
var SCSS_SRC = ['assets/scss/**/*.scss'];


/*
    CONCAT & MINIFY SASS
 */
gulp.task('concatMinify', ['concatMinify:sass']);
gulp.task('concatMinify:sass', function() {
gulp.src(SCSS_SRC)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
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
gulp.task('watch', ['watch:sass']);
gulp.task('watch:sass', function () {
    gulp.watch(SCSS_SRC, ['concatMinify:sass']);
});
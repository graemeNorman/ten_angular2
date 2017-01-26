'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sassglob    = require('gulp-sass-glob');
    // minifyCss   = require('gulp-minify-css'),
    // concat      = require('gulp-concat'),
    // rename      = require('gulp-rename');

/*
    SASS DIRECTORY
 */
var SCSS_SRC = ['assets/scss/**/**/*.scss', 'app/**/*.scss'];

/*
    CONCAT & MINIFY SASS
 */
gulp.task('concatMinify', ['concatMinify:sass']);
gulp.task('concatMinify:sass', function() {
gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(sassglob())
    // .pipe(minifyCss())
    // .pipe(concat('style.css'))
    // .pipe(rename({
    //     basename : 'style',
    //     extname : '.min.css'
    // }))
    .pipe(gulp.dest('./css/'))
});


var fs = require('fs');
var jsonSass = require('json-sass');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');

gulp.task('theme', function(themeList) {
    console.log(themeList)
    var l = ['ten', 'coutts'];
    for(var i=0; i<l.length; i++) {
        fs.createReadStream('app/data/'+l[i]+'/theme.json')
        .pipe(jsonSass({
          prefix: '$theme: ',
        }))
        .pipe(source('theme.json'))
        .pipe(rename('theme.scss'))
        .pipe(gulp.dest('./css/'+l[i]+'/'));
    }

});

var createThemeSass = function(jsonPath, theme) {
    fs.createReadStream(jsonPath)
        .pipe(jsonSass({
          prefix: '$theme: ',
        }))
        .pipe(source('theme.json'))
        .pipe(rename('theme.scss'))
        .pipe(gulp.dest('./css/'+theme+'/'));
}

/*
    Watchers
*/
gulp.task('watch', ['watch:sass']);
gulp.task('watch:sass', function () {
    gulp.watch(SCSS_SRC, ['concatMinify:sass']);
});

var es               = require('event-stream'),
    path             = require('path');

// make a simple 'stream' that prints the path of whatever file it gets into
var printFileNames = function(){

    return es.map(function(data, cb){
        console.log(data.path);

        cb(null, data);
    });
};

// make a stream that identifies if the given 'file' is a directory, and if so
// it pipelines it with the stream given
var forEachFolder = function(stream){

    return es.map(function(data, cb){

        if(data.isDirectory()){
            var pathToPass = data.path+'/theme.json';  // change it to *.js if you want only js files for example
            var themeName = path.basename(data.path);

            if(stream !== undefined){
                gulp.src([pathToPass])
                .pipe(stream());
                createThemeSass(pathToPass, themeName)
            }
        }

        cb(null, data);
    });
};


// let's make a dummy task to test our streams
gulp.task('dummy', function(){
    // load some folder with some subfolders inside
    gulp.src('app/**/themes/*')
    .pipe(forEachFolder(printFileNames));
    // we should see all the file paths printed in the terminal
});
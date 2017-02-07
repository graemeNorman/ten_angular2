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

gulp.task('test', function() {
gulp.src('app/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'))
});


/*
    CREATE THEME JSON LIST FROM FOLDERS AND FILES INSIDE SPECIFIED DIRECTORY
 */
gulp.task('theme', function(themeList) {
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
        .pipe(gulp.dest('./assets/scss/themes/'+theme+'/'));
}

/*
    Watchers
*/
gulp.task('watch', ['watch:sass']);
gulp.task('watch:sass', function () {
    gulp.watch(SCSS_SRC, ['concatMinify:sass']);
});


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
'use strict';

var gulp        = require('gulp'),
    fs          = require('fs'),
    source      = require('vinyl-source-stream'),
    rename      = require('gulp-rename'),
    es          = require('event-stream'),
    path = require('path'),
    less        = require('gulp-less'),
    util        = require('gulp-util'),
    gulpJson = require('gulp-json'),
    jsonCss = require('gulp-json-css'),
    jeditor = require("gulp-json-editor"),
    helpers = require("./helper");


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
    .pipe(gulp.dest('./css/'))
});

/*
    Watchers
*/
gulp.task('watch', ['watch:less']);
gulp.task('watch:less', function () {
    gulp.watch(LESS_SRC, ['concatMinify:less']);
});

// gulp.task('api', function () {
//     gulp.src('api.json')
//       .pipe(gulpJson())
//       .pipe(gulp.dest('app/config'));
// });
//
// gulp.task('test', function() {
//   return gulp
//     .src(['app/config/theme.json'])
//     .pipe(jsonCss({targetPre: 'less'}))
//     .pipe(gulp.dest('app/config/'));
// });
//
// gulp.task('prepareConfig', function() {
//     console.log(util.env.site);
//     console.log(helpers.test);
//     return gulp.src("api.json")
//       .pipe(jeditor(function(json) {
//         return json;
//       }))
//       .pipe(gulp.dest("./"));
// });


/*******************************************/

/*
 * Prepare JSON object with API endpoint to get the theme and setting
 */

gulp.task('prepareAPI', function(){
    var site = util.env.site;
    console.log('prepareAPI ',site);
    if (site) {
        return gulp.src("config/api.json")
          .pipe(jeditor(function(json) {
            json.theme = helpers.buildThemeApi(site);
            json.settings = helpers.buildSettingApi(site);
            return json;
          }))
          .pipe(gulp.dest("./config/"+site+"/"))
          .pipe(gulpJson())
          .pipe(gulp.dest("./config/"+site+"/"));
    }
})

/*
 * Request theme using API defined in theme.json file and save it as less file
 */

gulp.task('createLess', function() {
  var site = util.env.site;
  console.log('createLess ',site);
  if (site) {
    return gulp
        .src(['./config/'+site+'/theme.json'])
        .pipe(jsonCss({targetPre: 'less'}))
        .pipe(gulp.dest('assets/less/'));
  }

});


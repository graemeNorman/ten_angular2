'use strict';

var gulp        = require('gulp'),
    fs          = require('fs'),
    source      = require('vinyl-source-stream'),
    rename      = require('gulp-rename'),
    es          = require('event-stream'),
    path        = require('path'),
    less        = require('gulp-less'),
    util        = require('gulp-util'),
    gulpJson    = require('gulp-json'),
    jsonCss     = require('gulp-json-css'),
    jeditor     = require("gulp-json-editor"),
    helpers     = require("./helper"),
    clean       = require('gulp-clean'),
    runSequence = require('run-sequence');


/* LESS DIRECTORY */
var LESS_SRC = ['assets/less/**/**/*.less', 'app/**/*.less'];

/*
 * Compile less file
 */
gulp.task('less', function() {
    gulp.src(LESS_SRC)
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css/'))
});

/*
    Watchers
*/
gulp.task('watch:less', function () {
    gulp.watch(LESS_SRC, ['less']);
});


/*
 * Prepare JSON object with API endpoints to get the theme and setting
 */

gulp.task('prepareAPI', function(){
    var site = util.env.site;
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
    if (site) {
        return gulp
            .src(['./config/'+site+'/theme.json'])
            .pipe(jsonCss({targetPre: 'less'}))
            .pipe(gulp.dest('assets/less/'));
        }
});

/*
 * Delete configuration site directory
 */

gulp.task('cleanConfigDir', function() {
  var site = util.env.site;

  if (site && fs.exists('./config/'+site+'/')) {
    return gulp.src('./config/'+site+'/', {read: false})
        .pipe(clean());
  }

});


/*
 * Get configuration and theme object for a specific site
 * Usage: gulp make --site <name_site>
 * example: gulp make --site ten
 */

gulp.task('make', function(callback) {
  runSequence('cleanConfigDir', 'prepareAPI', 'createLess', callback);
});





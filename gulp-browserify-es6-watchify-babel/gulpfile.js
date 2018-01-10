/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify')
var babelify = require('babelify')

var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var merge = require('utils-merge')

var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var del = require('del');

/* nicer browserify errors */
var chalk = require('chalk')

// create a default task and just log a message
gulp.task('default', ['copyHtml', 'watchify'],function() {
  return gutil.log('Gulp is running!')
});

gulp.task('copyHtml', function(){
 gulp.src('src/*.html').pipe(gulp.dest('dest'));
});

// Without watchify
gulp.task('browserify', function () {
  var bundler = browserify('./src/js/app.js', { debug: true }).transform(babelify, {
    "presets": [
     "es2015",
     "react"
	],
    "plugins": []
  })

  return bundle_js(bundler)
})

gulp.task('watchify', function () {
  var args = merge({ cache: {}, packageCache: {} }, { debug: true })
  var bundler = watchify(browserify('./src/js/app.js', args)).transform(babelify, {
    "presets": [
     "es2015",
     "react"
	],
    "plugins": []
  })
  bundle_js(bundler)

  bundler.on('update', function () {
    bundle_js(bundler)
  })
})

gulp.task('build', ['copyHtml', 'browserify'], function(){
	return gutil.log('build done');
})



gulp.task('clean', function () {
  return del(['dest']);
});

function bundle_js(bundler) {
  return bundler.bundle()
    .on('error', map_error)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dest/beautifuljs'))
    .pipe(rename('app.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
      // capture sourcemaps from transforms
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest/js'))
}


function map_error(err) {
  if (err.fileName) {
    // regular error
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description))
  } else {
    // browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message))
  }

  this.end()
}


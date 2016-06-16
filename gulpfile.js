'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var tsProject = ts.createProject('tsconfig.json');
var paths = {
    build: 'build',
    src: 'src',
    sass: '**/*.scss',
    ts: '**/*.ts'
};
/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    del([paths.build], cb);
});
/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', function () {
    var tsResult = gulp.src(paths.src + '/' + paths.ts)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build));
});
/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task('resources', function () {
    gulp.src([paths.src + '/**/*', '!' + paths.ts])
        .pipe(gulp.dest(paths.build));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task('libs', function () {
    return gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**'
    ], { cwd: 'node_modules/**' }) /* Glob required here. */
        .pipe(gulp.dest(paths.build + '/lib'));
});
/**
 * Compile SCSS files
 */
gulp.task('sass', function () {
    gulp.src(paths.src + '/' + paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.build));
});
/**
 * Watch project canges.
 */
gulp.task('watch', function () {
    gulp.watch(paths.src + '/' + paths.sass, ['sass']);
    gulp.watch(paths.src + '/' + paths.ts, ['compile']);
});
/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources', 'libs', 'sass'], function () {
    console.log('Building the project ...');
});

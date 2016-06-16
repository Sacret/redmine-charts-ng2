"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var paths = {
    sass: './src/**/*.scss',
    css: './public/css',
    ts: './src/**/*.ts',
    js: './public/js'
};
gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.css));
});
gulp.task('ts', function () {
    var params = {
        noImplicitAny: true,
        out: 'app.js'
    };
    gulp.src(paths.ts)
        .pipe(ts(params))
        .pipe(gulp.dest(paths.js));
});
gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.ts, ['ts']);
});
gulp.task('build', ['sass', 'ts']);
gulp.task('default', ['build']);

'use strict';

import * as gulp from 'gulp';
import * as sass from 'gulp-sass';
import * as concat from 'gulp-concat';
import * as sourcemaps from 'gulp-sourcemaps';
import * as ts from 'gulp-typescript';
import * as uglify from 'gulp-uglify';
import * as tslint from 'gulp-tslint';
import * as del from 'del';

const tsProject = ts.createProject('tsconfig.json');

const paths = {
  build: 'build',
  src: 'src',
  node_modules: 'node_modules',
  sass: '**/*.scss',
  ts: '**/*.ts'
};

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
  del([paths.build], cb);
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', () => {
  const tsResult = gulp.src(paths.src + '/' + paths.ts)
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));
  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.build));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task('resources', () => {
  gulp.src([paths.src + '/**/*', '!' + paths.ts])
    .pipe(gulp.dest(paths.build))
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task('libs', () => {
  return gulp.src([
    'es6-shim/es6-shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'systemjs/dist/system.src.js',
    'reflect-metadata/Reflect.js',
    'rxjs/**',
    'zone.js/dist/**',
    '@angular/**',
    '@angular2-material/**'
  ], { cwd: 'node_modules/**' }) /* Glob required here. */
    .pipe(gulp.dest(paths.build + '/lib'));
});

/**
 * Compile SCSS files
 */
gulp.task('sass', () => {
  gulp.src(paths.src + '/' + paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.build));
});

/**
 * Bind CSS files
 */
gulp.task('css', () => {
  const files = [
    paths.build + '/app.css',
    paths.node_modules + '/ng2-material/ng2-material.css',
    paths.node_modules + '/ng2-material/font/font.css'
  ]
  gulp.src(files)
    .pipe(sourcemaps.init())
    .pipe(concat('app.css'))
    //.pipe(cssmin())
    //.on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.build + '/app'));
});

/**
 * Watch project canges.
 */
gulp.task('watch', () => {
  gulp.watch(paths.src + '/' + paths.sass, ['sass']);
  gulp.watch(paths.src + '/' + paths.ts, ['compile']);
  gulp.watch(paths.src + '/**/*.html', ['resources']);
});

/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources', 'libs', 'sass'], () => {
  console.log('Building the project ...')
});

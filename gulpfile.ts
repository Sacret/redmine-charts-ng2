import * as gulp from 'gulp';
import * as sass from 'gulp-sass';
import * as concat from 'gulp-concat';
import * as ts from 'gulp-typescript';
import * as uglify from 'gulp-uglify';

const paths = {
  sass: './src/**/*.scss',
  css: './public/css',
  ts: './src/**/*.ts',
  js: './public/js'
};

gulp.task('sass', () => {
  gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
});

gulp.task('ts', () => {
  const params = {
    noImplicitAny: true,
    out: 'app.js'
  };
  gulp.src(paths.ts)
    .pipe(ts(params))
    .pipe(gulp.dest(paths.js));
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.ts, ['ts']);
});

gulp.task('build', ['sass', 'ts']);

gulp.task('default', ['build']);

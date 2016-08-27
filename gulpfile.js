const gulp = require('gulp');
const mocha = require('gulp-mocha');
const bump = require('gulp-bump');

gulp.task('default', () => {
  gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
    }));
});
// Patch bump
gulp.task('bump', () => {
  gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

// Minor bump
// Major bump

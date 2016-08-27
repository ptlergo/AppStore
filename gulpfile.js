const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () => {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
    }));
});

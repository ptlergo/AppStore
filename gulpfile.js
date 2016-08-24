const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;

gulp.task('pick', () => {
  console.log('user entered/', argv.major);
});


var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');


gulp.task('release', function () {

  return gulp.src(['./**/*', '!node_modules/**/*','!node_modules'])
    .pipe(ghPages({
      branch: 'releases',
      force: true
    }))
});

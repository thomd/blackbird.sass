var gulp         = require('gulp');
var plumber      = require('gulp-plumber');       // prevent pipe breaking caused by errors from gulp plugins
var sass         = require('gulp-ruby-sass');     // compile sass to CSS with ruby sass
var autoprefixer = require('gulp-autoprefixer');  // parse css and add vendor prefixes to css rules


var config = {
  sass: {
    src: 'demo/*.{sass,scss}',
    dest: 'demo/',
    options: {
      style: 'expanded',
      'sourcemap=none': true,
      noCache: true
    }
  },
  autoprefixer: {
    browsers: ['last 2 versions', '> 1%'],
    cascade: false,
    remove: true
  },
}

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch([config.sass.src, './*.sass'], ['sass']);
})

gulp.task('sass', function() {
  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sass(config.sass.options))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.sass.dest));
});


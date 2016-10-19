import eslint from 'gulp-eslint';
import gulp from 'gulp';
import livereload from 'gulp-livereload';
import nodemon from 'gulp-nodemon';
import notify from 'gulp-notify';
import stylus from 'gulp-stylus';
import babel from 'gulp-babel';

// Linter task
gulp.task('eslint', () => {
  return gulp.src([
    './**/*.js',
    '!/public/bower_components/**/*.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

//Babel
gulp.task('default', function () {
  return gulp.src('./**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/javascripts'));
});

// Stylus task
gulp.task('stylus', () => {
  return gulp.src('public/stylesheets/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(livereload())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('livereload', () => {
  livereload({ start: true });
});

gulp.task('start-dev', () => {
  livereload.listen();

  gulp.watch('public/stylesheets/*.styl', ['stylus']);

  nodemon({
    script: './server.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'development',
      'DATABASE_URL': 'sqlite://:@:/',
      'DATABASE_STORAGE': 'baseDatos.sqlite'
    }
  }).on('restart', () => {
    gulp.src('./server.js')
      .pipe(livereload())
      .pipe(notify('Reloading page, please wait...'));
  });
});

// Start production
gulp.task('start', () => {
  nodemon({
    script: './server.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'production'
    }
  });
});

gulp.task('default', ['livereload', 'start-dev']);

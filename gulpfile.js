const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require('gulp-pug');
const del = require('del');

const paths = {
  src: 'src/site-contents',
  dest: 'build/site-contents'
}

// SCSS
function css (cb) {
  gulp.src([paths.src + "/scss/main.scss", "node_modules/bulma/bulma.sass"])
  .pipe(sass())
  .pipe(gulp.dest(paths.dest + "/css"));
  cb();
}

// Pug
function html (cb) {
  gulp.src(paths.src + '/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest(paths.dest + "/"))
  cb();
}

// Clean
function clean (cb) {
  del(paths.dest + '/**');
  cb();
}

exports.build = gulp.series(clean, gulp.parallel(css, html));

exports.default = function () {
  gulp.watch(
    paths.src + '/*.pug',
    { ignoreInitial: false },
    gulp.parallel(css, html)
    );
  }

const { series, task, parallel, src, dest } = require("gulp");
const { clean } = require("./gulp-tasks/clean");
const { scripts } = require("./gulp-tasks/script");
const { images } = require("./gulp-tasks/img");

// Виправлення для правильного імпорту пакету gulp-sass
const sass = require('gulp-sass')(require('sass'));

// Определяем задачу styles з використанням sass компілятора
task("styles", function () {
  return src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'));
});

task("build", series(clean, scripts, 'styles', images)); // Виправлення виклику styles

const { serv } = require("./gulp-tasks/serv");
const { watch } = require("./gulp-tasks/watch");

task("dev", parallel(watch, serv));


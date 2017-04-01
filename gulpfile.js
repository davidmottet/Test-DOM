const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const strip = require('gulp-strip-comments');

gulp.task('javascript', () => {
    return gulp.src(['src/test/**/*.js', 'src/index.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('tests.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript:build', () => {
    return gulp.src(['src/test/**/*.js', 'src/index.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('tests.js'))
        .pipe(strip())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['javascript'])
})

// Tâche "build"
gulp.task('build', ['javascript:build']);

// Tâche par défaut
gulp.task('default', ['build']);

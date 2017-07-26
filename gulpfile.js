var gulp = require('gulp');
// required ruby & sass
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function () {
    // place code for your default task here
});
gulp.task('sass', function () {
    return sass('app/sass/*.scss')
        .pipe(gulp.dest('app/css'))
        .pipe(reload({
            stream: true
        }));
});
// watch files for changes and reload
gulp.task('serve', ['sass'], function () {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['*.html', 'js/**/*.js'], {
        cwd: 'app'
    }, reload);
    gulp.watch('app/sass/*.scss', ['sass']);
});
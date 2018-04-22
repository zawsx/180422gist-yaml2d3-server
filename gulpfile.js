var gulp = require('gulp');var googleWebFonts = require('gulp-google-webfonts');

var options = { };

gulp.task('2szfonts', function () {return gulp.src('./2szfonts.list').pipe(googleWebFonts(options)).pipe(gulp.dest('docs/fonts'));	});
gulp.task('default', ['2szfonts']);
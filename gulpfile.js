var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('src/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function(){
	gulp.watch('src/sass/**/*.scss',['styles']);
});

gulp.task('default',['watch', 'styles']);
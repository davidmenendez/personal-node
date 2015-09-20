var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('styles', function() {
	gulp.src('src/sass/**/styles.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('public/css/'))
	.pipe(browserSync.stream());
});

gulp.task('serve', ['styles', 'nodemon'], function() {
	browserSync.init(null, {
		proxy: 'http://localhost:8000',
		files: ['public/**/*.*'],
		port: 8001,
	});
	gulp.watch('./src/sass/**/*.scss',['styles']);
	gulp.watch('views/*.jade').on('change', browserSync.reload);
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('default', ['serve']);
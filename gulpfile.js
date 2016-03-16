var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var jade = require('jade');
var gulpJade = require('gulp-jade');

gulp.task('uglify', function() {
	return gulp.src('./src/scripts/**/scripts.js')
	.pipe(uglify())
	.pipe(gulp.dest('./public/scripts/'));
});

gulp.task('styles', function() {
	gulp.src('./src/sass/**/styles.scss')
	.pipe(sass({
		outputStyle: 'compressed'
		//outputStyle: 'expanded'
	}).on('error', sass.logError))
	.pipe(gulp.dest('public/css/'))
	.pipe(browserSync.stream());
});

gulp.task('watch', ['styles', 'uglify', 'nodemon'], function() {
	browserSync.init(null, {
		proxy: 'http://localhost:8000',
		files: ['public/**/*.*'],
		port: 8001,
	});
	gulp.watch('./src/scripts/**/scripts.js',['uglify']);
	gulp.watch('./src/sass/**/*.scss',['styles']);
	gulp.watch('./views/**/*.jade').on('change', browserSync.reload);
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

gulp.task('deploy', function() {
	return gulp.src('views/**/*.jade')
	.pipe(gulpJade({
    jade: jade,
    pretty: true
  }))
	.pipe(gulp.dest('public/deploy'));
});

gulp.task('default', ['watch']);
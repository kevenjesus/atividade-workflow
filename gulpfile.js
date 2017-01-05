var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var cssmin = require("gulp-cssmin");

gulp.task('minify-html', function(){
	return gulp.src('./source/index.html')
		   .pipe(htmlmin({collapseWhitespace: true}))
		   .pipe(gulp.dest('./dist'));
});

gulp.task('minify-css', function(){
	return gulp.src('./source/scss/*.scss')
		   .pipe(cssmin())
		   .pipe(gulp.dest('./dist/scss'));
});

gulp.task('assistir', function(){
	gulp.watch('./source/scss/*.scss', ['minify-css'])
	gulp.watch('./source', ['minify-html'])
});
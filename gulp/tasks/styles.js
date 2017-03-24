var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
mixins = require('postcss-mixins'),
cssImport = require('postcss-import');

gulp.task('styles', function(){
	console.log('Optimizing CSS styles..');
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, cssnested, autoprefixer]))
		.on('error',function(errorInfo){
			console.log('ERROR: ');
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});
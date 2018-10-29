var
	gulp      		= require('gulp'),
	concat      	= require('gulp-concat'),
	ghPages				= require('gulp-gh-pages'),
	plumber     	= require('gulp-plumber'),
	stylus      	= require('gulp-stylus'),
	uglify      	= require('gulp-uglify'),
	order					= require('gulp-order'),
	imagemin    	= require('gulp-imagemin'),
	browserSync 	= require('browser-sync'),
	jeet        	= require('jeet'),
	rupture     	= require('rupture'),
	koutoSwiss  	= require('kouto-swiss'),
	prefixer    	= require('autoprefixer-stylus'),
	cp          	= require('child_process'),
	messages 			= { jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build' },
	jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});

/**
 * Stylus task
 */
gulp.task('stylus-build', function(){
	gulp.src('src/styl/main.styl')
		.pipe(plumber())
		.pipe(stylus({
			use:[koutoSwiss(), prefixer(), jeet(),rupture()],
			compress: true
		})
	)
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.reload({stream:true}))
});

/**
 * Javascript Task
 */
gulp.task('js-build', function(){
	return gulp.src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(order([
			"src/js/vendor/jquery.min.js",
			"src/js/vendor/**/*.js",
			"src/js/**/*.js"
		], { base: './' }))
    .pipe(concat('main.min.js'))
    .pipe(uglify()) // {mangle: true}
    .pipe(gulp.dest('assets/js/'));
});

/**
 * Imagemin Task
 */
gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*.{jpg,png,gif}')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('assets/img/'));
});

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	gulp.watch('src/styl/**/*.styl', ['stylus-build']);
	gulp.watch('src/js/**/*.js', ['js-build']);
	gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
	gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/* Compile all src/ files and build _site/ */
gulp.task('build', ['js-build', 'stylus-build', 'jekyll-build']);

/* Deploy to gh-pages branch */
gulp.task('deploy', function() {
  return gulp.src('_site/**/*').pipe(ghPages());
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['js-build', 'stylus-build', 'browser-sync', 'watch']);

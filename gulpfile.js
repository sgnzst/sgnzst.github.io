const
	gulp = require('gulp'),
	gconcat = require('gulp-concat'),
	gplumber = require('gulp-plumber'),
	gsass = require('gulp-sass'),
	gprefix = require('gulp-autoprefixer'),
	guglify = require('gulp-uglify'),
	gorder = require('gulp-order'),
	gimagemin = require('gulp-imagemin'),
	gbabel = require('gulp-babel'),
	gdeploy = require('gulp-deploy-git'),
	cp = require('child_process');

let jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';

const app = {
	sass: {
		src: 'src/sass/main.scss',
    path: 'src/sass/**/*.scss',
    dest: 'assets/css/'
	},
  script: {
    src: 'src/js/**/*.js',
    dest: 'assets/js/',
    order: [
			"src/js/vendor/jquery.js",
			"src/js/vendor/**/*.js",
			"src/js/**/*.js"
    ]
  },
	imagemin: {
		src: 'src/img/**/*.{jpg,jpeg,png,gif}',
		dest: 'assets/img/'
	},
	jekyll: {
		watch: ['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*', '_config.yml']
	}
}

const jekyll = (done) => {
	return cp.spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
	.on('close', done);
}

const sass = () => {
  return gulp.src(app.sass.src)
  .pipe(gplumber())
  .pipe(gsass({outputStyle: 'compressed'}))
	.pipe(gprefix())
  .pipe(gulp.dest(app.sass.dest))
};

const script = () => {
	return gulp.src(app.script.src, { sourcemaps: true })
	.pipe(gplumber())
	.pipe(gorder(app.script.order, { base: './' }))
	.pipe(gbabel({
		presets: ['@babel/preset-env'],
		ignore: ['src/js/vendor/**/*.js']
	}))
	.pipe(guglify()) // {mangle: true}
  .pipe(gconcat('main.js'))
  .pipe(gulp.dest(app.script.dest));
}

const imagemin = () => {
	return gulp.src(app.imagemin.src)
	.pipe(gplumber())
	.pipe(gimagemin({
		optimizationLevel: 3,
		progressive: true,
		interlaced: true
	}))
	.pipe(gulp.dest(app.imagemin.dest));
}

const build = gulp.series(gulp.parallel(sass, script, imagemin), jekyll);

const deploy = () => gulp.src('_site/**/*', {read: false}).pipe(gdeploy({
	repository: 'https://sutanlab@github.com/sutanlab/sutanlab.github.io.git'
}));

const watch = () => {
	build();
	gulp.watch(app.sass.path, sass);
	gulp.watch(app.script.src, script);
	gulp.watch(app.imagemin.src, imagemin);
	gulp.watch(app.jekyll.watch, jekyll);
}

gulp.task('build', build);

gulp.task('deploy', deploy);

gulp.task('default', watch);

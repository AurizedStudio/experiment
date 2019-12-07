var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber'); // エラーが起きてもwatchを終了しない
var notify = require('gulp-notify'); // エラーが起こったときの通知
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require("gulp-autoprefixer"); // 2017/12現在gulp-sourcemapsに対応していないので代わりに↓を使用
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csscomb = require('gulp-csscomb');
var replace = require('gulp-replace');

// for style4.js practice
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));


var path = {
	srcHtml: './src/html/',
	srcScss: './src/scss/',
	dest: './htdocs/',
	destCss: './htdocs/css/'
};

gulp.task('compileHtml', function () {
	return gulp.src(path.srcHtml + 'page/**/*.html')
	.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
	.pipe(nunjucksRender({
		path: [path.srcHtml] // String or Array
	}))
	.pipe(replace(/\n+/g, '\n')) // 2行以上の改行を1行にする
	.pipe(gulp.dest(path.dest))
	.pipe(browserSync.stream());
});

gulp.task('compileScss', function() {
	return gulp.src(path.srcScss + 'style.scss')
		.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(postcss([ autoprefixer({grid: 'autoplace'}) ]))
		.pipe(replace(/\n+/g, '\n')) // 2行以上の改行を1行にする 納品時に整形する場合に使用
		// .pipe(csscomb()) // 納品時に整形する場合に使用
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.destCss))
		.pipe(browserSync.stream());
});

gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: path.dest,
			directory: true
		},
//		proxy: 'aurized1:8080/',
		open: 'external'
	});
	gulp.watch([
		path.dest + '**/*.js'
	]).on('change', browserSync.reload);
	gulp.watch([
		path.dest + '**/*.json'
	]).on('change', browserSync.reload);
});

gulp.task('watch', function(){
	gulp.watch(path.srcScss + '**/*.scss', gulp.task('compileScss'));
	gulp.watch(path.srcHtml + '**/*.html', gulp.task('compileHtml'));
});

gulp.task('default',
	gulp.parallel('watch', 'serve')
);

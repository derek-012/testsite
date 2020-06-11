const { src, dest, parallel, watch } = require('gulp');
const rigger = require('gulp-rigger');
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

const path = {
	build: {
		html: 'public/',
		css: 'public/css/',
		js: 'public/script/',
		jsmodules: 'public/script/modules',
		fonts: 'public/fonts',
		images: 'public/img'
	},
	src: {
		html: 'src/*.html',
		css: ['src/css/components/*.css', 'src/css/*.css'],
		js: 'src/script/*.js',
		jsmodules: 'src/script/modules/*.js',
		fonts: 'src/fonts/*.*',
		images: 'src/img/**/*'
	},
	watch: {
		html: 'src/**/*.html',
		css: 'src/css',
		js: 'src/script/*.js',
		jsmodules: 'src/script/modules/*.js',
		fonts: 'src/fonts/*.*',
		images: 'src/img/**/*'
	}
}

function html() {
	return src(path.src.html)
		.pipe(rigger())
		.pipe(dest(path.build.html))
}

function css() {
	return src(path.src.css)
		.pipe(cleanCss({ compatibility: 'ie8' }))
		.pipe(concatCss('style.min.css'))
		.pipe(dest(path.build.css))
}

function js() {
	return src(path.src.js)
		.pipe(concat('script.min.js'))
		.pipe(minify())
		.pipe(dest(path.build.js))
}

function jsmodules() {
	return src(path.src.jsmodules)
		.pipe(dest(path.build.jsmodules))
}

function fonts() {
	return src(path.src.fonts)
		.pipe(dest(path.build.fonts))
}

function images() {
	return src(path.src.images)
		.pipe(dest(path.build.images))
}

watch(path.watch.html, html);
watch(path.watch.css, css);
watch(path.watch.js, js);
watch(path.watch.jsmodules, jsmodules);
watch(path.watch.fonts, fonts);
watch(path.watch.images, images);

exports.default = parallel(html, css, js, jsmodules, fonts, images);
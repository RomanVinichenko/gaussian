const { src, dest, watch, parallel, series } = require('gulp');

const browserSync = require('browser-sync').create(),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-html-minifier-terser'),
    concat = require('gulp-concat'),
    del = require('del'),
    stripDebug = require('gulp-strip-debug'),
    webpackConfig = require('./webpack.config.js'),
    webpackProductConfig = require('./webpack.product.config.js'),
    webpackStream = require('webpack-stream'),
    cleanCSS = require('gulp-clean-css'),
    strip = require('gulp-strip-comments'),
    webpack = require('webpack'),
    cached = require('gulp-cached'),
    fileinclude = require('gulp-file-include')

const browsersync = () => {
    browserSync.init({
        server: {
            baseDir: 'dist/',
        },
        notify: false,
    });
};


const watching = () => {
    watch(['app/*.html'], fileInclude);
    watch(['app/template/*.html'], fileInclude);
    watch(['app/scss/**/*.scss', 'app/scss/**/*.sass'], styles);
    watch(['app/js/*.js'], scripts);
    watch(['dist/*.html']).on('change', browserSync.reload);
};

const styles = () => {
    return src('app/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(scss().on('error', scss.logError))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
};

// const productStyle = () => {
//     return src('app/scss/style.scss')
//         .pipe(sourcemaps.init())
//         .pipe(autoprefixer())
//         .pipe(concat('style.min.css'))
//         .pipe(
//             autoprefixer({
//                 overrideBrowserslist: ['last 10 version'],
//                 grid: true,
//             }),
//         )
//         .pipe(cleanCSS())
//             .pipe(dest('dist/css'));
//
// };


const scripts = () => {
    return src('app/js/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
};

// File include

const fileInclude = () =>{
    return src(['app/*.html', 'app/*.html'])// прописываем путь к отслеживаемым файлам .js
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('dist/'))
        .pipe(browserSync.stream());// необходимо для авто перезагрузки браузера
};


// const scriptsProduct = () => {
//     src('app/js/index.js')
//         .pipe( webpackStream(webpackProductConfig), webpack)
//         .pipe(stripDebug())
//         .pipe(strip())
//         .pipe(uglify())
//         .pipe(dest('../js'));
//
//
// }


const cleanDist = () => {
    return del('dist');
};

// const htmls = () => {
//     return src('app/*.html')
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(dest('dist/'));
// };



const build = () => {
    return src(
        [
            'app/css/style.min.css',
            'app/js/index.min.js',
            'app/fonts/**/*',
            'app/images/**/*',
        ],
        {
            base: 'app',
        },
    ).pipe(dest('dist'));
};

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
// exports.build = build;
// exports.cleanDist = cleanDist;
// exports.htmls = htmls;

// exports.build = series(cleanDist, htmls, build);
// exports.product = series(cleanDist, htmls, buildProduct);
exports.default = parallel(styles, scripts, fileInclude, browsersync, watching);

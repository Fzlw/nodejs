'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const xtpl = require('gulp-xtpl');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const globby = require('globby');

// const browserSync = require('browser-sync').create();
// const pug = require('gulp-pug');

let baseUrl = 'app/public/src/**/**/';
let buildUrl = 'app/public/build';
let componentPaths = [
    'app/public/src/**/**/*.js'
]


/**   配置参数   */
let xtplDefaultConfig = {
    
};


/** 编译scss|sass */
gulp.task('build:scss', () => {
    gulp.src(baseUrl + '*.+(sass|scss)')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(buildUrl))
})

/** 编译pug */
// gulp.task('build:pug', () => {
//     gulp.src(baseUrl + '*.pug')
//     .pipe(pug({
//         // config TODO
//         pretty: true
//     }))
//     .pipe(gulp.dest(buildUrl))
// })

/** 编译js */
// TODO  判断线上环境，混淆js
gulp.task('build:js', () => {
    gulp.src([
        baseUrl + '*.js',
        '!app/public/src/require.config.js'
    ])
    .pipe(babel({
        presets: [ '@babel/env' ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(buildUrl))
})


/**  编译 .xtpl 文件  */
gulp.task('build:xtpl', () => {
    gulp.src(baseUrl + '*.xtpl')
    .pipe(gulp.dest(buildUrl))  // 保留源文件
    .pipe(xtpl(xtplDefaultConfig))  // 编译成xtpl
    .pipe(gulp.dest(buildUrl))
})


/**   编译requirejs   */
gulp.task('build:requirejs', () => {
    globby(componentPaths).then(paths => {
        // paths.forEach   TODO
    })
})


// gulp.task('browserSync', ['watch'], () => {
//     browserSync.init({
//         proxy: 'http://127.0.0.1:7001/'
//     })
//     gulp.watch(baseUrl + '*.+(sass|scss)', [ 'build:scss' ]);
// })

/** 监听scss|sass 和 js 文件的更改 */
gulp.task('watch', [ 'build:scss', 'build:js', 'build:xtpl' ], () => {
    gulp.watch(baseUrl + '*.+(sass|scss)', [ 'build:scss' ]);
    gulp.watch(baseUrl + '*.js', [ 'build:js' ]);
    gulp.watch(baseUrl + '*.xtpl', [ 'build:xtpl' ]);
})



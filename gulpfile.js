'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
// const pug = require('gulp-pug');

let baseUrl = 'app/public/src/**/**/';
let buildUrl = 'app/public/build';


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
    gulp.src(baseUrl + '*.js')
    .pipe(babel({
        presets: [ '@babel/env' ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(buildUrl))
})

gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
})

/** 监听scss|sass 和 js 文件的更改 */
gulp.task('watch', [ 'build:scss', 'build:js' ], () => {
    gulp.watch(baseUrl + '*.+(sass|scss)', [ 'build:scss' ]);
    gulp.watch(baseUrl + '*.js', [ 'build:js' ]);
})



'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const xtpl = require('gulp-xtpl');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const globby = require('globby');
const gulpif = require('gulp-if');
const isOnline = process.env.PRO_BUILD === "true";
const appConfig = require('../config/config.default')({}); // 读取默认配置
const fs = require('fs');
const plumber = require('gulp-plumber');

// const browserSync = require('browser-sync').create();
// const pug = require('gulp-pug');

let baseUrl = '../app/public/src/**/**/';
let buildUrl = '../app/public/build';
let componentPaths = [
    '../app/public/src/**/**/*.js'
]


/**   配置参数   */
// https://www.npmjs.com/package/gulp-xtpl
// https://github.com/xtemplate/gulp-xtemplate
let xtplDefaultConfig = {
    prefix(options, file) {
        const name = genModName(file);
        return `define("${name}",['xtemplate'], function(TPL){var RT=TPL;var _ = ""; return (`;
    },
    suffix: ')(_, RT);});'
};

let requireDefaultConfig = {
    "baseUrl": `/${appConfig.staticPrefix}/${appConfig.staticVersion}/`,
    "paths": {
        "zepto": "https://cdn.bootcss.com/zepto/1.2.0/zepto"
    }
}

// 出错处理函数
function handleErr(err) {
    // 如果是线上环境就退出
    if (isOnline) {
        throw err;
    } else {
        console.log(err);
        console.log('-------------')
    }
}

function genModName(file) {
    // return pkg.name + (file.path || '')
    //   .replace(path.resolve('src/'), '');
    let path = file.path;
    path = path.replace(/\\/g, '/');
    // if (path.match(/\/pc\//)) {
    //   path = path.split(/\/pc\//)[0] + '/pc/';
    // }
    // if (path.match(/\/m\//)) {
    //   path = path.split(/\/m\//)[0] + '/m/';
    // }
    if (path.match(/\/build\//)) {
        path = path.split(/\/build\//)[1];
    }
    return `${path}`;
}


/** 编译scss|sass */
gulp.task('build:scss', () => {
    gulp.src(baseUrl + '*.+(sass|scss)')
        .pipe(sass())
        .on('error', handleErr) // 编译scss时出错自动退出，plumber似乎不OK
        // .pipe(plumber(handleErr))  // 忽略错误
        .pipe(gulpif(isOnline, cleanCSS()))
        .pipe(gulp.dest(buildUrl));
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
gulp.task('build:js', ['build:requirejs'], () => {
    gulp.src([
            baseUrl + '*.js',
            '!../app/public/src/require.config.js'
        ])
        .pipe(plumber(handleErr)) // 忽略错误
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulpif(isOnline, uglify()))
        .pipe(gulp.dest(buildUrl));
})


/**  编译 .xtpl 文件  */
gulp.task('build:xtpl', () => {
    gulp.src(baseUrl + '*.xtpl')
        .pipe(plumber(handleErr)) // 忽略错误
        .pipe(gulp.dest(buildUrl)) // 保留源文件
        .pipe(xtpl(xtplDefaultConfig)) // 编译成xtpl.js  requirejs规范的模块
        .pipe(gulp.dest(buildUrl));
})


/**   编译requirejs   */
gulp.task('build:requirejs', () => {
    globby(componentPaths).then(paths => {
        // paths.forEach   TODO
        paths.forEach((path, i) => {
            let filePath = path.replace(/.*app\/public\/src\//, "").replace(/\.js/, "");
            requireDefaultConfig.paths[filePath] = filePath;
        })
        // 生成require.config.js内容
        const requireConfigFile =
            `require.config(
            ${ JSON.stringify(requireDefaultConfig, null, 2) }
        )`;

        if (fs.existsSync('../app/public/build/require.config.js')) {
            fs.unlinkSync('../app/public/build/require.config.js');
        }
        fs.writeFileSync('../app/public/build/require.config.js', requireConfigFile, 'utf-8');
    })
})


// gulp.task('browserSync', ['watch'], () => {
//     browserSync.init({
//         proxy: 'http://127.0.0.1:7001/'
//     })
//     gulp.watch(baseUrl + '*.+(sass|scss)', [ 'build:scss' ]);
// })

/** 监听scss|sass 和 js 文件的更改   本地开发模式 */
gulp.task('watch', ['build:scss', 'build:js', 'build:xtpl'], () => {
    gulp.watch(baseUrl + '*.+(sass|scss)', ['build:scss']);
    gulp.watch(baseUrl + '*.js', ['build:js']);
    gulp.watch(baseUrl + '*.xtpl', ['build:xtpl']);
})


/**  线上环境   */
gulp.task('online', ['build:scss', 'build:js', 'build:xtpl']);
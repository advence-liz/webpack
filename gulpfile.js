"use strict"
const webpack = require('webpack'),
    clean = require("gulp-clean"),
    gulp = require('gulp'),
    path = require("path"),
    Q =require("q"),
    pkg = require("./package"),
    eslint = require('gulp-eslint');



gulp.task('build', function () {
    let deferred = Q.defer();
    let webpackConfig = require("./webpack.config.js");
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            console.error(err);
            deferred.reject();
            return;
        }
        stats.hasErrors() && console.log(stats.toString({
            chunks: true,  // 使构建过程更静默无输出
            colors: true    // 在控制台展示颜色
        }));
        deferred.resolve();
    });
    deferred.promise.then(function () {
        gulp.start("copy");
    })
    return deferred.promise;
})



gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
    return gulp.src(['./*.js'])
        // eslint() attaches the lint output to the "eslint" property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failAfterError last. 
        .pipe(eslint.failAfterError());
});

gulp.start("webpack");

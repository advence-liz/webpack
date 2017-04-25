const webpack = require('webpack'),
    clean = require("gulp-clean"),
    gulp = require('gulp'),
    path = require("path"),
    pkg = require("./package"),
    eslint = require('gulp-eslint');
/**
 * @var dist {String} 文件最终引用时所在路径
 * @var build {String} 文件编译后所在目录
 * @var src {String} 源文件所在目录
 */
var dist, src, build, srcPath, buildPath, distPath,
    webpackConfig = require("./webpack." + pkg.env);
src = "./src/**";
srcPath = "./src";
build = "./build/**";
buildPath = "./build/";
//dist = "./dist/**";
distPath = "./dist/"
webpackConfig.output.path = path.resolve(__dirname, buildPath)
/**
 * clean dist
 */

gulp.task("clean", function () {
    return gulp.src(distPath, { read: false }).pipe(clean());
});

gulp.task("copy", ['clean'], function () {
    return gulp.src([src, build], { base: '.' })
        .pipe(gulp.dest(distPath));
})

/**
 * webpack Task
 */

gulp.task("webpack", function () {
    webpack(webpackConfig, function (err, stats) {
        // console.dir(stats);
    })
})
/**
 *
 */
gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
    return gulp.src([srcPath + '/*.js'])
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

//gulp.start("webpack");

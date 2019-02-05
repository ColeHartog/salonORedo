'use strict';
var gulp = require("gulp"),
	sass = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css");

sass.compiler = require('node-sass');

gulp.task("sass", function(){
	return gulp.src("./public/styles.scss")
		.pipe(sass())
		.pipe(gulp.dest("./public"))
});

gulp.task("minify-css", function(){
    return gulp.src('./public/styles.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public'));
});

gulp.task("watch", function(){
	gulp.watch("./public/styles.scss", function(){
	return gulp.src("./public/styles.scss")
		.pipe(sass())
		.pipe(gulp.dest("./public"))
    })
});

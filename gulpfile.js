var gulp = require("gulp"),
	sass = require("gulp-sass");

gulp.task("sass", function(){
	return gulp.src("./public/styles.scss")
		.pipe(sass())
		.pipe(gulp.dest("./public"))
});

gulp.task("watch", function(){
	gulp.watch("./public/styles.scss", ["sass"])
});

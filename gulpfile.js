const gulp = require('gulp');
const groupConcat = require('gulp-group-concat');


gulp.task("js", function (done) {
    //gulp.src('**')  用于限定总的范围
    gulp.src('src/**')
        .pipe(groupConcat({
            'inline.js': ['src/js/*.js','src/src.js'],
            'test.js': 'src/js2/*.js',
            'ad.js':['src/js/a.js','src/js2/d.js']
        }))
        .pipe(gulp.dest('dist/js/'))
        .on("end",done);
});


gulp.task('css', function (done) {
    gulp.src('src/**')
        .pipe(groupConcat({
            'a.css':'src/css/a.css',
            'b.css':'src/css/b.css'
        }))
        .pipe(gulp.dest('dist/css/'))
        .on('end', done);
});
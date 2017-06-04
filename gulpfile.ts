import * as gulp from 'gulp';
import * as gulpMocha from 'gulp-mocha';
import * as gulpSourcemaps from 'gulp-sourcemaps';
import * as gulpTypescript from 'gulp-typescript';
import * as runSequence from 'run-sequence';
import * as typescript from 'typescript';


gulp.task('tsc', () => {
  const tsProject = gulpTypescript.createProject('tsconfig.json', {
    typescript: typescript
  });

  return tsProject.src()
    .pipe(gulpSourcemaps.init())
    .pipe(tsProject())
    .js
    .pipe(gulpSourcemaps.write())
    .pipe(gulp.dest('.'));
});

gulp.task('unit-test', () => {
  gulp.src('test/**/*.js')
    .pipe(gulpMocha());
});

gulp.task('develop', ['tsc'], () => {
  return gulp.watch('**/*.ts', () => runSequence('tsc', 'unit-test'));
});

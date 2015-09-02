var gulp 		   = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap 		   = require('gulp-wrap');
var declare 	 = require('gulp-declare');
var concat 		 = require('gulp-concat');

// path
var hbs = 'hbs/**/*.hbs';
var dest = 'public/assets/js/backbonejs/templates';

gulp.task('hbs', function(){
  gulp.src(hbs)
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.Templates',
      noRedeclare: true, // Avoid duplicate declarations
      processName: function(filePath) {
        // Allow nesting based on path using gulp-declare's processNameByPath()
        // You can remove this option completely if you aren't using nested folders
        // Drop the client/templates/ folder from the namespace path by removing it from the filePath
        return declare.processNameByPath(filePath.replace('hbs\\', ''));
      }
    }))
    .pipe(concat('layout.js'))
    .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
	gulp.watch(hbs, ['hbs']);
});

gulp.task('default', ['hbs','watch']);
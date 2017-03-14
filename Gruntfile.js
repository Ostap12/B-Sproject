'use strict';

module.exports = function(grunt) {

  // Project configuration.
var   config = {

pkg:grunt.file.readJSON('package.json'),

browserify: {
    options: {
        transform: [ require('brfs')],
        browserifyOptions: {
            basedir: "Frontend/src/js"
        }
    },
    editor: {
          src: 'Frontend/src/js/editorMain.js',
          dest:'Frontend/www/assets/js/editorMain.js'
    },
    reader:{ 
        src:'Frontend/src/js/readerMain.js',
        dest:       'Frontend/www/assets/js/readerMain.js'
    }, home: {
        src:        'Frontend/src/js/homeMain.js',
        dest:       'Frontend/www/assets/js/homeMain.js'
    }
  }
};
 
      
      
      
      var watchDebug = {
 options: {
 'no-beep':true
 },
 scripts:{
 files : ['Frontend/src/**/*.js','Frontend/**/*.ejs','Backend/**/*.ejs','Backend/**/*.js'],
 tasks: ['browserify:editor', 'browserfiy:reader', 'browserfiy:home']
 }
 };
config.watch = watchDebug;

grunt.initConfig(config);
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['browserify:editor']);

};

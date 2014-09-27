

module.exports = function(grunt) {
  
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),

    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js',
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfigFile: 'src/main.js'
          }
        }
      }
    },
  
    watch: {
      pivotal : {
        files: ['src/**/*.js', 'specs/**/*.js'],
        tasks: 'jasmine:pivotal:build'
      },
      less : {
        files: ['less/**.less'],
        tasks: ['less']
      }
    },

    less: {
      development: {
        options: {
          paths: ["less"],
          yuicompress: false
        },
        files: {
          "./main.css": "./less/main.less"
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less', 'jasmine']);
};
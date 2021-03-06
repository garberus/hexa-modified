'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        options: {
          separator: ';'
        },
        src: [
          'js/**/*.js'
        ],
        dest: 'dist/js/scripts-concat.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/scripts.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    less: {
      dist: {
        options: {
          yuicompress: true,
          ieCompat: false,
          cleancss: true
        },
        files: {
          'dist/css/style.css': 'less/style.less',
          'dist/css/editor-style.css': 'less/editor-style.less'
        }
      }
    },
    copy: {
      logo: {
        expand: true,
        cwd: 'img/',
        src: 'logo-web.png',
        dest: '../vemstur/wp-content/themes/hexa/',
        filter: 'isFile'
      },
      style: {
        expand: true,
        cwd: 'dist/css/',
        src: 'style.css',
        dest: '../vemstur/wp-content/themes/hexa/',
        filter: 'isFile'
      },
      editorstyle: {
        expand: true,
        cwd: 'dist/css/',
        src: 'editor-style.css',
        dest: '../vemstur/wp-content/themes/hexa/',
        filter: 'isFile'
      },
      php: {
        expand: true,
        cwd: 'php/',
        src: '**/*.*',
        dest: '../vemstur/wp-content/themes/hexa/',
        filter: 'isFile'
      },
      favicon: {
        expand: true,
        cwd: '.',
        src: 'favicon.ico',
        dest: '../vemstur/',
        filter: 'isFile'
      },
      languages: {
        expand: true,
        cwd: 'languages/',
        src: '**/*.*',
        dest: '../vemstur/wp-content/themes/hexa/languages',
        filter: 'isFile'
      }
    },
    clean: {
      all: 'dist/**/*.*',
      concat: '<%= concat.dist.dest %>'
    }
  });

  grunt.registerTask('default', ['clean:all', 'concat', 'uglify', 'clean:concat', 'less', 'copy']);
};

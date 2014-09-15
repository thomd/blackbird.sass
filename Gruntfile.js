"use strict";

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    tag: {
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
          banner: '<%= tag.banner %>'
        },
        files: {
          'blackbird.css': 'blackbird.sass'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'blackbird.css': 'blackbird.sass'
        }
      }
    },

    watch: {
      sass: {
        files: 'blackbird.sass',
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass:dev', 'watch']);
}

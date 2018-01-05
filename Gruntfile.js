module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json'), 
    //browserify: {
      //'public/bundle.js': ['src/javascript/index.js']
    //},
    less: {
      development: {
        options: {
          paths: 'src/css/less',
          yuicompress: true
        },
        files: {
          'public/style.css': 'src/css/less/style.less'
        }
      }
    },
    ejs: {
      all: {
        options: {
          data: grunt.file.readJSON('src/data/feed.json')        
        },
        src: 'src/views/layout.ejs',
        dest: 'public/index.html',
      },
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'public',
          keepalive: true,
          debug: true,
          open: {
            target: 'http://localhost:8080'
          },
        },
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      less: {
        files: 'src/css/less/*.less',
        tasks: 'less'
      },
      ejs: {
        files: 'src/views/**/*.ejs',
        tasks: 'ejs'
      },
      //browserify: {
        //files: 'src/javascript/*.js',
        //tasks: 'browserify',
      //},
    },
  });

  grunt.registerTask('default', ['less', 'ejs', 'connect']);
};


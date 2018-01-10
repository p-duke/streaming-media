var request = require('request');

module.exports = function(grunt) {
  grunt.registerTask('getData', function() {
    var done = this.async();
    request('https://content.jwplatform.com/feeds/f49AJ8N4.json', function(err, res, html) {
      if (!err && res.statusCode === 200) {
        var data = JSON.parse(res.body);
        var mainCarousel = data.playlist.slice(0,4);
        var scienceFiction = data.playlist.filter(item => item.tags.split(',').includes('science fiction'));
        var actionAdventure = data.playlist.filter(item => item.tags.split(',').includes('action and adventure and fun'));
        var drama = data.playlist.filter(item => item.tags.split(',').includes('drama'));
        var thriller = data.playlist.filter(item => item.tags.split(',').includes('thriller'));
        var comedy = data.playlist.filter(item => item.tags.split(',').includes('comedy'));
        var documentary = data.playlist.filter(item => item.tags.split(',').includes('documentary'));
        grunt.file.write('src/data/main-carousel.json', JSON.stringify(mainCarousel, null, 2));
        grunt.file.write('src/data/science-carousel.json', JSON.stringify(scienceFiction, null, 2));
        grunt.file.write('src/data/action-carousel.json', JSON.stringify(actionAdventure, null, 2));
        grunt.file.write('src/data/drama-carousel.json', JSON.stringify(drama, null, 2));
        grunt.file.write('src/data/thriller-carousel.json', JSON.stringify(thriller, null, 2));
        grunt.file.write('src/data/comedy-carousel.json', JSON.stringify(comedy, null, 2));
        grunt.file.write('src/data/documentary-carousel.json', JSON.stringify(documentary, null, 2));
      }

      done();
    });
  });

  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json'), 
    copy: {
      images: {
        expand: true,
        cwd: 'src/',
        src: 'images/**',
        dest: 'build/images/',
        flatten: true,
        filter: 'isFile',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <% grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/javascript/index.js',
        dest: 'build/index.min.js'
      },
    },
    less: {
      development: {
        options: {
          paths: 'src/css/less',
          yuicompress: true
        },
        files: {
          'public/style.css': 'src/css/style.less',
          'build/style.css': 'src/css/style.less'
        }
      }
    },
    ejs: {
      all: {
        options: {
          mainCarousel: grunt.file.readJSON('src/data/main-carousel.json'),
          science: grunt.file.readJSON('src/data/science-carousel.json'),
          action: grunt.file.readJSON('src/data/action-carousel.json'),
          drama: grunt.file.readJSON('src/data/drama-carousel.json'),
          thriller: grunt.file.readJSON('src/data/thriller-carousel.json'),
          comedy: grunt.file.readJSON('src/data/comedy-carousel.json'),
          documentary: grunt.file.readJSON('src/data/documentary-carousel.json'),
          titles: { scienceFiction: 'Science Fiction', action: 'Action Adventure and Fun', drama: 'Drama', thriller: 'Thriller', comedy: 'Comedy', doc: 'Documentary' }
        },
        src: 'src/views/layout.ejs',
        dest: 'public/index.html',
        dest: 'build/index.html'
      },
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: ['src','public'],
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
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['getData', 'less', 'ejs', 'connect']);
  grunt.registerTask('build-prod', ['getData', 'less', 'ejs', 'uglify', 'copy']);
};


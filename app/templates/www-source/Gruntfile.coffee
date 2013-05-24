module.exports = (grunt) ->
  grunt.initConfig
    concat:
      dist: {
        src: [
          'components/jquery/jquery.js',
          'components/underscore/underscore.js',
          'components/backbone/backbone.js',
          'components/marionette/lib/backbone.marionette.js',
          'components/mustache/mustache.js'
        ],
        dest: '../www/js/vendor.js'
      }

    templates:
      compile: {
        src: 'templates/',
        dest: '../www/js/templates.js',

        options: {
          namespace: "MUSTACHE"
        }
      }

    coffee:
      compile:
        src: [
            'coffee/app.coffee',
            'coffee/controllers/controller.coffee',
            'coffee/views/app/item.coffee',
            'coffee/models/app.coffee',
            'coffee/**/*.coffee',
            'coffee/init.coffee'
        ],
        dest: '../www/js/application.js'

    sass:
      compile:
        src: ['sass/application.scss'],
        dest: '../www/css/application.css'

    watch:
      files: [
        'coffee/**',
        'sass/**',
        'templates/**',
        '../www/index.html'
      ],
      tasks: 'default',
      options:
        livereload: false

  grunt.registerTask 'default', ['concat', 'coffee', 'sass', 'templates']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-simple-templates'

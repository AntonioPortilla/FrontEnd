module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
 
        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../src/',
            deployPath: '../deploy/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // Task configuration.
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['css/css.css', 'css/principal.css'],
                dest: 'destino/css/styles.css'
            }
        },
        cssmin: {
          compress: {
            files: {
              "destino/css/styles.min.css": "destino/css/styles.css"
            }
          }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'destino/index.html': 'index.html',     // 'destination': 'source'
                //'dist/contact.html': 'src/contact.html'
              }
            },
            dev: {                                       // Another target
              files: {
                'dist/index.html': 'src/index.html',
                'dist/contact.html': 'src/contact.html'
              }
            }
          }
        });
   
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
 
    // Default task
    grunt.registerTask('default', ['concat']);
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
};
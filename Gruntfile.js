var fs = require('fs');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: 'src/js/*.js',
                tasks: [
                    'jshint',
                    'uglify'
                ]
            },
            css: {
                files: 'src/css/*.css',
                tasks: [
                    'cssmin'
                ]
            },
            html: {
                files: 'src/html/*.html',
                tasks: [
                    'htmlmin'
                ]
            },
            hbs: {
                files: 'src/hbs/*.hbs',
                tasks: [
                    'handlebars'
                ]
            }
        },
        jshint: {
            all:[
                'Gruntfile.js',
                'src/js/*.js',
                'server.js'
            ]
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/'
            },
            min_target: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'build/js',
                    ext: '-min.js'
                }]
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/'
            },
            minify: {
                expand: true,
                cwd: 'src/css/',
                src: ['*.css'],
                dest: 'build/css/',
                ext: '-min.css'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/html',
                    src: '**/*.html',
                    dest: 'build/html',
                    ext: '-min.html'
                }]
            }
        },
        handlebars: {
            compile: {
                options: {
                    opts: {
                        namespace: 'template',
                        'module-name': 'example-templates',
                        version: '1.0.0'
                    },
                    helperFile: 'lib/hbs/yui-helper.js',
                    partialFile: 'lib/hbs/yui-partial.js',
                    templateFile: 'lib/hbs/yui-template.js',
                    wrapperFile: 'lib/hbs/yui-wrapper.js'
                },
                files: {
                    'build/hbs/handlebars-template.js': [
                        'src/hbs/*.hbs'
                    ]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-flex-handlebars');

    // Default task(s).
    grunt.registerTask('default', [
        'jshint',
        'uglify',
        'cssmin',
        'htmlmin',
        'handlebars'
    ]);

    grunt.registerTask('dev', [
        'default',
        'watch'
    ]);
};
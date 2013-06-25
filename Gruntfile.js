module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["assets/css"],
                    compress : false,
                    yuicompress : false
                },
                files: {
                    "assets/css/main.css": "assets/css/main.less"
                }
            }
        },

        // documentation here http://www.jshint.com/docs
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                unused: true,
                trailing: true,
                globals: {
                    jQuery: true
                },
            },
            uses_defaults: ['scripts/application/**/*.js']
        },

        express: {
            default_option: {}
        },

        watch: {
            assets: {
                files: 'assets/css/**/*.less',
                tasks: ['less'],
                options: {
                    debounceDelay: 250,
                }
            },
            scripts: {
                files: 'scripts/application/**/*.js',
                tasks: ['jshint'],
                options: {
                    debounceDelay: 250,
                },
            }
        },
    });

    // Default task(s).
    grunt.registerTask('server', ['less', 'express', 'watch']);
};

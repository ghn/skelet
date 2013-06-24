module.exports = function(grunt) {
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['less', 'jshint']);
};

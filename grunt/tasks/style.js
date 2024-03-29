// ## Style task
//
// Manage styles. By default sass files available in `<%= config.www.sass %>`
// are processed.
//
// * **style:dev** compiles stylesheets files and watch files for change.
// * **style:release** compiles stylesheets files and optimize for prodution.
module.exports = function (grunt) {
    "use strict";

    grunt.extendConfig({
        "sass": {
            "options": {
                "includePaths": [
                    // foundation
                    // If not already installed, just install through bower:
                    //
                    // `bower install --save foundation`
                    "<%= config.www.bower %>/foundation/scss/"
                ]
            },
            "all": {
                "files": [{
                    "expand": true,
                    "cwd": "<%= config.www.sass %>",
                    "src": "**/*.scss",
                    "dest": "<%= config.public.css %>",
                    "ext": ".css"
                }]
            }
        },
        "cssmin": {
            "release": {
                "files": [{
                    "expand": true,
                    "cwd": "<%= config.public.css %>",
                    "src": "**/*.css",
                    "dest": "<%= config.public.css %>",
                    "ext": ".css"
                }]
            }
        },
        "watch": {
            "sass": {
                "tasks": ["sass:all"],
                "files": ["<%= config.www.sass %>/**/*.scss"]
            }
        }
    });

    grunt.registerTask('style:dev', 'Build stylesheets continuously.', ['sass:all', 'watch:sass']);
    grunt.registerTask('style:release', 'Build stylesheets for release.', ['sass:all', 'cssmin:release']);
};

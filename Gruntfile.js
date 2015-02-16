
module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            default: {
                files: {
                    "dist/Default/styleguide.css": "src/Default/styleguide.less"
                }
            }
        },

        autoprefixer: {
            default: {
                src: "dist/**/*.css"
            }
        },

        cssmin: {
            default: {
                files: [{
                    expand: true,
                    cwd: "dist",
                    src: ["**/*.css", "!*.min.css"],
                    dest: "dist",
                    ext: ".min.css"
                }]
            }
        },

        concat: {
            options: {
                banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
                        "<%= grunt.template.today('yyyy-mm-dd') %> */\n"
            },
            default: {
                src: [
                    "bower_components/jquery-ui/ui/jquery.ui.core.js",
                    "bower_components/jquery-ui/ui/jquery.ui.widget.js",
                    "bower_components/jquery.tocify.js/src/javascripts/jquery.tocify.js",
                    "src/Default/styleguide.js"
                ],
                dest: "dist/Default/styleguide.js"
            }
        },

        uglify: {
            default: {
                files: [{
                    expand: true,
                    cwd: "dist",
                    src: "**/*.js",
                    dest: "dist",
                    ext: ".min.js"
                }]
            }
        }

    });

    grunt.registerTask("default", [
        "less",
        "autoprefixer",
        "cssmin",
        "concat",
        "uglify"
    ]);

    // load all grunt tasks matching the `grunt-*` pattern.
    // Eleminates need for individual grunt.loadNpmTasks() calls.
    require("load-grunt-tasks")(grunt);
};

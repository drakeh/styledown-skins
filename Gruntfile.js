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
        },

        styledown: {
            default: {
                files: {
                    "examples/Default/index.html": ["examples/Default/styleguide.md"]
                },
                options: {
                    title: "styledown-skins | Default",
                    css: "http://yui.yahooapis.com/pure/0.5.0/pure-min.css",
                    sg_css: "../../dist/Default/styleguide.min.css",
                    sg_js: [
                        "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
                        "../../dist/Default/styleguide.min.js"
                    ],
                    body:
                        "<div class=sg-menu>" +
                            "<div class=sg-title>Example Style Guide</div>" +
                            "<nav class=sg-toc></nav>" +
                        "</div>" +
                        "<div class=sg-content>" +
                            "<div sg-content></div>" +
                            "<div class=sg-copyright>&copy; Example Copyright</div>" +
                        "</div>"
                }
            }
        }

    });

    grunt.registerTask("default", [
        "less",
        "autoprefixer",
        "cssmin",
        "concat",
        "uglify",
        "styledown"
    ]);

    // load all grunt tasks matching the `grunt-*` pattern.
    // Eleminates need for individual grunt.loadNpmTasks() calls.
    require("load-grunt-tasks")(grunt);
};

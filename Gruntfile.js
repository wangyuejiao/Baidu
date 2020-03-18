module.exports = function(grunt) {
    grunt.initConfig({

        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "baidu1.html",
                dest: "dist/baidu1.html"
            }
        },
        cssmin: {
            "baidu1.css": "dist/baidu1css"
        },
        uglify: {
            release: {
                files: {
                    "baidu1.js": "dist/baidu1.js"
                }
            }
        },
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 1 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: './images', //原图存放的文件夹
                    src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: 'dist/images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        },
        copy: {
            html: {
                src: "./baidu1.html",
                dest: "./dist/baidu1.html"
            },
            css: {
                src: "./baidu1.css",
                dest: "./dist/baidu1.css"
            },
            js: {
                src: "./baidu1.js",
                dest: "./dist/baidu1.js"
            },
            image: {
                src: "./images",
                dest: "./dist/images"
            }
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask("release", ['copy', 'htmlmin', 'cssmin', 'uglify', 'imagemin']);
}

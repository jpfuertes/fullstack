module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
        files: [{
          src: [
              "src/**/*.ts",
              "data/**/*.ts",
              "!src/.baseDir.ts",
              "!src/_all.d.ts",
              "!node_modules/**/*.ts"
              ],
          dest: "dist"
        }],
        options: {
          fast: 'never',
          module: "commonjs",
          noLib: true,
          target: "es6",
          sourceMap: false,
          
        }
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/**/*.ts"]
      }
    }
    ,
    watch: {
      ts: {
        files: ["src/**/*.ts"],
        tasks: ["ts", "tslint"]
      }
    }
  });

  // grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");

  grunt.registerTask("default", [
    "ts"
    //,"tslint"
  ]);

};
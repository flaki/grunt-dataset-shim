/*
 * grunt-dataset-shim
 *
 *
 * Copyright (c) 2015 Flaki
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    'dataset-shim': {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/script_complex.js']
        }
      },
      custom_prefix: {
        options: {
          runtimePrefix: '__DATASET_SHIM'
        },
        files: {
          'tmp/custom_prefix': ['test/fixtures/script_complex.js']
        }
      },
      add_runtime: {
        options: {
          runtime: true
        },
        files: {
          'tmp/add_runtime': ['test/fixtures/script_complex.js']
        }
      },
     runtime_only: {
        options: {
          runtime: true
        },
        files: {
          'tmp/runtime_only': []
        }
      },
      custom_runtime_only: {
        options: {
          runtime: true,
          runtimePrefix: '__DATASET_SHIM'
        },
        files: {
          'tmp/custom_runtime_only': []
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'dataset-shim', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

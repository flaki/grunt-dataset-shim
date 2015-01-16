/*
 * grunt-dataset-shim
 *
 *
 * Copyright (c) 2015 Flaki
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Transpile lib
	var transpile = require('dataset-transpiler');

  grunt.registerMultiTask('dataset_shim', 'Replace .dataset object accesses in your JavaScript files with backwards-compatible Data.(set|get) calls.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      runtime: false,
      runtimePrefix: void 0 // default (Data)
    });

		var session = this,
			src;

		// Iterate over all specified file groups & concatenate them
		this.files.forEach(function(f) {

			// No source files specified, get just the runtime
			if (!f.src.length) {
				src = transpile( '', true, options.runtimePrefix );

				// Write the destination file.
				grunt.file.write(f.dest, src);

				// Print a success message.
				grunt.log.writeln('Runtime file "' + f.dest + '" created.');

			// Concatenate files, transpile & add runtime (if requested)
			} else {
				// Concat specified files.
				src = f.src.filter(function(filepath) {
					// Warn on and remove invalid source files (if nonull was set).
					if (!grunt.file.exists(filepath)) {
						grunt.log.warn('Source file "' + filepath + '" not found.');
						return false;
					} else {
						return true;
					}
				}).map(function(filepath) {
					// Read file source.
					return grunt.file.read(filepath);
				}).join();

				// Transpile
				src = transpile( src, options.runtime, options.runtimePrefix );
				grunt.file.write(session.target+'.log', JSON.stringify(session, null, 2)+src);

				// Write the destination file.
				grunt.file.write(f.dest, src);

				// Print a success message.
				grunt.log.writeln('Transpiled file "' + f.dest + '" created.');
			}
		});

  });

};

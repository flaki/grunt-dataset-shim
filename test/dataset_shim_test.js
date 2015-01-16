'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.dataset_shim = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'transpiling with default config.');

    test.done();
  },
  add_runtime: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/add_runtime');
    var expected = grunt.file.read('test/expected/add_runtime');
    test.equal(actual, expected, 'transpiling and including the runtime.');

    test.done();
  },
  custom_prefix: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_prefix');
    var expected = grunt.file.read('test/expected/custom_prefix');
    test.equal(actual, expected, 'transpiling with a custom runtime prefix.');

    test.done();
  },
  runtime_only: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/runtime_only');
    var expected = grunt.file.read('test/expected/runtime_only');
    test.equal(actual, expected, 'just fetching the runtime.');

    test.done();
  },
  custom_runtime_only: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_runtime_only');
    var expected = grunt.file.read('test/expected/custom_runtime_only');
    test.equal(actual, expected, 'just fetching the runtime with a custom runtime prefix.');

    test.done();
  },
};

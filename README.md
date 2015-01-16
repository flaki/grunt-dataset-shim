# grunt-dataset-shim

> Replace .dataset object accesses in your JavaScript files with backwards-compatible Data.(set|get) calls.
>
> Uses [dataset-transpiler](https://github.com/flaki/dataset-transpiler/) for translating dataset property accesses to get/set calls (which in turn, uses [Esprima](http://esprima.org/)).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dataset-shim --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dataset-shim');
```

## The "dataset_shim" task

### Overview
In your project's Gruntfile, add a section named `dataset_shim` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dataset_shim: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.runtime
Type: `Boolean`
Default value: `false`

Prepend the runtime functions to the begining of the concatenated transpiled source?

#### options.runtimePrefix
Type: `String`
Default value: `"Data"`

The name of the global runtime object to be used when transpiling dataset property accesses into `RuntimePrefix.(get|set)` calls.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  dataset_shim: {
    options: {},
    files: {
      'dest/out.js': ['src/one.js', 'src/two.js'],
    },
  },
});
```

#### Specifying no source will just generate a runtime file
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  dataset_shim: {
    options: {
    },
    files: {
      'dest/datase_runtime.js': [],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.0 - initial release (2015.01.16)

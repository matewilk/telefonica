module.exports = function(config){
  config.set({

    basePath : './',

    preprocessors: {
      'app/controllers/**/*.js': ['babel']
    },
    babelPreprocessor: {
        options: {
            presets: ['es2015'],
            plugins: ['transform-es2015-modules-umd'],
            sourceMap: 'inline'
        },
        filename: function (file) {
            return file.originalPath.replace(/\.js$/, '.es5.js');
        },
        sourceFileName: function (file) {
            return file.originalPath;
        }
    },

    frameworks: ['jasmine'],

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/controllers/**/*.js'
    ],

    autoWatch : true,

    browsers : ['PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-babel-preprocessor',
            'karma-phantomjs-launcher'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

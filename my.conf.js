// Karma configuration
// Generated on Tue Jan 05 2016 11:10:39 GMT-0600 (CST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'public/node_modules/angular/angular.js',
            'public/node_modules/angular-ui-router/build/angular-ui-router.js',
            'public/node_modules/angularfire/dist/angularfire.js',
            'https://cdn.firebase.com/js/client/2.3.2/firebase.js',
            // 'public/node_modules/firebase/lib/firebase-web.js', //firebase from node_modules didnt't work
            'public/app.js',
            'public/routes.js',
            'public/listview.js',
            'public/addevent.js',
            'public/editevent.js',
            'public/node_modules/angular-mocks/angular-mocks.js',

            'test/*.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}

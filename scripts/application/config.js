// Set the require.js configuration for your application.
require.config({
    // Initialize the application with the main application file
    deps: ["init"],    // --> call init.js

    // define lang
    locale: "en", //"fr-fr",

    paths: {
        // Libraries
        jquery      : "../vendors/jquery/jquery.min",
        underscore  : "../vendors/underscore/underscore-min",
        backbone    : "../vendors/backbone/backbone-min",

        // text plugin
        i18n        : '../vendors/requirejs-i18n/i18n',
        text        : "../vendors/requirejs-text/text"
    },

    shim: {
        backbone: {
            deps: ["underscore", "jquery", "i18n", "text"],
            exports: "Backbone"
        },

        underscore: {
            exports: "_"
        }
    }
});

// Set the require.js configuration for your application.
require.config({
    // Initialize the application with the main application file
    deps : ["../../tests/load.test"],                // --> call init.js

    baseUrl: "../scripts/application",

    paths: {
        // Libraries
        jquery      : "../vendors/jquery.min",
        underscore  : "../vendors/underscore.min",
        backbone    : "../vendors/backbone.min",

        // bootstrap
        bootstrap    : "../vendors/bootstrap.min",

        // text plugin
        text : "../vendors/require/text"
    },

    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        underscore: {
            exports: "_"
        }
    }
});
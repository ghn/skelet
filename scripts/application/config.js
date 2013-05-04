// Set the require.js configuration for your application.
require.config({
    // Initialize the application with the main application file
    deps: ["init"],    // --> call init.js

    // define lang
    locale: "en", //"fr-fr",

    paths: {
        // Libraries
        jquery      : "../vendors/jquery.min",
        underscore  : "../vendors/underscore.min",
        backbone    : "../vendors/backbone.min",

        // bootstrap
        bootstrap   : "../vendors/bootstrap.min",

        // Shim Plugin
        use: "../vendors/require/use",

        // text plugin
        text : "../vendors/require/text"
    },

    use: {
        backbone: {
            deps: ["use!underscore", "jquery"],
            attach: "Backbone"
        },

        underscore: {
            attach: "_"
        }
    }
});

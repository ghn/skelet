require([
    "backbone",
    "controllers/router"
],

function(Backbone, Router) {

    // Initiate the router
    var app_router = new Router();
    app_router.initialize();

    // Start Backbone history a neccesary step for bookmarkable URL's
    Backbone.history.start();
});

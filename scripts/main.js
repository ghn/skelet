require(["core/jquery.min",
	"order!core/jquery.color",
	"order!core/underscore.min",
	"order!core/backbone.min",
	"order!core/bootstrap.min",
	"order!application/controllers/main.class"], function(util) {
	
	$(function() {
		// Initiate the router
		var app_router = new AppRouter;
		
		// Start Backbone history a neccesary step for bookmarkable URL's
		Backbone.history.start();
    });
});

require([
	
	// Libs
	"jquery",
	"use!backbone",
	
	// Modules
	"controllers/router.class"
],

function($, Backbone, main_controller) {

	// Initiate the router
	var app_router = new main_controller;
	
	// Start Backbone history a neccesary step for bookmarkable URL's
	Backbone.history.start();
});

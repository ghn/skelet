// Set the require.js configuration for your application.
require.config({
	// Initialize the application with the main application file
	deps: ["init"],	// --> call init.js
	
	// define lang
	locale: "en", //"fr-fr",
	
	paths: {
		// Libraries
		jquery		: "../core/jquery.min",
		underscore	: "../core/underscore.min",
		backbone	: "../core/backbone.min",
		
		// bootstrap
		bootstrap	: "../core/bootstrap.min",
		
		// Shim Plugin
		use: "../core/require/use",
		
		// text plugin
		text : "../core/require/text"
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

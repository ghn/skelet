define([
	// Libs
	"use!backbone"
],
function(Backbone) {

	/**
	 *	Main controllers
	 */
	var AppRouter = Backbone.Router.extend({
		routes: {
			""		: "default_action",
			"/"		: "default_action"
		},
	
		initialize : function() {},
	
		default_action : function() {
			require(["pages/homepage.class"], function(homepage) {
				homepage.getInstance();
			});
		}
	});
	
	return AppRouter;
});
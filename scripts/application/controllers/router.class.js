define([
	// Libs
	"use!backbone"
],

function(Backbone, defaultModule, friendModule) {

	/**
	 *	Main controllers
	 */
	var AppRouter = Backbone.Router.extend({
		routes: {
			""				: "default_action",
			"/"				: "default_action",
			"/friend"		: "friend_list"
		},
	
		initialize : function() {},
	
		default_action : function() {
			require(["pages/homepage.class"], function(homepage) {
				homepage.getInstance();
			});
		},
	
		friend_list : function() {
			require(["pages/friend.class"], function(friend) {
				friend.getInstance();
			});
		}
	});

	// !! important !!
	return AppRouter;
});
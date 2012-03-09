define([
	
	// Libs
	"use!backbone",
	
	// modules
	"modules/default.class",
	"modules/friend.class"
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
	
		pages : {
			default_page : null,
			friend_page : null
		},
	
		initialize : function() {
			this.pages.default_page = new defaultModule;
			this.pages.friend_page = new friendModule;
		},
	
		default_action : function() {
			this.pages.default_page.template.render();
		},
	
		friend_list : function() {
			this.pages.friend_page.template.render_list();
		}
	});

	// !! important !!
	return AppRouter;
});
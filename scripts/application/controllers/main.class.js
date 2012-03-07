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
		require(["application/models/default.class"], function(f) {
			var default_app = new defaultCollection;
			default_app.template.render();
		});
	},
	
	friend_list : function() {
		require(["application/models/friend.class"], function(f) {
			friends = new friendCollection;
			friends.template.render_list();
		});
	}
});
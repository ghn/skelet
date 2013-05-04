define(["backbone"], function(Backbone, defaultModule, friendModule) {

    /**
     *    Main controllers
     */
    var Router = Backbone.Router.extend({
        routes: {
            ""     : "default_action",
            "demo" : "demo",
            "doc"  : "doc"
        },

        initialize : function() {},

        default_action : function() {
            require(["pages/homepage.class"], function(homepage) {
                homepage.init();
            });
        },

        demo : function() {
            require(["pages/friend.class"], function(friend) {
                friend.init();
            });
        },
    });

    return Router;
});

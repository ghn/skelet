define(["use!backbone"], function(Backbone, defaultModule, friendModule) {

    /**
     *    Main controllers
     */
    var AppRouter = Backbone.Router.extend({
        routes: {
            ""                : "default_action",
            "/"                : "default_action",
            "/demo"        : "demo",
            "/doc"        : "doc"
        },

        initialize : function() {},

        default_action : function() {
            require(["pages/homepage.class"], function(homepage) {
                homepage.getInstance();
            });
        },

        demo : function() {
            require(["pages/friend.class"], function(friend) {
                friend.getInstance();
            });
        },

        doc : function() {
            require(["pages/doc.class"], function(doc) {
                doc.getInstance();
            });
        },

    });

    // !! important !!
    return AppRouter;
});

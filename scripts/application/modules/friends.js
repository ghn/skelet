define(["backbone", "modules/friend"], function(Backbone, Friend) {

    var Friends = Backbone.Collection.extend({

        model : Friend,
        url : 'friend',

        // constructor
        initialize : function() {},

        clear_list : function() {
            this.remove(this.models);
        }
    });

    return new Friends();
});

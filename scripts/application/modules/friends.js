define(["backbone", "modules/friend"], function(Backbone, Friend) {

    var Friends = Backbone.Collection.extend({
        model    : Friend,

        url : 'friend',

        // constructor
        initialize : function() {},

        clear_list : function() {
            this.remove(this.models);
        },

        add_100_items : function() {
            var context = this;
            _(100).times(function() {
                context.add({
                    first_name : 'toto',
                    last_name : 'tutu'
                });
            });
        }
    });

    return new Friends;
});

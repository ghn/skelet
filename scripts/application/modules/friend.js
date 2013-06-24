define(["backbone"], function(Backbone) {

    var Friend = Backbone.Model.extend({

        initialize : function() {},

        full_name : function() {
            return this.escape('first_name') + ' ' + this.escape('last_name');
        }
    });

    return Friend;
});

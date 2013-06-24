define(["backbone"], function(Backbone) {

    var Friend = Backbone.Model.extend({

        defaults : {
            'first_name' : 'Jules',
            'last_name' : 'Verne',
            'age' : 12
        },

        initialize : function() {
            this.bind("error", function(model, error) {
                console.log(error);
            });
        },

        validate : function(attributes) {
            if ((attributes.first_name === '') || (attributes.last_name === '')) {
                return "First name and last name must be set";
            }
        },

        full_name : function() {
            return this.escape('first_name') + ' ' + this.escape('last_name');
        }
    });

    return Friend;
});

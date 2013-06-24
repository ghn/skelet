define([
    "backbone",
    "i18n!nls/lang",
    "modules/friends",
    "text!templates/friend/default.html"
],

function(Backbone, Dico, Friends, friendTemplate) {

    var FriendView = Backbone.View.extend({

        el : $('#app'),

        events : {
            "click #add_friend" : "add_friend",
            "click .clear" : "clear_list",
            "keypress input" : "submit",
        },

        template: _.template(friendTemplate),

        initialize : function() {},

        init : function() {
            this.render();
            Friends.bind("add remove", this.render, this);
            $('first_name').focus();
        },

        render : function() {
            $(this.el).html( this.template({friends : Friends}) );
        },

        add_friend : function() {
            Friends.add({
                first_name : $('#first_name').val(),
                last_name : $('#last_name').val()
            });
        },

        clear_list : function() {
            Friends.clear_list();
            this.render();
        },

        submit : function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (13 === code) {
                this.add_friend();
            }
        }
    });

    return new FriendView();
});

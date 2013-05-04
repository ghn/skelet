define([
    "use!backbone",
    "i18n!nls/lang",
    "modules/friend.module",
    "text!templates/friend/default.html"
],

function(Backbone, Dico, Friend, friendTemplate) {

    var FriendView = Backbone.View.extend({

        el : $('#app'),

        events : {
            "click #add_friend"    : "add_friend",
            "click .clear"            : "clear_list",
            "keypress input"        : "submit",
        },

        template: _.template(friendTemplate),

        initialize : function() {
            this.init();
        },

        init : function() {
            this.render();
            Friend.bind("add remove", this.render, this);
            $('first_name').focus();
        },

        render : function() {
            $(this.el).html( this.template({friends : Friend}) );
        },

        add_friend : function() {
            console.log("add");
            Friend.add({
                first_name    : $('#first_name').val(),
                last_name    :$('#last_name').val()
            });
        },

        clear_list : function() {
            Friend.clear_list();
            this.render();
        },

        submit : function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) this.add_friend();
        }
    });

    var instance = null;

    return {
        getInstance : function() {
            if (_.isNull(instance)) {
                instance = new FriendView;
                return instance;
            } else {
                instance.init();
                return instance;
            }
        }
    };
});

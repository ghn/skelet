define([
    "backbone",
    "i18n!nls/lang",
    "text!templates/default/default.html"
],

function(Backbone, Dico, defaultTemplate) {

    var DefaultView = Backbone.View.extend({

        el : $('#app'),

        template: _.template(defaultTemplate),

        initialize : function() {
            this.init();
        },

        init : function() {
            this.render();
        },

        render : function() {
            $(this.el).html( this.template({title : Dico.title}) );
        }
    });

    return new DefaultView;
});

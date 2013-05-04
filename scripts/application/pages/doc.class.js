define([
    "backbone",
    "i18n!nls/lang",
    "text!templates/doc/default.html"
],

function(Backbone, Dico, template) {

    var DocView = Backbone.View.extend({

        el : $('#app'),

        template: _.template(template),

        initialize : function() {},

        init : function() {
            this.render();
        },

        render : function() {
            $(this.el).html( this.template() );
        },
    });

    return new DocView;
});

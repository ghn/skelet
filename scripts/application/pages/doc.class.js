define([
	// Libs
	"use!backbone",
	
	// i18n
	"i18n!nls/lang",
	
	// templates
	"text!templates/doc/default.html"
],

function(Backbone, Dico, template) {
	
	var DocView = Backbone.View.extend({
	
		el : $('#app'),
	
		template: _.template(template),
		
		initialize : function() {
			this.init();
		},
		
		init : function() {
			this.render();
		},
		
		render : function() {
			$(this.el).html( this.template() );
		},
	});
	
	var instance = null;
	
	return {
		getInstance : function() {
			if (_.isNull(instance)) {
				instance = new DocView;
				return instance;
			} else {
				instance.init();
				return instance;
			}
		}
	};
});